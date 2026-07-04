# PR Checklist

Use this checklist before opening a PR.

## Packet Scope

- [ ] PR covers exactly one work packet.
- [ ] Branch name matches the packet.
- [ ] Changed files are inside the packet's allowed scope.
- [ ] Forbidden files and directories were not modified.
- [ ] No unrelated cleanup or refactoring is included.

## Ownership Boundaries

- [ ] `packages/ai/` was not modified unless explicitly allowed.
- [ ] `packages/rag-core/` internals were not modified unless explicitly allowed.
- [ ] Application code calls RAG-core only through `packages/rag-core/src/index.ts`.
- [ ] No imports were added from RAG-core internal paths.
- [ ] No AI provider internals were implemented by a Codex agent.

## Tests and Checks

- [ ] Implementation packet includes tests.
- [ ] AI-related tests use mock AI providers.
- [ ] Tests do not require hosted AI keys, live Ollama, paid APIs, Garmin OAuth, Strava OAuth, or live weather APIs.
- [ ] Suggested checks from the work packet were run.
- [ ] Any skipped checks are explained in the PR.

## Documentation and Contracts

- [ ] Public contracts or schemas are documented when changed.
- [ ] Module boundary changes are reflected in `docs/architecture/module-boundaries.md` when explicitly allowed.
- [ ] Out-of-scope follow-ups are listed instead of being implemented.

## PR Description

- [ ] Work packet ID and title are included.
- [ ] Summary explains what changed.
- [ ] Tests/checks are listed with results.
- [ ] Scope notes call out any intentionally deferred work.
