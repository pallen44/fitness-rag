# Approved Project Plan: Personal Fitness Coaching + Adventure Planning AI App

## 1. Project Goal
Build a focused, useful personal fitness coaching and adventure planning app that combines:

Personal activity data

Long-term memory

RAG retrieval

External APIs

Local or hosted AI models

AI-generated training and adventure recommendations

The app should demonstrate:

AI engineering

Data engineering

ML engineering fundamentals

Practical product engineering

Low-cost local-first development

Clean modular architecture

This is not an enterprise AI platform. The architecture should support long-term growth, but the implementation should deliver the smallest useful product first.

## 2. Core Product Vision
The app should help answer questions like:

“How should I train this week based on my recent activity data?”

“Should I do a hard workout tomorrow or recover?”

“Am I ready for a long hike this weekend?”

“Suggest an adventure near me based on my fitness, preferences, weather, and trails.”

“What races or events would be realistic for me?”

“What has changed in my recovery or training consistency recently?”

The useful MVP experience is:

User signs in
  ↓
Creates a profile and preferences
  ↓
Adds or imports activity data
  ↓
Views activity dashboard
  ↓
Asks for a training or adventure recommendation
  ↓
RAG core builds context from personal data + external context
  ↓
AI generates a recommendation
  ↓
Recommendation and useful memory are saved

## 3. Guiding Principles

#### Build a Product, Not a Platform
This project should feel like:

Useful fitness/adventure app
  powered by
personal data + external APIs
  enhanced by
RAG + memory
  built with
clean product engineering
Not like:

Abstract enterprise AI platform
  with too many generalized services

#### MVP First, Architecture Still Clean
Do not remove long-term ideas. Instead, classify every feature as:

- MVP
- V1
- Future

The architecture should not block future growth, but the first implementation should stay small.

#### Local-First and Low-Cost
Default to:

Local Docker development

Local PostgreSQL

pgvector

Ollama for local LLMs and embeddings

Mock AI providers for tests

Free/open-source tools

Hosted APIs only when useful and swappable

#### Clear Ownership Split
You personally build the intelligence layer.

Codex agents build the surrounding app.

## 4. Feature Scope

### 4.1 MVP
The smallest useful product.

#### Product Features
User profile

Fitness/adventure preferences

Manual activity entry

Garmin/Strava-like JSON import fixtures

Activity dashboard

Recent training summary

Training recommendation flow

Adventure recommendation flow

Weather context

Basic recommendation history

Local-first development setup

#### Data / RAG / AI Features
Activity ingestion

Activity normalization

PostgreSQL storage

Deterministic training summaries

Embeddings

pgvector retrieval

Context builder

AI response generation

Recommendation storage

Basic memory records

Source/context references in responses

#### AI Provider Features
Ollama local chat model

Ollama local embedding model

Hosted provider option behind the same interface

Mock provider for tests

Ability to switch provider via config

### 4.2 V1
Useful app with stronger personalization and better integrations.

#### Product Features
Real Strava OAuth or improved Garmin import

Better dashboard trends

Training goal management

Basic training plan generation

Workout feedback

Adventure preferences

Gear checklist generation

Weather-aware adventure recommendations

Saved memories visible in UI

Basic deployment

#### Data / RAG / AI Features
Improved memory extraction

Conversation history

Recommendation source citations

Retrieval over summaries, memories, and past recommendations

Prompt/version tracking

Simple AI eval fixtures

Route/race/calendar static or semi-automated data

#### AI Provider Features
Per-task model selection

Local model for development

Hosted model for higher-quality recommendations

Local embeddings by default

Cost-aware switching via config

### 4.3 Future
Long-term direction, not MVP.

#### Product Features
True Garmin API integration

Full Strava integration

GPX route parsing

Maps API integration

Trails API integration

Race calendar integration

Calendar availability integration

Adaptive training calendar

Plan adjustment based on recovery/adherence

User-editable memory UI

Mobile/PWA polish

Route scoring

Trip reports

Broader personal assistant features

#### Data / RAG / AI Features
Advanced RAG ranking

Hybrid search

Memory deduplication

Memory confidence scoring

Background indexing jobs

Long-term trend modeling

ML-based readiness scoring

Personalized recommendation models

Advanced eval suite

MCP-compatible tools

Optional hosted observability

## 5. High-Level Architecture
                         Frontend
                            │
                            ▼
                       Backend API
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
   Product Data Services              External API Services
 profile, activities, goals           weather, routes, races
          │                                   │
          └─────────────────┬─────────────────┘
                            ▼
                         RAG Core
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
   PostgreSQL Storage   pgvector Search   AI Provider Layer
 activities, memory     embeddings        Ollama / hosted / mock
          │                 │                 │
          └─────────────────┴─────────────────┘
                            ▼
                    Context Builder
                            │
                            ▼
                   AI Recommendation
                            │
                            ▼
                 Stored Recommendation
                            │
                            ▼
                         Frontend

## 6. Recommended Technology Stack

#### Frontend
Next.js

React

TypeScript

Tailwind CSS

shadcn/ui

TanStack Query

#### Backend

#### Recommended options:

Next.js API routes for simplest full-stack setup

Or Hono/Fastify if using separate API service

#### Use:

TypeScript

Zod for validation

Shared schemas

#### Database
PostgreSQL

pgvector

Drizzle ORM or Prisma

#### Local Development
Docker Compose

Local PostgreSQL

Local Ollama

Local environment variables

Mock providers for tests

#### AI
packages/ai

Ollama chat provider

Ollama embedding provider

Hosted provider adapter

Mock provider

Provider registry

#### RAG Core
packages/rag-core

Custom implementation for learning

No heavy framework required for MVP

LangChain/LlamaIndex optional later for comparison only

#### Testing
Vitest

Playwright later

Mock AI providers

Fixture-based RAG tests

API integration tests

#### Deployment
MVP development should be local-first.

Optional later:

Vercel free/hobby for frontend

Supabase free tier or local PostgreSQL for demo DB

Render/Fly/Railway only if needed

## 7. Repository Structure
fitness-rag/
  AGENTS.md
  README.md
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  docker-compose.yml
  .env.example

  apps/
    web/
      src/
        app/
        components/
        features/
          auth/
          profile/
          activities/
          imports/
          training/
          adventures/
          recommendations/
          dashboard/
        lib/

    api/
      src/
        routes/
        modules/
          auth/
          profile/
          activities/
          imports/
          training/
          adventures/
          recommendations/
          external/
            weather/

  packages/
    ai/
      src/
        providers/
          types.ts
          ollamaChatProvider.ts
          ollamaEmbeddingProvider.ts
          hostedChatProvider.ts
          hostedEmbeddingProvider.ts
          mockProvider.ts
        registry.ts
        index.ts

    rag-core/
      src/
        ingestion/
        normalization/
        storage/
        summarization/
        embeddings/
        retrieval/
        context/
        generation/
        memory/
        index.ts

    db/
      schema/
      migrations/
      client.ts

    shared/
      src/
        types/
        schemas/

    api-client/
      src/

    ui/
      src/

  docs/
    architecture/
    agents/
    pipeline/
    decisions/
    deployment/
    mvp/

  tests/
    fixtures/
      activities/
      garmin/
      strava/
      ai/

## 8. Ownership Boundaries

### 8.1 You Own
packages/ai/
packages/rag-core/
docs/pipeline/
pipeline-related database schema when needed
You personally build:

AI provider abstraction

Ollama provider

Hosted provider adapter

Mock provider

Data ingestion

Normalization

Storage helpers

Summarization

Embeddings

Retrieval

Context building

Prompt construction

AI generation

Memory storage

### 8.2 Codex Agents Own
apps/web/
apps/api/
packages/api-client/
packages/shared/
docs/agents/
docs/deployment/
.github/
Codex agents build:

App shell

Auth/profile

Activity CRUD UI

Import UI

Dashboards

API wrappers

Weather wrapper

Recommendation endpoints that call your RAG core

Tests

Docs

Deployment setup

### 8.3 Shared / Contract-Controlled Areas
packages/db/
packages/shared/
docs/architecture/
packages/rag-core/src/index.ts
These should be changed carefully.

Agents may modify them only when a work packet explicitly allows it.

## 9. RAG Core Public Interface
The app should only call stable public functions from:

packages/rag-core/src/index.ts
Example interface:

export async function ingestActivityData(
  input: IngestActivityInput
): Promise<IngestActivityResult>;

export async function generateTrainingRecommendation(
  input: TrainingRecommendationInput
): Promise<AIRecommendation>;

export async function generateAdventureRecommendation(
  input: AdventureRecommendationInput
): Promise<AIRecommendation>;

export async function buildRecommendationContext(
  input: RecommendationContextInput
): Promise<RecommendationContext>;

export async function searchMemories(
  input: SearchMemoryInput
): Promise<MemorySearchResult[]>;

export async function storeMemory(
  input: StoreMemoryInput
): Promise<MemoryRecord>;
Codex agents should import only from the public index.

They should not depend on internal files inside:

packages/rag-core/src/ingestion/
packages/rag-core/src/retrieval/
packages/rag-core/src/generation/

## 10. AI Provider Abstraction

#### Goal
Application logic should never care whether the model is local or hosted.

The app should call:

ai.chat(...)
ai.embed(...)
Not:

ollama.chat(...)
openai.chat(...)

#### Provider Interfaces
export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type ChatCompletionInput = {
  messages: ChatMessage[];
  temperature?: number;
  responseFormat?: "text" | "json";
};

export type ChatCompletionResult = {
  text: string;
  model: string;
  provider: string;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
  };
};

export interface ChatModelProvider {
  name: string;
  chat(input: ChatCompletionInput): Promise<ChatCompletionResult>;
}

export type EmbeddingInput = {
  text: string;
};

export type EmbeddingResult = {
  vector: number[];
  model: string;
  provider: string;
};

export interface EmbeddingProvider {
  name: string;
  embed(input: EmbeddingInput): Promise<EmbeddingResult>;
}

#### Provider Registry
export type AIProviderMode = "local" | "hosted" | "mock";

export function createAIProviders(mode: AIProviderMode) {
  if (mode === "local") {
    return {
      chat: new OllamaChatProvider(),
      embeddings: new OllamaEmbeddingProvider(),
    };
  }

  if (mode === "hosted") {
    return {
      chat: new HostedChatProvider(),
      embeddings: new HostedEmbeddingProvider(),
    };
  }

  return {
    chat: new MockChatProvider(),
    embeddings: new MockEmbeddingProvider(),
  };
}

#### Environment Variables
AI_PROVIDER_MODE=local

OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_CHAT_MODEL=llama3.1
OLLAMA_EMBEDDING_MODEL=nomic-embed-text

HOSTED_AI_PROVIDER=openai
HOSTED_CHAT_MODEL=gpt-4.1-mini
HOSTED_EMBEDDING_MODEL=text-embedding-3-small
HOSTED_API_KEY=

#### Defaults:

Development: AI_PROVIDER_MODE=local
Testing:     AI_PROVIDER_MODE=mock
Optional:    AI_PROVIDER_MODE=hosted

## 11. External API Strategy

#### MVP
Use simple service functions, not MCP.

getWeatherForecast()
importActivityFile()
searchStaticRoutes()
findStaticRaces()

#### V1
Add real integrations where useful:

syncStravaActivities()
importGarminExport()
getRouteOptions()
findUpcomingRaces()
getCalendarAvailability()

#### Future
Wrap as internal tools or MCP-compatible tools if needed:

WeatherTool
RouteSearchTool
RaceCalendarTool
CalendarAvailabilityTool
GarminSyncTool
StravaSyncTool

#### Rule
For MVP, the backend gathers external context and passes it into the RAG core.

API route calls weather/maps/etc.
  ↓
API passes externalContext into rag-core
  ↓
rag-core builds context and generates response
Do not add MCP infrastructure for MVP.

## 12. Data Flow

#### Training Recommendation
Frontend question
  ↓
Recommendation API
  ↓
Load profile + activities
  ↓
RAG core summarizes recent training
  ↓
RAG core retrieves relevant memories
  ↓
RAG core builds context
  ↓
AI provider generates response
  ↓
Recommendation is stored
  ↓
Frontend displays answer + sources

#### Adventure Recommendation
Frontend adventure request
  ↓
Adventure API
  ↓
Load profile + activities
  ↓
Fetch weather context
  ↓
Optionally load route/race fixtures
  ↓
RAG core builds adventure context
  ↓
AI provider generates recommendation
  ↓
Recommendation is stored
  ↓
Frontend displays plan + weather + gear + cautions

## 13. Your RAG/Data/AI Pipeline Plan
You personally build this pipeline:

data ingestion
  → normalization
  → storage
  → summarization
  → embeddings
  → retrieval
  → context building
  → AI response generation
  → memory storage

### Step 1: Data Ingestion

#### What You Build
A function that accepts raw data from:

Manual entry

Garmin-like JSON

Strava-like JSON

#### Why It Matters
Ingestion is the front door of the intelligence system.

#### Concepts to Learn
Input validation

Data contracts

Raw vs normalized data

Idempotency

Source metadata

#### Suggested Files
packages/rag-core/src/ingestion/types.ts
packages/rag-core/src/ingestion/ingestActivityData.ts
packages/rag-core/src/ingestion/validateRawActivity.ts

#### Inputs
type IngestActivityInput = {
  userId: string;
  source: "manual" | "garmin" | "strava";
  payload: unknown;
};

#### Outputs
type IngestActivityResult = {
  importedCount: number;
  skippedCount: number;
  errors: string[];
};

#### Simple Tests
Valid manual activity imports successfully.

Invalid payload returns validation error.

Duplicate external ID is skipped.

Unknown source fails clearly.

#### What Good Looks Like
Raw input is validated.

Source metadata is preserved.

Errors are understandable.

Function is small and testable.

#### Common Mistakes
Supporting every Garmin/Strava field immediately.

Mixing ingestion, AI, and storage in one function.

Ignoring duplicate imports.

### Step 2: Normalization

#### What You Build
Convert source-specific data into a canonical activity format.

#### Why It Matters
The rest of the app should not care whether data came from Garmin, Strava, or manual entry.

#### Concepts to Learn
Canonical data modeling

Unit conversion

Optional fields

Source-specific adapters

#### Suggested Files
packages/rag-core/src/normalization/types.ts
packages/rag-core/src/normalization/normalizeManualActivity.ts
packages/rag-core/src/normalization/normalizeGarminActivity.ts
packages/rag-core/src/normalization/normalizeStravaActivity.ts
packages/rag-core/src/normalization/normalizeActivity.ts

#### Output Shape
type NormalizedActivity = {
  userId: string;
  source: string;
  externalId?: string;
  sportType: string;
  startTime: string;
  durationSeconds: number;
  distanceMeters?: number;
  elevationGainMeters?: number;
  averageHeartRate?: number;
  maxHeartRate?: number;
  perceivedEffort?: number;
  notes?: string;
};

#### Simple Tests
Manual activity normalizes correctly.

Garmin fixture normalizes correctly.

Strava fixture normalizes correctly.

Missing optional fields do not crash.

Units are consistent.

#### What Good Looks Like
One internal activity shape.

Source-specific logic isolated.

Easy-to-read normalized output.

#### Common Mistakes
Letting Garmin-specific fields leak everywhere.

Forgetting unit conversions.

Treating optional fields as required.

### Step 3: Storage

#### What You Build
Functions that save:

Raw imports

Normalized activities

Summaries

Embeddings

Recommendations

Memories

#### Why It Matters
The database is the source of truth for personalization.

#### Concepts to Learn
Schema design

Foreign keys

Indexes

User-scoped data

Upserts

Transactions

#### Suggested Files
packages/db/schema/activities.ts
packages/db/schema/rawImports.ts
packages/db/schema/summaries.ts
packages/db/schema/memories.ts
packages/db/schema/recommendations.ts
packages/rag-core/src/storage/activityStore.ts
packages/rag-core/src/storage/memoryStore.ts
packages/rag-core/src/storage/recommendationStore.ts

#### Simple Tests
Activity saves successfully.

Duplicate activity does not create duplicate row.

User A cannot retrieve User B’s activities.

Recent activities query returns correct order.

Empty user returns empty list.

#### What Good Looks Like
Every user-owned table has userId.

Duplicate imports are safe.

Queries are simple.

Storage functions are boring and reliable.

#### Common Mistakes
No unique constraint for imports.

Forgetting indexes.

Accidentally returning all users’ data.

### Step 4: Summarization

#### What You Build
Deterministic summaries of recent training.

#### Why It Matters
LLMs perform better with concise summaries than raw activity dumps.

#### Concepts to Learn
Aggregation

Time windows

Feature engineering

Training load basics

Recency

#### Suggested Files
packages/rag-core/src/summarization/trainingSummary.ts
packages/rag-core/src/summarization/activitySummary.ts
packages/rag-core/src/summarization/types.ts

#### Output Shape
type TrainingSummary = {
  userId: string;
  windowDays: number;
  activityCount: number;
  totalDurationSeconds: number;
  totalDistanceMeters?: number;
  longestActivity?: ActivitySummary;
  sportBreakdown: Record<string, number>;
  recentConsistencyNote: string;
  possibleFatigueSignals: string[];
};

#### Simple Tests
No activities returns empty summary.

Four-week activity set returns correct totals.

Longest activity is identified.

Sport breakdown is correct.

Fatigue note appears after many consecutive hard days.

#### What Good Looks Like
Compact.

Mostly deterministic.

Useful even without an LLM.

Displayable in the app.

#### Common Mistakes
Sending too much raw data to the LLM.

Making everything AI-generated.

Ignoring date ranges.

### Step 5: Embeddings

#### What You Build
Turn useful text records into vectors.

Embeddable records:

Activity summaries

Training summaries

User memories

Past recommendations

Adventure preferences

#### Why It Matters
Embeddings enable similarity search over personal history.

#### Concepts to Learn
Embeddings

Vector similarity

Chunking

pgvector

Metadata filtering

#### Suggested Files
packages/rag-core/src/embeddings/embedText.ts
packages/rag-core/src/embeddings/types.ts
packages/rag-core/src/embeddings/indexRecord.ts
packages/db/schema/embeddings.ts
Input
type EmbeddingInput = {
  userId: string;
  sourceType: "activity_summary" | "training_summary" | "memory" | "recommendation";
  sourceId: string;
  text: string;
};

#### Simple Tests
Mock embedding provider returns fixed vector.

Embedding record saves with metadata.

Search fixture returns expected nearest record.

Tests do not require live API calls.

#### What Good Looks Like
Provider-agnostic.

Metadata preserved.

User-scoped.

Testable locally.

#### Common Mistakes
Embedding everything blindly.

Losing source metadata.

Not filtering by user.

### Step 6: Retrieval

#### What You Build
Find relevant memories, summaries, or recommendations for a user question.

#### Why It Matters
Retrieval makes recommendations personalized.

#### Concepts to Learn
Similarity search

Top-k retrieval

Metadata filtering

Recency filtering

Ranking

#### Suggested Files
packages/rag-core/src/retrieval/retrieveRelevantContext.ts
packages/rag-core/src/retrieval/types.ts
packages/rag-core/src/retrieval/formatRetrievedContext.ts
Input
type RetrievalInput = {
  userId: string;
  query: string;
  sourceTypes?: string[];
  limit?: number;
};
Output
type RetrievedContext = {
  sourceType: string;
  sourceId: string;
  text: string;
  score: number;
  createdAt: string;
};

#### Simple Tests
Search only returns current user records.

Query returns most similar fixture.

Limit is respected.

Empty index returns empty context.

Source type filter works.

#### What Good Looks Like
User-scoped.

Source metadata included.

Short enough for prompts.

Handles no matches gracefully.

#### Common Mistakes
Returning another user’s data.

Stuffing too much context into prompts.

Treating vector similarity as perfect truth.

### Step 7: Context Building

#### What You Build
Assemble the final context for the LLM.

Context includes:

User profile

Recent training summary

Retrieved memories

External context

User question

#### Why It Matters
Good context produces specific recommendations.

#### Concepts to Learn
Prompt context design

Token budgeting

Source prioritization

Fresh vs long-term context

External API context

#### Suggested Files
packages/rag-core/src/context/buildTrainingContext.ts
packages/rag-core/src/context/buildAdventureContext.ts
packages/rag-core/src/context/types.ts
Input
type RecommendationContextInput = {
  userId: string;
  question: string;
  externalContext?: {
    weather?: WeatherContext;
    routeOptions?: RouteContext[];
    raceOptions?: RaceContext[];
  };
};
Output
type RecommendationContext = {
  userProfile: UserProfileSummary;
  recentTraining: TrainingSummary;
  retrievedContext: RetrievedContext[];
  externalContext?: Record<string, unknown>;
  question: string;
};

#### Simple Tests
Context includes profile.

Context includes recent summary.

Context includes retrieved memories.

Context includes weather when provided.

Missing optional context does not crash.

#### What Good Looks Like
Readable context object.

Deterministic.

Easy to log/debug.

Concise.

#### Common Mistakes
Building prompts directly from database rows.

Including too much raw data.

Mixing retrieval, generation, and storage.

### Step 8: AI Response Generation

#### What You Build
Generate validated AI recommendations.

#### Why It Matters
This is the user-facing intelligence layer.

#### Concepts to Learn
Prompt engineering

Structured outputs

Zod validation

Safety constraints

Grounded generation

Local vs hosted model tradeoffs

#### Suggested Files
packages/rag-core/src/generation/generateTrainingRecommendation.ts
packages/rag-core/src/generation/generateAdventureRecommendation.ts
packages/rag-core/src/generation/prompts/trainingRecommendationPrompt.ts
packages/rag-core/src/generation/prompts/adventureRecommendationPrompt.ts
packages/rag-core/src/generation/types.ts
Output
type AIRecommendation = {
  id: string;
  title: string;
  summary: string;
  recommendation: string;
  reasoning: string[];
  sources: RecommendationSource[];
  cautions: string[];
  createdAt: string;
};

#### Simple Tests
Mock model returns valid recommendation.

Invalid model output fails validation.

Recommendation includes reasoning.

Recommendation includes sources.

No-activity user gets conservative response.

#### What Good Looks Like
Structured output.

Specific to user context.

Includes uncertainty/cautions.

Validated before saving.

#### Common Mistakes
Returning raw text only.

Not validating model output.

Letting the model invent data.

Not saving recommendations.

### Step 9: Memory Storage

#### What You Build
Save useful long-term facts, preferences, insights, and recommendations.

#### Why It Matters
Memory makes the app improve over time.

#### Concepts to Learn
Long-term memory design

User-editable memory

Confidence

Source attribution

Deduplication

Forgetting/deletion

#### Suggested Files
packages/rag-core/src/memory/storeMemory.ts
packages/rag-core/src/memory/extractMemories.ts
packages/rag-core/src/memory/searchMemories.ts
packages/rag-core/src/memory/types.ts
packages/db/schema/memories.ts
Input
type StoreMemoryInput = {
  userId: string;
  type: "preference" | "goal" | "insight" | "event";
  text: string;
  sourceType: string;
  sourceId?: string;
  confidence?: number;
};

#### Simple Tests
Memory saves successfully.

Memory is user-scoped.

Memory can be searched.

Duplicate memory is not repeatedly stored.

Memory can be deleted or hidden.

#### What Good Looks Like
Memories are short.

Every memory has a source.

User can inspect memories later.

Memories are retrievable.

#### Common Mistakes
Saving every sentence as memory.

Saving low-confidence assumptions.

No delete/hide path.

No source attribution.

## 14. Agent Integration Plan

### 14.1 Agent Operating System

#### Create first:

AGENTS.md
docs/agents/operating-guide.md
docs/agents/ownership.md
docs/agents/work-packet-template.md
docs/agents/pr-checklist.md
docs/architecture/module-boundaries.md
These docs should tell agents:

What they are allowed to modify

What they must not modify

How to call the RAG core

How to write tests

How to submit PRs

How to document interface changes

### 14.2 Work Packet Template

#### Each Codex work packet should include:

#### Objective
Background/context
Dependencies

#### Inputs

#### Outputs
Allowed files/directories
Forbidden files/directories
Acceptance criteria
Definition of done
Suggested tests
Reviewer checklist
Parallelization notes

### 14.3 Branch Naming
agent/wp-1-web-shell
agent/wp-2-profile-crud
agent/wp-3-activity-crud
you/rag-ingestion-normalization
you/ai-provider-abstraction

### 14.4 PR Rule

#### One work packet = one PR
A PR should not mix unrelated changes.

#### Good:

Add manual activity CRUD API and tests.

#### Bad:

Add activity CRUD, change auth, modify RAG prompts, and update deployment.

## 15. Work Plan and Milestones

### Milestone 0: Local-First Project Setup

#### Codex Agents Build
Monorepo skeleton

Web app shell

API shell

PostgreSQL + pgvector Docker Compose

Shared types package

Agent ownership docs

CI baseline

#### You Build
packages/ai

AI provider interfaces

Mock provider

Ollama chat provider

Ollama embedding provider

### Milestone 1: User + Activity Foundation

#### Codex Agents Build
Profile CRUD

Profile UI

Manual activity CRUD

Manual activity UI

Activity dashboard

Import UI wrapper

#### You Build
ingestActivityData

normalizeActivity

storeActivity

summarizeRecentTraining

### Milestone 2: First Training Recommendation

#### Codex Agents Build
Recommendation API wrapper

Recommendation UI

Recommendation history UI

#### You Build
buildTrainingContext

Training prompt

generateTrainingRecommendation

Recommendation validation

Recommendation storage

### Milestone 3: Embeddings + Retrieval

#### Codex Agents Build
UI display for sources/context

API response formatting

Recommendation source display

#### You Build
Embedding generation

pgvector storage

Retrieval function

Retrieved context formatter

Add retrieved context to training recommendations

### Milestone 4: Adventure MVP

#### Codex Agents Build
Weather API wrapper

Adventure request UI

Adventure recommendation API wrapper

Adventure recommendation display

#### You Build
buildAdventureContext

Adventure recommendation prompt

External context integration

Adventure recommendation storage

### Milestone 5: Polish + Demo

#### Codex Agents Build
Dashboard polish

README

Demo guide

Screenshots

CI improvements

Optional deployment docs

#### You Build
Basic AI eval fixtures

Prompt examples

Pipeline documentation

Memory search/storage improvements

Local vs hosted provider comparison notes

## 16. Detailed Codex Work Packets

### WP-0.1: Monorepo Skeleton

#### Owner
Codex agent

#### Objective
Create base repo structure, package manager setup, TypeScript config, and placeholder apps/packages.

#### Allowed Files
/
apps/
packages/
docs/

#### Outputs
apps/web

apps/api

packages/db

packages/shared

packages/rag-core

packages/ai

packages/api-client

root scripts

#### Acceptance Criteria
Install works.

Typecheck script exists.

Test script exists.

Placeholder packages compile.

### WP-0.2: Agent Operating Docs

#### Owner
Codex agent

#### Objective
Create documentation that explains what Codex owns and what you own.

#### Allowed Files
AGENTS.md
docs/agents/
docs/architecture/
docs/mvp/

#### Outputs
Ownership docs

Work packet template

PR checklist

Module boundary docs

#### Acceptance Criteria
Agents are explicitly told not to modify packages/rag-core internals.

Agents are explicitly told not to modify packages/ai internals.

Docs explain the app/RAG boundary.

### WP-0.3: CI Baseline

#### Owner
Codex agent

#### Objective
Add CI for install, lint, typecheck, and tests.

#### Allowed Files
.github/
package.json

#### Acceptance Criteria
CI runs install.

CI runs typecheck.

CI runs tests.

CI uses mock AI provider.

### WP-1.1: Web App Shell

#### Owner
Codex agent

#### Objective
Create basic frontend navigation and layout.

#### Allowed Files
apps/web/
packages/shared/
packages/api-client/

#### Outputs
Home page

Dashboard shell

Navigation

Placeholder pages:

Profile

Activities

Imports

Training

Adventures

Recommendations

#### Acceptance Criteria
App runs locally.

Navigation works.

No backend dependency required for shell.

### WP-1.2: Auth + Profile API

#### Owner
Codex agent

#### Objective
Add simple authentication and user profile CRUD.

#### Allowed Files
apps/api/src/modules/auth/
apps/api/src/modules/profile/
packages/db/
packages/shared/

#### Outputs
User table

Profile table

Profile endpoints

Auth middleware or dev auth

#### Acceptance Criteria
User can create/update profile.

Profile is user-scoped.

API tests cover profile access.

### WP-1.3: Profile UI

#### Owner
Codex agent

#### Objective
Build UI for creating and editing profile/preferences.

#### Allowed Files
apps/web/src/features/profile/
packages/api-client/
packages/shared/

#### Acceptance Criteria
User can save:

Name

Fitness level

Goals

Preferred activities

Location

Adventure preferences

### WP-2.1: Activity Schema + CRUD API

#### Owner
Codex agent

#### Objective
Create basic activity storage and API endpoints.

#### Allowed Files
apps/api/src/modules/activities/
packages/db/
packages/shared/

#### Acceptance Criteria
User can create activity manually.

User can list activities.

Activities are user-scoped.

### WP-2.2: Manual Activity Entry UI

#### Owner
Codex agent

#### Objective
Build UI to manually enter activities.

#### Allowed Files
apps/web/src/features/activities/
packages/api-client/
packages/shared/

#### Acceptance Criteria
User can create an activity.

User can see recent activities.

Empty state exists.

### WP-2.3: Garmin/Strava Import Wrapper

#### Owner
Codex agent

#### Objective
Create app-side import endpoints and UI wrappers that call your pipeline.

#### Allowed Files
apps/api/src/modules/imports/
apps/web/src/features/imports/
packages/api-client/
packages/shared/

#### Acceptance Criteria
User can upload/paste Garmin-like or Strava-like JSON.

API calls rag-core.ingestActivityData.

Imported result appears in activities.

### WP-3.1: Recommendation API Wrapper

#### Owner
Codex agent

#### Objective
Create an API endpoint that calls your RAG core training recommendation function.

#### Allowed Files
apps/api/src/modules/recommendations/
packages/api-client/
packages/shared/

#### Acceptance Criteria
Endpoint calls generateTrainingRecommendation.

Endpoint validates request.

Endpoint returns product-friendly recommendation object.

Tests mock rag-core.

### WP-3.2: Training Recommendation UI

#### Owner
Codex agent

#### Objective
Build UI where user asks for coaching advice.

#### Allowed Files
apps/web/src/features/recommendations/
apps/web/src/features/training/
packages/api-client/

#### Acceptance Criteria
User can ask a question.

User receives recommendation.

Loading and error states exist.

Sources/reasoning are displayed if returned.

### WP-4.1: Weather API Wrapper

#### Owner
Codex agent

#### Objective
Create a simple weather API wrapper.

#### Allowed Files
apps/api/src/modules/external/weather/
packages/shared/

#### Acceptance Criteria
API can fetch weather by location.

Tests use mock provider.

Returned weather object is typed.

No paid dependency required by default.

### WP-4.2: Adventure Recommendation API Wrapper

#### Owner
Codex agent

#### Objective
Create endpoint that gathers request + weather context and calls your RAG core.

#### Allowed Files
apps/api/src/modules/adventures/
packages/api-client/
packages/shared/

#### Acceptance Criteria
Endpoint validates location/activity/date.

Endpoint fetches weather context.

Endpoint calls generateAdventureRecommendation.

Tests mock weather and rag-core.

### WP-4.3: Adventure Recommendation UI

#### Owner
Codex agent

#### Objective
Build UI for adventure recommendations.

#### Allowed Files
apps/web/src/features/adventures/
packages/api-client/

#### Acceptance Criteria
User can request an adventure.

User sees recommendation, weather, gear, and cautions.

Loading/error states exist.

### WP-5.1: Fitness Dashboard

#### Owner
Codex agent

#### Objective
Create a dashboard summarizing activity history and AI insights.

#### Allowed Files
apps/web/src/features/dashboard/
apps/web/src/features/activities/
packages/api-client/

#### Acceptance Criteria
Dashboard is useful with sample data.

Shows recent activities.

Shows recent recommendations.

Links to import and recommendation flows.

### WP-5.2: Documentation and Demo Guide

#### Owner
Codex agent

#### Objective
Document the project as a portfolio-quality app.

#### Allowed Files
README.md
docs/

#### Acceptance Criteria
Setup guide exists.

Architecture overview exists.

RAG pipeline explanation exists.

Demo script exists.

Screenshots can be added later.

### WP-5.3: Deployment Setup

#### Owner
Codex agent

#### Objective
Add optional deployment configuration.

#### Allowed Files
Dockerfile
docker-compose.yml
.env.example
.github/workflows/
docs/deployment/

#### Acceptance Criteria
Local Docker setup works.

CI runs tests/typecheck.

Deployment path is documented.

No paid services required by default.

## 17. Dependency Graph
WP-0.1 Monorepo Skeleton
  ├── WP-0.2 Agent Docs
  ├── WP-0.3 CI
  ├── WP-1.1 Web Shell
  ├── WP-1.2 Auth/Profile API
  └── You: AI Provider Abstraction

WP-1.2 Auth/Profile API
  ├── WP-1.3 Profile UI
  ├── WP-2.1 Activity CRUD API
  └── You: Profile-aware Context Builder

WP-2.1 Activity CRUD API
  ├── WP-2.2 Manual Activity UI
  ├── WP-2.3 Import Wrapper
  └── You: Ingestion + Normalization + Summary

You: Training Recommendation Function
  └── WP-3.1 Recommendation API Wrapper
        └── WP-3.2 Recommendation UI

You: Embeddings + Retrieval
  └── Codex: Source/Context Display UI

WP-4.1 Weather API Wrapper
  └── WP-4.2 Adventure Recommendation API Wrapper
        └── WP-4.3 Adventure UI

WP-5.1 Dashboard
  ├── WP-5.2 Docs
  └── WP-5.3 Deployment

## 18. Recommended First Build Sequence

### Step 1: Codex
Monorepo skeleton
Agent docs
CI baseline
Web shell
API shell

### Step 2: You
AI provider abstraction
Mock provider
Ollama chat provider
Ollama embedding provider

### Step 3: Codex
Profile API
Profile UI
Activity CRUD API
Activity UI

### Step 4: You
Activity ingestion
Normalization
Storage helpers
Training summary

### Step 5: Codex
Import UI
Import API wrapper
Activity dashboard

### Step 6: You
Training context builder
Training recommendation generation
Recommendation storage

### Step 7: Codex
Recommendation API wrapper
Training recommendation UI
Recommendation history

### Step 8: You
Embeddings
Retrieval
Memory storage

### Step 9: Codex
Weather wrapper
Adventure API wrapper
Adventure UI

### Step 10: You
Adventure context builder
Adventure recommendation generation
External context integration

### Step 11: Codex
Dashboard polish
Docs
CI/deployment

## 19. Testing Strategy

#### Codex-Owned Tests
Codex agents should write:

API route tests

UI component tests where practical

API client tests

Mock RAG-core integration tests

Auth/profile tests

Activity CRUD tests

Weather wrapper tests

#### Your Tests
You should write:

Provider abstraction tests

Mock model tests

Ollama provider smoke tests

Ingestion tests

Normalization fixture tests

Storage tests

Summary tests

Embedding tests with mock provider

Retrieval tests

Context builder tests

AI output validation tests

Memory tests

#### Test Defaults
Tests should not require:

Hosted AI APIs

Paid APIs

Live weather API

Garmin OAuth

Strava OAuth

Tests should use:

Mock providers

Fixtures

Local database or test database

Deterministic outputs

## 20. Cost-Control Strategy

#### MVP Defaults

#### Use:

Local Docker

Local PostgreSQL

pgvector

Ollama

Mock providers

Static fixtures

Free weather API only if needed

Manual Garmin/Strava-like imports

Avoid:

Managed vector databases

Paid auth

Paid maps APIs

Paid race APIs

Hosted observability

Kubernetes

Terraform

Redis/queues unless needed

MCP infrastructure

Full OAuth integrations before the app works

## 21. What to Avoid in MVP
Do not build these yet:

MCP servers

Kubernetes

Terraform

Redis/job queues

Managed vector database

Paid observability

Full Garmin OAuth

Full Strava OAuth

Complex agent orchestration

Multi-tenant enterprise permissions

Generic plugin framework

Dedicated ML training pipeline

Heavy LangChain/LlamaIndex dependency unless intentionally comparing frameworks

## 22. What a Successful MVP Demo Looks Like
A strong MVP demo should show:

## 1. Start local app with Docker/Postgres/Ollama.

## 2. Create profile.

## 3. Add or import activities.

## 4. See activity dashboard.

## 5. Generate recent training summary.

## 6. Ask for training recommendation.

## 7. AI uses profile + activities + retrieved memory.

## 8. Ask for adventure recommendation.

## 9. AI uses profile + activities + weather.

## 10. Switch AI_PROVIDER_MODE from local to hosted without changing app code.
This demonstrates:

AI engineering

Data engineering

ML engineering fundamentals

Product engineering

Modular architecture

Cost-conscious development

## 23. Final Recommendation
Build the app as:

Focused fitness/adventure product
  + clean RAG core
  + swappable AI providers
  + local-first infrastructure
  + external API wrappers
  + future-ready interfaces
Keep the MVP small.

Preserve the long-term direction.

Generalize only when repetition proves it is useful.
