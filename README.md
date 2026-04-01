# Frontend

Small React 19 + TypeScript + Vite frontend using Tailwind CSS v4 and shadcn/ui.

## Stack

- React 19
- TypeScript 5.9
- Vite 8
- Tailwind CSS v4
- shadcn/ui
- Zustand for shared state
- ESLint 9
- Prettier

## Architecture

This project uses the container/presentational component pattern.

- Routes or pages should stay thin and compose containers.
- Containers own logic, state, validation, and store access.
- Presentational components receive props and render UI only.
- Zustand is the only shared state solution planned for this repo.
- Reusable primitives should come from `src/components/ui/` through shadcn/ui.

This repo does not currently use a repository/service data layer.
This repo does not currently use Jest.

## shadcn/ui Setup

shadcn/ui has been initialized in this repo.

- Config: `components.json`
- UI primitives: `src/components/ui/`
- Shared class helper: `src/lib/utils.ts`
- Theme and tokens: `src/index.css`

To add more components later:

```bash
npx shadcn@latest add <component>
```

## Getting Started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Current Structure

```text
src/
├── assets/
├── App.css
├── App.tsx
├── components/
├── index.css
├── lib/
└── main.tsx
```

As the app grows, prefer adding:

```text
src/
├── components/
│   └── ui/
├── containers/
├── routes/
├── store/
├── constants/
├── lib/
└── utils/
```

## Notes

- Keep `README.md`, `AGENTS.md`, and `package.json` aligned.
- Avoid adding architecture from older projects unless this repo explicitly adopts it.
