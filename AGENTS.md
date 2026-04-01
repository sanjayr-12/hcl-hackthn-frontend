# AGENTS.md

This file is the source of truth for AI agents working in this repository.

Keep the guidance aligned with the real project. Do not copy architecture, tooling, or folder rules from other repos unless they have been intentionally adopted here.

## Current Stack

| Layer            | Choice                            |
| ---------------- | --------------------------------- |
| Frontend         | React 19 + TypeScript 5.9         |
| Bundler          | Vite 8                            |
| Styling          | Tailwind CSS v4                   |
| UI Library       | shadcn/ui                         |
| State Management | Zustand                           |
| Pattern          | Container / Presentational        |
| Linting          | ESLint 9                          |
| Formatting       | Prettier                          |

## Commands

```bash
npm install         # Install dependencies
npm run dev         # Start dev server
npm run build       # Type-check + production build
npm run lint        # Run ESLint
npm run preview     # Preview production build
npx shadcn@latest add <component>  # Add a shadcn/ui component
```

## Architecture

This project uses the container/presentational component pattern.

### Routes / Pages

- Route files should stay thin.
- Their job is composition only: layout, page structure, and wiring the correct container.
- Do not place business logic in routes.

### Containers

- Containers own logic.
- Put `useState`, `useEffect`, Zustand access, validation, derived state, and side effects here.
- Containers pass plain props and callbacks down to presentational components.
- Containers should not become styling-heavy UI files.

### Presentational Components

- Presentational components are pure UI.
- They receive data and handlers through props.
- They should not read Zustand stores directly.
- They should not contain business logic or data-fetching logic.
- Prefer building them with shadcn/ui primitives from `src/components/ui/`.

### Zustand

- Zustand is the global state solution for this repo.
- Stores belong in `src/store/` when the app grows beyond a single-file prototype.
- Only containers should talk to stores directly.

## Project Structure

The repo is currently small and should stay simple until new features justify more folders.

Current source layout:

```text
src/
├── assets/
├── components/
│   └── ui/
├── App.css
├── App.tsx
├── index.css
├── lib/
└── main.tsx
```

When features are added, organize them around the container/presentational pattern instead of introducing unnecessary layers.

Suggested growth path:

```text
src/
├── components/     # Presentational UI
│   └── ui/         # shadcn/ui primitives
├── containers/     # State and feature logic
├── routes/         # Thin route/page wrappers
├── store/          # Zustand stores
├── constants/      # Shared static strings
├── lib/            # Shared framework helpers such as cn()
├── utils/          # Pure app/domain helpers
├── assets/
├── App.tsx
├── index.css
└── main.tsx
```

## TypeScript Rules

- Use `type`, not `interface`.
- Do not use `any`.
- Use function declarations for React components.
- Prefer named exports for components and utilities.
- `App.tsx` may remain the default export if needed by the app entry setup.

## Styling Rules

- Use Tailwind utilities for styling.
- Keep global styling and theme tokens in `src/index.css`.
- Avoid inline styles unless there is a strong reason.
- Keep shadcn theme tokens and imports in `src/index.css`.

## shadcn/ui Rules

- shadcn/ui is installed in this repo.
- Add new primitives with the shadcn CLI instead of hand-copying component source.
- Shared class merging lives in `src/lib/utils.ts`.
- Use `import { cn } from '@/lib/utils'`.
- Use shadcn/ui building blocks inside presentational components, not inside containers.

## State and Data Rules

- Do not introduce a repository or service layer unless the project actually needs one later.
- Do not access Zustand stores from presentational components.
- Keep state close to the feature; only lift it into Zustand when it is truly shared.

## Testing

- Jest is not part of this project setup.
- Do not add Jest-specific files, scripts, or guidance unless explicitly requested.

## Documentation Hygiene

- Keep `README.md`, `AGENTS.md`, and project scripts in sync.
- If the project setup changes, update the docs in the same task.
