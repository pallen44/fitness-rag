# Current Milestone: Milestone 0 - Local-First Project Setup

Because the repository is still effectively empty, the current milestone should be Milestone 0 only.

## Goal

Create the local-first project foundation so you and Codex agents can work in parallel safely.

Do not start product features yet.

## Ownership Split for This Milestone

### You Personally Build

You own the AI/RAG foundation interfaces:

- `packages/ai/`
- `packages/rag-core/`
- `docs/pipeline/`

For Milestone 0, you should focus only on:

- AI provider abstraction
- Mock provider
- Ollama provider stubs
- Public RAG-core interface stubs
- Pipeline docs

### Codex Agents Build

Codex agents own the surrounding project foundation:

- `apps/web/`
- `apps/api/`
- `packages/shared/`
- `packages/api-client/`
- `packages/db/`
- `docs/agents/`
- `docs/architecture/`
- `.github/`
- root config files

For Milestone 0, Codex should focus only on:

- Monorepo setup
- App/API skeletons
- Local Docker/Postgres/pgvector setup
- CI baseline
- Agent operating docs
- Shared type package skeleton

## Work Packet 0.1 - Monorepo Skeleton

### Owner

Codex agent

### Objective

Create the base monorepo structure, package manager setup, TypeScript config, and placeholder packages/apps.

### Background / Context

The repo currently only has a minimal README. This packet creates the foundation for all future work.

### Dependencies

None.

### Inputs

Approved project plan.

### Outputs

- `apps/web/`
- `apps/api/`
- `packages/shared/`
- `packages/api-client/`
- `packages/db/`
- `packages/ai/`
- `packages/rag-core/`
- `docs/`
- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.gitignore`
- `README.md`

### Allowed Files / Directories

- `apps/`
- `packages/`
- `docs/`

### Forbidden Files / Directories

None for this first packet, but the agent should only scaffold `packages/ai` and `packages/rag-core`; it should not implement AI/RAG internals.

### Acceptance Criteria

- `pnpm install` works.
- Root scripts exist:
  - `dev`
  - `build`
  - `typecheck`
  - `test`
  - `lint`
- Placeholder packages compile.
- `apps/web` has a minimal runnable placeholder.
- `apps/api` has a minimal runnable placeholder.
- `packages/ai` and `packages/rag-core` exist but contain only placeholder exports or TODOs.

### Definition of Done

- Monorepo structure exists.
- Root README has basic setup instructions.
- No real product logic added.
- No AI/RAG pipeline implementation added by Codex.

### Suggested Tests / Checks

- `pnpm install`
- `pnpm typecheck`
- `pnpm test`

### Reviewer Checklist

- Did the agent keep this as scaffolding only?
- Did it avoid implementing RAG/AI internals?
- Are package boundaries clear?
- Can future agents work from this structure?

## Work Packet 0.2 - Agent Operating Docs

### Owner

Codex agent

### Objective

Create documentation that defines how Codex agents should work in the repo.

### Background / Context

Multiple autonomous Codex agents will work in parallel. They need explicit boundaries and PR expectations.

### Dependencies

Can run after or alongside WP-0.1, but should be reconciled with the final folder structure.

### Inputs

Approved ownership split.

### Outputs

- `AGENTS.md`
- `docs/agents/operating-guide.md`
- `docs/agents/ownership.md`
- `docs/agents/work-packet-template.md`
- `docs/agents/pr-checklist.md`
- `docs/architecture/module-boundaries.md`

### Allowed Files / Directories

- `AGENTS.md`
- `docs/agents/`
- `docs/architecture/`
- `README.md`

### Forbidden Files / Directories

- `packages/rag-core/`
- `packages/ai/`
- `apps/web/`
- `apps/api/`

### Acceptance Criteria

Docs clearly state:

- You own `packages/ai`.
- You own `packages/rag-core`.
- Codex agents must not implement RAG internals.
- Codex agents must call only public exports from `packages/rag-core/src/index.ts`.
- One work packet equals one PR.
- Agents must stay inside allowed file scopes.
- Agents must add tests for implementation packets.
- Agents must use mock AI providers in tests.

### Definition of Done

- Agent instructions are clear enough for future Codex agents to follow without extra explanation.
- PR checklist exists.
- Work packet template exists.
- Module boundary document exists.

### Suggested Tests / Checks

No code tests required.

Suggested check:

- `pnpm typecheck` if available after WP-0.1.

### Reviewer Checklist

- Are ownership boundaries explicit?
- Are forbidden areas clear?
- Does the doc prevent agents from modifying RAG internals?
- Does the PR checklist enforce scope control?

## Work Packet 0.3 - Local Database Foundation

### Owner

Codex agent

### Objective

Add local PostgreSQL + pgvector development setup and a minimal database package skeleton.

### Background / Context

The MVP depends on PostgreSQL and pgvector. This packet should set up local infrastructure but not design the full schema yet.

### Dependencies

WP-0.1.

### Inputs

Approved stack:

- PostgreSQL
- pgvector
- local Docker Compose
- Drizzle or Prisma

### Outputs

- `docker-compose.yml`
- `.env.example`
- `packages/db/`
- `packages/db/src/client.ts`
- `packages/db/src/schema/`
- `packages/db/README.md`

### Allowed Files / Directories

- `docker-compose.yml`
- `.env.example`
- `packages/db/`
- `package.json`

### Forbidden Files / Directories

- `packages/rag-core/`
- `packages/ai/`
- `apps/web/`
- `apps/api/`

### Acceptance Criteria

- Local PostgreSQL service is defined.
- pgvector extension is supported or documented.
- Database package exports a placeholder client.
- Environment variables are documented.
- No full product schema is added yet unless minimal placeholders are required.

### Definition of Done

- Developer can start local database.
- DB package has clear TODOs for future schema work.
- No RAG logic added.

### Suggested Tests / Checks

- `docker compose up -d db`
- `pnpm typecheck`

### Reviewer Checklist

- Is this local-first?
- Does it avoid paid services?
- Is pgvector included or documented?
- Is the schema intentionally minimal?

## Work Packet 0.4 - CI Baseline

### Owner

Codex agent

### Objective

Add CI for install, typecheck, lint, and tests.

### Background / Context

Every future agent PR needs a reliable quality gate.

### Dependencies

WP-0.1.

### Inputs

Root package scripts from monorepo skeleton.

### Outputs

- `.github/workflows/ci.yml`

Potentially updated:

- `package.json`

### Allowed Files / Directories

- `.github/`
- `package.json`

### Forbidden Files / Directories

- `packages/rag-core/`
- `packages/ai/`
- `apps/web/src/features/`
- `apps/api/src/modules/`

### Acceptance Criteria

CI runs:

- install
- typecheck
- tests
- lint if configured

CI must not require:

- Hosted AI API keys
- Live weather APIs
- Garmin/Strava credentials
- Paid services

### Definition of Done

- CI workflow exists.
- CI uses mock/test defaults.
- README or docs mention local equivalent commands.

### Suggested Tests / Checks

- `pnpm typecheck`
- `pnpm test`
- `pnpm lint`

### Reviewer Checklist

- Does CI avoid external paid dependencies?
- Does it match local commands?
- Is it fast enough for frequent agent PRs?

## Work Packet 0.5 - Web App Shell

### Owner

Codex agent

### Objective

Create a minimal frontend shell with navigation placeholders.

### Background / Context

The app needs a visible shell before profile, activities, and recommendations are implemented.

### Dependencies

WP-0.1.

### Inputs

Approved product sections:

- Dashboard
- Profile
- Activities
- Imports
- Training
- Adventures
- Recommendations

### Outputs

`apps/web/`

Pages or routes for:

- `/dashboard`
- `profile`
- `activities`
- `imports`
- `training`
- `adventures`
- `recommendations`

### Allowed Files / Directories

- `apps/web/`
- `packages/ui/`
- `packages/shared/`

### Forbidden Files / Directories

- `packages/rag-core/`
- `packages/ai/`
- `packages/db/`
- `apps/api/`

### Acceptance Criteria

- Web app runs locally.
- Navigation works.
- Placeholder pages exist.
- No backend dependency required yet.
- No RAG/AI logic included.

### Definition of Done

- UI shell is usable.
- Empty placeholder content is clear.
- Screenshot should be included in PR if possible.

### Suggested Tests / Checks

- `pnpm typecheck`
- `pnpm test`
- `pnpm dev`

### Reviewer Checklist

- Did the agent avoid backend and RAG changes?
- Are routes aligned with the approved plan?
- Is the shell simple and not overdesigned?

## Work Packet 0.6 - API Service Shell

### Owner

Codex agent

### Objective

Create a minimal backend API shell with health check and route/module structure.

### Background / Context

Future product APIs need consistent validation, error handling, and module organization.

### Dependencies

WP-0.1.

### Inputs

Approved backend structure.

### Outputs

- `apps/api/`
- `apps/api/src/modules/`
- `apps/api/src/routes/`

Initial endpoint:

- `GET /health`

### Allowed Files / Directories

- `apps/api/`
- `packages/shared/`
- `packages/api-client/`

### Forbidden Files / Directories

- `packages/rag-core/`
- `packages/ai/`
- `apps/web/`

### Acceptance Criteria

- API starts locally.
- `GET /health` returns success.
- Basic error handling exists.
- Basic validation pattern is documented or stubbed.
- No product modules implemented yet.

### Definition of Done

- API shell is ready for future modules.
- Health test exists.
- No RAG/AI logic included.

### Suggested Tests / Checks

- `pnpm typecheck`
- `pnpm test`

### Reviewer Checklist

- Is this minimal?
- Are future module folders clear?
- Does it avoid implementing product logic too early?

## Work Packet 0.7 - AI Provider Interface Foundation

### Owner

You

### Objective

Create the AI provider abstraction that allows switching between Ollama, hosted providers, and mock providers.

### Background / Context

The app must support local-first AI development with Ollama while preserving the ability to use hosted APIs later.

### Dependencies

WP-0.1 preferred, but you can draft this independently.

### Inputs

Approved provider interface design.

### Outputs

- `packages/ai/src/providers/types.ts`
- `packages/ai/src/providers/mockProvider.ts`
- `packages/ai/src/providers/ollamaChatProvider.ts`
- `packages/ai/src/providers/ollamaEmbeddingProvider.ts`
- `packages/ai/src/registry.ts`
- `packages/ai/src/index.ts`

### Allowed Files / Directories

- `packages/ai/`
- `docs/pipeline/`

### Forbidden Files / Directories

- `apps/web/`
- `apps/api/`
- `packages/rag-core/` internals unless adding TODO integration notes

### Acceptance Criteria

- `ChatModelProvider` interface exists.
- `EmbeddingProvider` interface exists.
- Mock provider works in tests.
- Ollama provider can be configured by environment variables.
- Hosted provider is stubbed or minimally implemented behind the same interface.
- No application logic depends directly on Ollama.

### Definition of Done

- Unit tests cover mock provider.
- Ollama provider has a smoke-test path or documented manual check.
- Provider registry supports:
  - `local`
  - `hosted`
  - `mock`

### Suggested Tests / Checks

- `pnpm typecheck`
- `pnpm test`

Optional manual check:

- `ollama list`

### Reviewer Checklist

- Can app logic remain provider-agnostic?
- Are tests independent from live Ollama?
- Is hosted provider swappable later?
- Are environment variables documented?

## Work Packet 0.8 - RAG Core Public Interface Stubs

### Owner

You

### Objective

Create public RAG-core interface stubs that Codex agents can call or mock.

### Background / Context

Codex agents need a stable integration point before the full pipeline exists.

### Dependencies

WP-0.1 preferred.

### Inputs

Approved RAG-core public interface.

### Outputs

- `packages/rag-core/src/index.ts`
- `packages/rag-core/src/types.ts`
- `docs/pipeline/rag-core-interface.md`

### Allowed Files / Directories

- `packages/rag-core/`
- `docs/pipeline/`
- `packages/shared/` only if shared types are needed

### Forbidden Files / Directories

- `apps/web/`
- `apps/api/`

### Acceptance Criteria

Public functions exist as stubs or mock-safe implementations:

- `ingestActivityData(...)`
- `generateTrainingRecommendation(...)`
- `generateAdventureRecommendation(...)`
- `buildRecommendationContext(...)`
- `searchMemories(...)`
- `storeMemory(...)`

Types exist for:

- `IngestActivityInput`
- `IngestActivityResult`
- `TrainingRecommendationInput`
- `AdventureRecommendationInput`
- `AIRecommendation`
- `RecommendationContext`
- `MemoryRecord`

### Definition of Done

- Codex agents can import public functions from `packages/rag-core`.
- Internal directories can remain TODOs.
- Stub outputs are clearly marked as temporary.
- No real pipeline implementation required yet.

### Suggested Tests / Checks

- `pnpm typecheck`
- `pnpm test`

### Reviewer Checklist

- Is the public API stable enough for Codex integration?
- Are internals hidden?
- Are stub outputs safe for UI/API development?
- Is the interface documented?

## Recommended Parallelization for Current Milestone

### Start First

WP-0.1 Monorepo Skeleton

This should land before most other packets.

### Can Run After WP-0.1

- WP-0.2 Agent Operating Docs
- WP-0.3 Local Database Foundation
- WP-0.4 CI Baseline
- WP-0.5 Web App Shell
- WP-0.6 API Service Shell
- WP-0.7 AI Provider Interface Foundation
- WP-0.8 RAG Core Public Interface Stubs

### Best Parallel Agent Assignment

- Codex Agent A: WP-0.2 Agent Operating Docs
- Codex Agent B: WP-0.3 Local Database Foundation
- Codex Agent C: WP-0.4 CI Baseline
- Codex Agent D: WP-0.5 Web App Shell
- Codex Agent E: WP-0.6 API Service Shell
- You: WP-0.7 AI Provider Interface Foundation
- You: WP-0.8 RAG Core Public Interface Stubs

## Current Milestone Exit Criteria

Milestone 0 is complete when:

- Monorepo exists.
- Local database can start.
- Web shell runs.
- API shell runs.
- CI baseline exists.
- Agent docs exist.
- `packages/ai` has provider interfaces.
- `packages/rag-core` has public interface stubs.
- Codex agents know what they can and cannot modify.
