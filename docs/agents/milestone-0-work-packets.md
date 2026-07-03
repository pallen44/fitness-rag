Current Milestone: Milestone 0 — Local-First Project SetupBecause the repository is still effectively empty, the current milestone should be Milestone 0 only.

Goal:

Create the local-first project foundation so you and Codex agents can work in parallel safely.Do not start product features yet.

Ownership Split for This MilestoneYou Personally BuildYou own the AI/RAG foundation interfaces:

packages/ai/packages/rag-core/docs/pipeline/For Milestone 0, you should focus only on:

AI provider abstraction

Mock provider

Ollama provider stubs

Public RAG-core interface stubs

Pipeline docs

Codex Agents BuildCodex agents own the surrounding project foundation:

apps/web/apps/api/packages/shared/packages/api-client/packages/db/docs/agents/docs/architecture/.github/root config filesFor Milestone 0, Codex should focus only on:

Monorepo setup

App/API skeletons

Local Docker/Postgres/pgvector setup

CI baseline

Agent operating docs

Shared type package skeleton

Work Packet 0.1 — Monorepo SkeletonOwnerCodex agent

ObjectiveCreate the base monorepo structure, package manager setup, TypeScript config, and placeholder packages/apps.

Background / ContextThe repo currently only has a minimal README. This packet creates the foundation for all future work.

DependenciesNone.

InputsApproved project plan.

Outputsapps/web/apps/api/packages/shared/packages/api-client/packages/db/packages/ai/packages/rag-core/docs/package.jsonpnpm-workspace.yamltsconfig.base.json.gitignoreREADME.mdAllowed Files / Directories/apps/packages/docs/Forbidden Files / DirectoriesNone for this first packet, but the agent should only scaffold packages/ai and packages/rag-core; it should not implement AI/RAG internals.

Acceptance Criteriapnpm install works.

Root scripts exist:

dev

build

typecheck

test

lint

Placeholder packages compile.

apps/web has a minimal runnable placeholder.

apps/api has a minimal runnable placeholder.

packages/ai and packages/rag-core exist but contain only placeholder exports or TODOs.

Definition of DoneMonorepo structure exists.

Root README has basic setup instructions.

No real product logic added.

No AI/RAG pipeline implementation added by Codex.

Suggested Tests / Checkspnpm installpnpm typecheckpnpm testReviewer ChecklistDid the agent keep this as scaffolding only?

Did it avoid implementing RAG/AI internals?

Are package boundaries clear?

Can future agents work from this structure?

Work Packet 0.2 — Agent Operating DocsOwnerCodex agent

ObjectiveCreate documentation that defines how Codex agents should work in the repo.

Background / ContextMultiple autonomous Codex agents will work in parallel. They need explicit boundaries and PR expectations.

DependenciesCan run after or alongside WP-0.1, but should be reconciled with the final folder structure.

InputsApproved ownership split.

OutputsAGENTS.mddocs/agents/operating-guide.mddocs/agents/ownership.mddocs/agents/work-packet-template.mddocs/agents/pr-checklist.mddocs/architecture/module-boundaries.mdAllowed Files / DirectoriesAGENTS.mddocs/agents/docs/architecture/README.mdForbidden Files / Directoriespackages/rag-core/packages/ai/apps/web/apps/api/Acceptance CriteriaDocs clearly state:

You own packages/ai.

You own packages/rag-core.

Codex agents must not implement RAG internals.

Codex agents must call only public exports from packages/rag-core/src/index.ts.

One work packet equals one PR.

Agents must stay inside allowed file scopes.

Agents must add tests for implementation packets.

Agents must use mock AI providers in tests.

Definition of DoneAgent instructions are clear enough for future Codex agents to follow without extra explanation.

PR checklist exists.

Work packet template exists.

Module boundary document exists.

Suggested Tests / ChecksNo code tests required.

Suggested check:

pnpm typecheckif available after WP-0.1.

Reviewer ChecklistAre ownership boundaries explicit?

Are forbidden areas clear?

Does the doc prevent agents from modifying RAG internals?

Does the PR checklist enforce scope control?

Work Packet 0.3 — Local Database FoundationOwnerCodex agent

ObjectiveAdd local PostgreSQL + pgvector development setup and a minimal database package skeleton.

Background / ContextThe MVP depends on PostgreSQL and pgvector. This packet should set up local infrastructure but not design the full schema yet.

DependenciesWP-0.1.

InputsApproved stack:

PostgreSQL

pgvector

local Docker Compose

Drizzle or Prisma

Outputsdocker-compose.yml.env.examplepackages/db/packages/db/src/client.tspackages/db/src/schema/packages/db/README.mdAllowed Files / Directoriesdocker-compose.yml.env.examplepackages/db/package.jsonForbidden Files / Directoriespackages/rag-core/packages/ai/apps/web/apps/api/Acceptance CriteriaLocal PostgreSQL service is defined.

pgvector extension is supported or documented.

Database package exports a placeholder client.

Environment variables are documented.

No full product schema is added yet unless minimal placeholders are required.

Definition of DoneDeveloper can start local database.

DB package has clear TODOs for future schema work.

No RAG logic added.

Suggested Tests / Checksdocker compose up -d dbpnpm typecheckReviewer ChecklistIs this local-first?

Does it avoid paid services?

Is pgvector included or documented?

Is the schema intentionally minimal?

Work Packet 0.4 — CI BaselineOwnerCodex agent

ObjectiveAdd CI for install, typecheck, lint, and tests.

Background / ContextEvery future agent PR needs a reliable quality gate.

DependenciesWP-0.1.

InputsRoot package scripts from monorepo skeleton.

Outputs.github/workflows/ci.ymlPotentially updated:

package.jsonAllowed Files / Directories.github/package.jsonForbidden Files / Directoriespackages/rag-core/packages/ai/apps/web/src/features/apps/api/src/modules/Acceptance CriteriaCI runs:

install

typecheck

tests

lint if configured

CI must not require:

Hosted AI API keys

Live weather APIs

Garmin/Strava credentials

Paid services

Definition of DoneCI workflow exists.

CI uses mock/test defaults.

README or docs mention local equivalent commands.

Suggested Tests / Checkspnpm typecheckpnpm testpnpm lintReviewer ChecklistDoes CI avoid external paid dependencies?

Does it match local commands?

Is it fast enough for frequent agent PRs?

Work Packet 0.5 — Web App ShellOwnerCodex agent

ObjectiveCreate a minimal frontend shell with navigation placeholders.

Background / ContextThe app needs a visible shell before profile, activities, and recommendations are implemented.

DependenciesWP-0.1.

InputsApproved product sections:

Dashboard

Profile

Activities

Imports

Training

Adventures

Recommendations

Outputsapps/web/Pages or routes for:

/dashboardprofileactivitiesimportstrainingadventuresrecommendationsAllowed Files / Directoriesapps/web/packages/ui/packages/shared/Forbidden Files / Directoriespackages/rag-core/packages/ai/packages/db/apps/api/Acceptance CriteriaWeb app runs locally.

Navigation works.

Placeholder pages exist.

No backend dependency required yet.

No RAG/AI logic included.

Definition of DoneUI shell is usable.

Empty placeholder content is clear.

Screenshot should be included in PR if possible.

Suggested Tests / Checkspnpm typecheckpnpm testpnpm devReviewer ChecklistDid the agent avoid backend and RAG changes?

Are routes aligned with the approved plan?

Is the shell simple and not overdesigned?

Work Packet 0.6 — API Service ShellOwnerCodex agent

ObjectiveCreate a minimal backend API shell with health check and route/module structure.

Background / ContextFuture product APIs need consistent validation, error handling, and module organization.

DependenciesWP-0.1.

InputsApproved backend structure.

Outputsapps/api/apps/api/src/modules/apps/api/src/routes/Initial endpoint:

GET /healthAllowed Files / Directoriesapps/api/packages/shared/packages/api-client/Forbidden Files / Directoriespackages/rag-core/packages/ai/apps/web/Acceptance CriteriaAPI starts locally.

GET /health returns success.

Basic error handling exists.

Basic validation pattern is documented or stubbed.

No product modules implemented yet.

Definition of DoneAPI shell is ready for future modules.

Health test exists.

No RAG/AI logic included.

Suggested Tests / Checkspnpm typecheckpnpm testReviewer ChecklistIs this minimal?

Are future module folders clear?

Does it avoid implementing product logic too early?

Work Packet 0.7 — AI Provider Interface FoundationOwnerYou

ObjectiveCreate the AI provider abstraction that allows switching between Ollama, hosted providers, and mock providers.

Background / ContextThe app must support local-first AI development with Ollama while preserving the ability to use hosted APIs later.

DependenciesWP-0.1 preferred, but you can draft this independently.

InputsApproved provider interface design.

Outputspackages/ai/src/providers/types.tspackages/ai/src/providers/mockProvider.tspackages/ai/src/providers/ollamaChatProvider.tspackages/ai/src/providers/ollamaEmbeddingProvider.tspackages/ai/src/registry.tspackages/ai/src/index.tsAllowed Files / Directoriespackages/ai/docs/pipeline/Forbidden Files / Directoriesapps/web/apps/api/packages/rag-core/ internals unless adding TODO integration notesAcceptance CriteriaChatModelProvider interface exists.

EmbeddingProvider interface exists.

Mock provider works in tests.

Ollama provider can be configured by environment variables.

Hosted provider is stubbed or minimally implemented behind the same interface.

No application logic depends directly on Ollama.

Definition of DoneUnit tests cover mock provider.

Ollama provider has a smoke-test path or documented manual check.

Provider registry supports:

local

hosted

mock

Suggested Tests / Checkspnpm typecheckpnpm testOptional manual check:

ollama listReviewer ChecklistCan app logic remain provider-agnostic?

Are tests independent from live Ollama?

Is hosted provider swappable later?

Are environment variables documented?

Work Packet 0.8 — RAG Core Public Interface StubsOwnerYou

ObjectiveCreate public RAG-core interface stubs that Codex agents can call or mock.

Background / ContextCodex agents need a stable integration point before the full pipeline exists.

DependenciesWP-0.1 preferred.

InputsApproved RAG-core public interface.

Outputspackages/rag-core/src/index.tspackages/rag-core/src/types.tsdocs/pipeline/rag-core-interface.mdAllowed Files / Directoriespackages/rag-core/docs/pipeline/packages/shared/ only if shared types are neededForbidden Files / Directoriesapps/web/apps/api/Acceptance CriteriaPublic functions exist as stubs or mock-safe implementations:

ingestActivityData(...)generateTrainingRecommendation(...)generateAdventureRecommendation(...)buildRecommendationContext(...)searchMemories(...)storeMemory(...)Types exist for:

IngestActivityInputIngestActivityResultTrainingRecommendationInputAdventureRecommendationInputAIRecommendationRecommendationContextMemoryRecordDefinition of DoneCodex agents can import public functions from packages/rag-core.

Internal directories can remain TODOs.

Stub outputs are clearly marked as temporary.

No real pipeline implementation required yet.

Suggested Tests / Checkspnpm typecheckpnpm testReviewer ChecklistIs the public API stable enough for Codex integration?

Are internals hidden?

Are stub outputs safe for UI/API development?

Is the interface documented?

Recommended Parallelization for Current MilestoneStart FirstWP-0.1 Monorepo SkeletonThis should land before most other packets.

Can Run After WP-0.1WP-0.2 Agent Operating DocsWP-0.3 Local Database FoundationWP-0.4 CI BaselineWP-0.5 Web App ShellWP-0.6 API Service ShellWP-0.7 AI Provider Interface FoundationWP-0.8 RAG Core Public Interface StubsBest Parallel Agent AssignmentCodex Agent A: WP-0.2 Agent Operating DocsCodex Agent B: WP-0.3 Local Database FoundationCodex Agent C: WP-0.4 CI BaselineCodex Agent D: WP-0.5 Web App ShellCodex Agent E: WP-0.6 API Service Shell

You: WP-0.7 AI Provider Interface FoundationYou: WP-0.8 RAG Core Public Interface StubsCurrent Milestone Exit CriteriaMilestone 0 is complete when:

Monorepo exists.

Local database can start.

Web shell runs.

API shell runs.

CI baseline exists.

Agent docs exist.

packages/ai has provider interfaces.

packages/rag-core has public interface stubs.

Codex agents know what they can and cannot modify.