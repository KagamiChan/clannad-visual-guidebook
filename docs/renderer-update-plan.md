# Renderer update plan (web/)

Date: 2026-01-31

Goal: migrate `web/` to render the new generated logical graph outputs under `generated/`, starting with an MVP that “works” (renders + basic navigation), ignoring `sizeSet` and legacy pixel geometry.

## Constraints / decisions

- React is required.
- Keep ReactFlow + ELK for now.
- Ignore `sizeSet` for MVP (no use of `pixelPosBySizeSet` / `waypointsBySizeSet`).
- Data loading strategy: use `import.meta.glob()` from files under `web/src/`.

## Milestones

### Milestone 1: MVP vertical slice (one day renders)

1. Sync a representative day JSON into `web/src/generated/days/` (e.g. `04-15.json`).
2. Add minimal generated schema types.
3. Add adapter from generated day graph → ReactFlow nodes/edges.
4. Add a route that loads `04-15` and renders it via existing `FlowChart`.
5. Ensure ELK layout runs on first load (layout reruns when nodes/edges change).

Success criteria:

- `/generated/day/04-15` renders nodes and edges.
- Layout runs without manual refresh/resize.

### Milestone 2: All days + routing

1. Sync `generated/days/index.json` into `web/src/generated/days/index.json`.
2. Use `import.meta.glob('./generated/days/*.json')` to load any day by `dayKey`.
3. Build sidebar items from the index file (31 days).

Success criteria:

- Sidebar lists all days.
- Navigating between days loads and renders.

### Milestone 3: Navigation semantics (jumps/anchors)

1. Expose `jumps` from generated nodes on ReactFlow node `data`.
2. Implement click behavior:
   - `gotopage(toPage, toAnchor?)`: resolve `toPage` to a day via `index.json.sourcePages[]` and navigate to that day route.
   - If `toAnchor` exists: highlight/focus the target node after navigation.
3. Optionally represent cross-day edges as synthetic “external day” nodes.

Success criteria:

- Clicking a node with a jump navigates to the correct day.
- Anchor highlighting works where anchors exist.

## Notes / backlog

- `sizeSet` and legacy pixel positions remain useful for a later “legacy layout” toggle and verification, but are explicitly out of scope for MVP.
- Cleanup items like hiding `kind: "Array"` or other structural nodes can be refined incrementally.
