# Backlog

This file tracks follow-up tasks and nice-to-haves that are **not required for the current milestone**, so we don’t lose them if the chat session is lost.

## How to use

- Add new items under **Backlog**.
- Move items to **Done** when finished.
- Keep items short; add links to relevant files when helpful.

## Backlog

- [ ] Cleanup IR artifacts (optional)
  - Filter out non-semantic nodes emitted by legacy initialization (e.g. nodes with `kind: "Array"`).
  - Drop edges that reference filtered nodes.
  - Add lightweight validation/reporting for jump/anchor consistency (missing target anchors, missing `toPage`, etc.).

## Done

- [x] Extract navigation semantics from `.addClick(...)` / `.addLink(...)` and regenerate outputs.
