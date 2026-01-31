# Graph Conversion Plan (Legacy Coordinates → Logical Graph)

Date: 2026-01-31

## Goal

Rebuild the legacy guidebook “graph pages” into a modern, responsive system by converting coordinate-positioned diagrams into a **logical graph** (nodes/edges/jumps), then regrouping content into **one file per in-game day**.

Key constraints and decisions:

- **Canonical source**: `guidebook/Data/page*.js` (original data).
- **Diff oracle**: `next/Data/page*.js` parsed in parallel and diffed to catch missed patterns early.
- **Primary truth**: logical graph topology (nodes/edges/jumps). Legacy geometry is kept only as **verification artifacts**.
- **Rendering**: use **auto layout** in the new UI; keep legacy pixel coordinates for double-checking.

## Why a New Extractor

The current runtime “props snapshot” extraction works for basic nodes/lines, but drops crucial semantics:

- `addClick(() => gotopage(page, anchor))` and `gotolink(anchor)` destinations are not serializable via props-only extraction.
- Edge direction is not explicit in extracted JSON; order can be misleading.
- Node sizes are not reliably available from static props.
- Flattened merged outputs are not page-structured enough for robust grouping.

An AST-based extractor can recover **intent** directly from the authored “DSL-like” script patterns.

---

## Plan: AST Extractor with Diff Oracle

Build a new AST-based extractor that reads the legacy page scripts, reconstructs a logical graph (nodes/edges/anchors/jumps) with computed legacy pixel coordinates for verification, then merges pages into “one file per day” graphs using date markers. In parallel, parse both the original and transformed datasets and diff the extracted IR summaries as an automated oracle.

### 1) Define the Canonical Intermediate Representation (IR)

**Node**

- `nodeId`: stable identifier (deterministic)
- `page`: page number
- `boxRow`, `boxCol`: indices from `box[row][col]`
- `kind`: constructor/function name (e.g., `Textbox_Selection`, `Textbox_Condition_C`, `ButtonBase`)
- `text`: label/content string (opaque; do not attempt to parse HTML)
- `routeHints`: optional hint strings (e.g. `"l|智代|..."`)
- `pixelPos`: `{ x, y }` computed
- `anchors[]`: strings from `.addLink('p12_A')`
- `source`: callsite metadata for traceability (file + statement index)

**Edge**

- `edgeId`: stable identifier (deterministic)
- `page`
- `from`, `to`: nodeIds
- `waypoints[]`: intermediate `Point(...)` positions as `{ x, y }`
- `source`: callsite metadata

**Jump**

- From node → `gotopage(n, 'anchor')`: `{ fromNodeId, toPage, toAnchor? }`
- From node → `gotolink('anchor')`: `{ fromNodeId, toAnchor }`

**PageMeta**

- `header`: route + `dateC/dateE` from `Header(...)`
- `footer`: page number and other footer props if needed

### 2) Implement AST Parsing + a Small Static Evaluator

Parse each file as a script and interpret statements top-to-bottom.

Handle (minimum required):

- `box[row] = new Array()`
- `box[row][col] = Textbox_*(...)` and `box[row][col] = new ButtonBase(...)`
- `line[line.length] = Link(...)`
- `line[line.length - 1].addClick(() => gotopage(...))` (edge-attached clicks exist)
- Node method calls:
  - `.addLink('p.._A')`
  - `.addClick(() => { gotopage(n, 'anchor'?); })`
  - `.addClick(() => { gotolink('anchor'); })`
- `hdft['header'] = Header(...)`
- `hdft['footer'] = Footer(...)`
- Track numeric state updates used by coordinates, especially:
  - `yLevel += <number>`

Be tolerant:

- Ignore unknown statements safely: `include_css(...)`, long string templating, unrelated helpers.
- Do not require perfect formatting; accept minor legacy quirks.

### 3) Compute Legacy Pixel Coordinates (for Verification)

Compute final pixel coordinates to enable visual double checks.

- Re-implement coordinate functions by referencing the legacy renderer math in `guidebook/cvg.js`:
  - `x()`, `y()`, `linx()`, `liny()`
- Treat `sizeSet` and scaling constants as explicit extractor inputs (or output multiple modes).
- Store computed pixels on nodes and waypoints.

Note: pixel coords help auditing, but **do not** become the rebuilt UI’s primary layout.

### 4) Normalize Edges with Explicit Direction

Treat `Link(arg0, ..., argN)` call order as the authoritative direction.

- Endpoints can be:
  - Node refs: `box[i][j]`
  - Waypoints: `Point(...)`
- Normalize into one logical edge:
  - `from = first node-like endpoint`
  - `to = last node-like endpoint`
  - `waypoints = all Point(...)` in between (as pixels)

Special case:

- `Link(...)` that contains only `Point(...)` should be classified as decorative/connector (keep only for debug overlay).

### 5) Preserve Anchors and Jumps (Cross-Page + Cross-Day)

Recover navigation semantics that props-based extraction drops:

- `.addLink('p12_A')` registers an anchor on a node.
- `.addClick(() => gotolink('p12_A'))` becomes an in-graph jump targeting that anchor.
- `.addClick(() => gotopage(24, 'p24_XTGZ'))` becomes a cross-page jump with explicit destination.

During day merging, keep these as:

- `crossDayEdges` when they connect different days
- or `auxiliaryEdges` when they jump to special/mini-guide pages.

### 6) Derive Day Segments Within a Page

A single legacy page can cover multiple in-game days.

Primary segmentation signal:

- Date-marker nodes, typically `Textbox_Date(...)`, where the text matches a real date:
  - Regex: `^\d{1,2}月\d{1,2}日`

Algorithm:

- Collect date markers on the page; sort by `pixelPos.y` ascending.
- Treat each date marker as starting a new segment.
- Assign each non-date node to the nearest date marker above it.

Fallback:

- If a page has no usable date markers, use header `dateC/dateE` from `Header(...)`.
  - Normalize formats like `4月22日（二）` → `4月22日`.
  - Treat ranges (`4月25日～5月2日`) and non-date titles as special/auxiliary unless explicitly mapped.

Important edge case:

- Some nodes may have `type`/styling suggesting “date” but contain non-date text (e.g., character names). Always regex-filter.

### 7) Merge Pages into “One File per Day” Graphs

Define `dayKey` as a normalized month/day identifier (e.g., `04-22` or `4月22日`).

For each day:

- Collect all nodes assigned to that day.
- Collect all edges whose endpoints are both in that day.
- Record cross-day edges separately.

Output structure:

- `meta`: day label, source pages, optional route tags
- `nodes[]`, `edges[]`
- `crossDayEdges[]` (optional)
- `auxiliaryPages[]` / `auxiliaryEdges[]` (optional)

### 8) Add Automated Validation (Correctness / Double Check)

Per page:

- Node count, edge count
- Anchor count, jump count
- List unresolved jumps (missing anchor destination)
- List unknown/unhandled statement patterns

Spot-check visualization:

- Produce a debug overlay render input using `pixelPos` + `waypoints` so a handful of pages/days can be visually compared to the legacy viewer.

### 9) Diff Oracle: Compare Guidebook vs Next

Run extraction on both sources:

- Canonical: `guidebook/Data/page*.js`
- Oracle: `next/Data/page*.js`

Generate a diff report per page:

- node/edge counts
- anchors and jump targets lists
- unresolved anchors/jumps
- unknown statement patterns

Only proceed to day-merging as “trusted” once diffs are clean or differences are explained/whitelisted.

---

## Verification Checklist (Early Milestone)

Run extraction on a small representative set:

- A menu/TOC page with many `gotopage` calls (page0)
- A complex page with anchors and cross-page jumps (page12)
- A page with mid-page day transitions (page23)

Confirm:

- All `gotopage`/`gotolink` are preserved with destinations.
- `Link(...)` call order matches extracted edge direction.
- Pixel coordinates are consistent enough for overlay spot checks.
- Day segmentation splits correctly and day files merge as expected.

---

## Deliverables

- AST extractor script (reads both `guidebook/Data` and `next/Data`)
- IR output per page + diff report (oracle)
- Day-level graph output (one file per day)
- Optional overlay/debug artifact to compare with legacy viewer
