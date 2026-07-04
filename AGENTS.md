# Codex Agent Instructions

This repo uses work packets so multiple Codex agents can work in parallel without stepping on the intelligence layer.

## Required Reading

Before changing files, read:

- `docs/agents/operating-guide.md`
- `docs/agents/ownership.md`
- `docs/architecture/module-boundaries.md`
- The work packet assigned to you

## Ownership Rules

The project owner personally owns:

- `packages/ai/`
- `packages/rag-core/`
- `docs/pipeline/`
- Pipeline-related database schema when explicitly needed

Codex agents must not implement RAG or AI internals. Do not edit internal files under `packages/ai/` or `packages/rag-core/` unless a work packet explicitly grants that scope.

When application code needs RAG behavior, call only public exports from:

```text
packages/rag-core/src/index.ts
```

Do not import from `packages/rag-core/src/ingestion/`, `packages/rag-core/src/retrieval/`, `packages/rag-core/src/generation/`, or any other internal RAG-core path.

## Work Packet Rules

- One work packet equals one PR.
- Stay inside the allowed file scope listed in the work packet.
- Treat forbidden files and directories as off limits.
- Do not mix unrelated cleanup, refactors, or product changes into a packet.
- Do not implement product logic unless the assigned packet specifically requires it.
- If a needed change falls outside scope, document it in the PR instead of making it.

## Testing Rules

- Implementation packets must add or update tests.
- Tests must be deterministic.
- Tests must use mock AI providers.
- Tests must not require hosted AI keys, live Ollama, paid APIs, Garmin OAuth, Strava OAuth, or live weather APIs.

Documentation-only packets may skip code tests, but should still run available checks when practical.

## Pull Request Rules

Every PR should include:

- The work packet ID and title.
- The allowed file scope.
- A summary of changed files.
- Tests or checks run.
- Any out-of-scope follow-up notes.

Use `docs/agents/pr-checklist.md` before opening a PR.
