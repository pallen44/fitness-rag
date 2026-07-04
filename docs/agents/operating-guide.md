# Codex Agent Operating Guide

This guide defines how Codex agents should work in this repository.

## Operating Model

Each Codex agent receives one work packet. One work packet equals one PR. A PR should not combine unrelated features, refactors, or documentation cleanup.

Start every packet by reading:

1. The assigned work packet.
2. `AGENTS.md`.
3. `docs/agents/ownership.md`.
4. `docs/architecture/module-boundaries.md`.
5. Any architecture docs named in the packet.

## Scope Discipline

Every work packet must list allowed files or directories and forbidden files or directories. Stay inside the allowed scope.

If you discover a needed change outside the allowed scope:

1. Do not make the change.
2. Add a note to the PR description.
3. If the packet cannot be completed safely, stop and ask for clarification.

Do not use a documentation packet to change product behavior. Do not use an implementation packet to rewrite architecture docs unless the packet explicitly allows it.

## RAG and AI Boundaries

The project owner personally owns `packages/ai/` and `packages/rag-core/`.

Codex agents must not:

- Implement AI provider internals.
- Implement RAG ingestion, retrieval, embeddings, context building, generation, or memory internals.
- Import from RAG-core internal module paths.
- Add tests that depend on live AI providers.

Codex agents may call stable public RAG-core APIs only from:

```text
packages/rag-core/src/index.ts
```

If the public API is missing something, document the need. Do not add a private import to work around the boundary.

## Branches and Commits

Use packet-oriented branch names, for example:

```text
agent/wp-0-2-agent-docs
agent/wp-1-1-web-shell
agent/wp-3-1-recommendation-api
```

Keep commits focused. A clean PR is more important than a clever one.

## Tests

Implementation packets must add appropriate tests. The test level should match the change:

- API changes should include route or module tests.
- UI changes should include component, interaction, or smoke tests where practical.
- Shared contracts should include unit tests or type-level coverage where practical.
- Integration wrappers around RAG-core should mock RAG-core public exports.

All AI-related tests must use mock AI providers. Tests must not require:

- Hosted AI API keys.
- Live Ollama.
- Paid APIs.
- Garmin OAuth.
- Strava OAuth.
- Live weather services.

Documentation-only packets do not require code tests, but agents should run available checks when the repo supports them.

## PR Expectations

Before opening a PR:

- Confirm the diff stays inside the packet scope.
- Confirm forbidden directories were not modified.
- Run the packet's suggested checks when available.
- Fill out the PR checklist from `docs/agents/pr-checklist.md`.

If a check cannot be run, explain why in the PR.
