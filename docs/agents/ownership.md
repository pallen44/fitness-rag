# Ownership

This repository has a deliberate ownership split. The project owner builds the intelligence layer. Codex agents build the surrounding product foundation and application surfaces.

## Project Owner

The project owner personally owns:

- `packages/ai/`
- `packages/rag-core/`
- `docs/pipeline/`
- Pipeline-related database schema when explicitly needed

The owner is responsible for:

- AI provider abstraction.
- Mock provider.
- Ollama provider stubs and implementations.
- Hosted provider adapters.
- RAG-core public interfaces.
- Activity ingestion and normalization.
- Storage helpers for pipeline data.
- Summarization.
- Embeddings.
- Retrieval.
- Context building.
- Prompt construction.
- AI recommendation generation.
- Memory storage and search.

Codex agents must not implement these internals.

## Codex Agents

Codex agents usually own:

- `apps/web/`
- `apps/api/`
- `packages/api-client/`
- `packages/shared/`
- `docs/agents/`
- `docs/architecture/`
- `docs/deployment/`
- `.github/`
- Root configuration files when the work packet allows them

Codex agents are expected to build:

- App shell and navigation.
- API route shells and product wrappers.
- Profile, activity, import, dashboard, training, adventure, and recommendation UI.
- API clients and shared schemas.
- Weather and other external API wrappers.
- Tests for app-owned behavior.
- Agent and project documentation.
- CI and deployment setup.

## Shared or Contract-Controlled Areas

These areas require extra care:

- `packages/db/`
- `packages/shared/`
- `docs/architecture/`
- `packages/rag-core/src/index.ts`

Agents may modify shared or contract-controlled areas only when a work packet explicitly allows it.

## RAG-Core Access Rule

Application code should call RAG-core only through public exports from:

```text
packages/rag-core/src/index.ts
```

Do not import from internal paths such as:

```text
packages/rag-core/src/ingestion/*
packages/rag-core/src/retrieval/*
packages/rag-core/src/generation/*
packages/rag-core/src/context/*
packages/rag-core/src/memory/*
```

This protects the owner-maintained pipeline from accidental coupling.

## AI Provider Rule

Application code should depend on provider-agnostic interfaces. Tests must use mock AI providers. Do not call Ollama, hosted AI APIs, or provider-specific SDKs from Codex-owned tests unless a future packet explicitly allows a smoke test.
