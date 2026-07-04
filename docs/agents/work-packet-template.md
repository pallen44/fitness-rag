# Work Packet Template

Copy this template when defining a new Codex work packet.

## Work Packet ID and Title

`WP-X.Y - Title`

## Owner

Codex agent or project owner.

## Objective

State the concrete outcome in one or two sentences.

## Background / Context

Explain why this packet exists and how it fits into the project plan.

## Dependencies

List packets, docs, decisions, or interfaces that must exist before this work can land.

## Inputs

List the docs, contracts, fixtures, designs, or APIs the agent should use.

## Outputs

List the files, directories, behavior, or documentation this packet should produce.

## Allowed Files / Directories

List the only paths the agent may modify.

Example:

```text
apps/api/src/modules/profile/
packages/shared/
packages/api-client/
```

## Forbidden Files / Directories

List paths that must not be modified.

Example:

```text
packages/ai/
packages/rag-core/
apps/web/
```

## Acceptance Criteria

List observable requirements that must be true when the packet is complete.

## Definition of Done

List final completion requirements, including documentation, tests, and PR notes.

## Suggested Tests / Checks

List expected checks, such as:

```text
corepack pnpm typecheck
corepack pnpm test
corepack pnpm lint
```

Implementation packets must include tests. Tests that touch AI behavior must use mock AI providers.

## Reviewer Checklist

List packet-specific review questions.

## Parallelization Notes

State which packets can run before, after, or alongside this one.
