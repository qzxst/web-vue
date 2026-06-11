---
name: repo-skill
description: Project-local skill to apply repository-specific conventions: API/HTTP wrappers, composables, and component patterns. Use this skill to scaffold standardized files, refactor imports to use the new http wrapper, and add lint/typecheck helpers.
---

# Repo Skill

This skill helps automate and enforce the repository conventions for this Vue 3 + TypeScript project.

When invoked, follow these rules:

1. Only modify files inside this repository (`G:/Desktop/vue/vue3`). Do not create or modify files outside this path.
2. Prefer minimal, surgical changes. Do not rename or delete files unless the user explicitly asks.
3. For API wrappers: prefer `src/api/http.ts` as the canonical axios wrapper. If existing code uses `src/api/server.ts`, update callers to use `http.ts` by creating new API modules in `src/api/*` and migrating one file on request.
4. For composables: place new composables under `src/composables` and export default plus named export.
5. For components: place small shared components under `src/components/base` and avoid breaking existing component names.
6. Add TypeScript types under `src/type` or `src/interface` and reference them in updated files.
7. If adding tooling changes (eslint/prettier/vite plugins), update `vite.config.ts` and add config files at the project root. Explain the change and its scope in the final message.

Provide a summary of files created/modified and any diagnostics you ran. If the user asks for follow-up refactors (e.g., migrate all calls to new http wrapper), propose a plan and ask for confirmation before making large-scale edits.
