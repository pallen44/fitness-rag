# fitness-rag

Personal fitness coaching and adventure planning app with a local-first RAG architecture.

## Workspace

This repository uses PNPM workspaces with TypeScript project placeholders for the planned apps and packages.

```bash
corepack prepare pnpm@9.15.4 --activate
corepack pnpm install
corepack pnpm typecheck
corepack pnpm test
corepack pnpm lint
```

## CI Baseline

GitHub Actions runs the same baseline commands for pull requests:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm typecheck
corepack pnpm test
corepack pnpm lint
```

CI uses mock/test defaults and should not require hosted AI keys, live weather APIs, Garmin/Strava credentials, or paid services.
