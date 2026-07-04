# Module Boundaries

This document defines the main module boundaries for the fitness-rag repository.

## Boundary Principles

- Keep product surfaces separate from intelligence internals.
- Call stable public package exports rather than internal files.
- Treat shared contracts as deliberate interfaces.
- Use mock providers in tests.
- Keep each work packet inside its allowed file scope.

## Application Layer

### `apps/web/`

The web app owns browser-facing UI, routes, client-side state, forms, loading states, and display of API responses.

The web app may depend on:

- `packages/api-client`
- `packages/shared`

The web app must not depend directly on:

- `packages/ai`
- RAG-core internal files
- Database internals

### `apps/api/`

The API app owns HTTP routes, request validation, response shaping, auth/session boundaries, product modules, and calls into product services.

The API app may depend on:

- `packages/shared`
- `packages/api-client` only when useful for shared client contracts
- `packages/db` when the packet allows database work
- Public exports from `packages/rag-core/src/index.ts`

The API app must not depend on:

- `packages/ai` internals
- RAG-core internal files
- Provider-specific SDKs for AI behavior

## Intelligence Layer

### `packages/ai/`

The project owner owns this package. It contains AI provider interfaces and provider implementations for local, hosted, and mock modes.

Codex agents must not implement AI provider internals. Tests in Codex-owned areas should use mock AI providers or mock package boundaries.

### `packages/rag-core/`

The project owner owns this package. It contains ingestion, normalization, storage helpers, summarization, embeddings, retrieval, context building, generation, and memory behavior.

The only supported application entrypoint is:

```text
packages/rag-core/src/index.ts
```

Codex agents must not import from internal RAG-core paths. Allowed usage looks like:

```ts
import { generateTrainingRecommendation } from "@fitness-rag/rag-core";
```

Disallowed usage looks like:

```ts
import { generateTrainingRecommendation } from "@fitness-rag/rag-core/src/generation/generateTrainingRecommendation";
```

If the public index does not export a needed contract, document the gap for the owner.

## Data and Contracts

### `packages/shared/`

Shared types and schemas live here when they are useful to both app and API surfaces. Keep this package product-facing and provider-agnostic.

Shared types must not leak RAG-core internal implementation details.

### `packages/db/`

Database client, schema, and migrations live here. This package is shared or contract-controlled. Agents may modify it only when the assigned work packet allows database work.

Pipeline-specific schema should be coordinated with the project owner.

### `packages/api-client/`

Typed API client helpers live here. This package should call API routes, not RAG-core or database modules directly.

## Documentation

### `docs/agents/`

Agent process docs, ownership docs, packet templates, and PR checklists live here.

### `docs/architecture/`

Architecture decisions and boundary docs live here. Changes should clarify contracts rather than hide product behavior.

### `docs/pipeline/`

Pipeline documentation is owner-controlled because it describes RAG and AI internals.

## Testing Boundaries

Implementation packets must add tests that match their scope.

Tests must use mock AI providers or mocked package boundaries. Tests must not depend on:

- Hosted AI APIs.
- Live Ollama.
- Paid APIs.
- Garmin OAuth.
- Strava OAuth.
- Live weather APIs.

API wrapper tests that call RAG behavior should mock public exports from `packages/rag-core/src/index.ts`.
