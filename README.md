# fitness-rag

Personal fitness coaching and adventure planning app with a local-first RAG architecture.

## Workspace

This repository uses PNPM workspaces with TypeScript project placeholders for the planned apps and packages.

```bash
corepack prepare pnpm@9.15.4 --activate
corepack pnpm install
corepack pnpm typecheck
corepack pnpm test
```

## Agent Docs

Codex agents should read `AGENTS.md` before making changes. The detailed operating docs live in:

- `docs/agents/operating-guide.md`
- `docs/agents/ownership.md`
- `docs/agents/work-packet-template.md`
- `docs/agents/pr-checklist.md`
- `docs/architecture/module-boundaries.md`
