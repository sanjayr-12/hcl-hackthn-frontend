# Frontend

Small React 19 + TypeScript + Vite frontend using Tailwind CSS v4.

## Stack

- React 19
- TypeScript 5.9
- Vite 8
- Tailwind CSS v4
- Zustand for shared state
- ESLint 9
- Prettier

## Architecture

This project uses the container/presentational component pattern.

- Routes or pages should stay thin and compose containers.
- Containers own logic, state, validation, and store access.
- Presentational components receive props and render UI only.
- Zustand is the only shared state solution planned for this repo.

This repo does not currently use a repository/service data layer.
This repo does not currently use Jest.

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
├── index.css
└── main.tsx
```

As the app grows, prefer adding:

```text
src/
├── components/
├── containers/
├── routes/
├── store/
├── constants/
└── utils/
```

## Notes

- Keep `README.md`, `AGENTS.md`, and `package.json` aligned.
- Avoid adding architecture from older projects unless this repo explicitly adopts it.
