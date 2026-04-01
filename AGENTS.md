# AGENTS.md

This file is the source of truth for AI agents working in this repository.

Keep the guidance aligned with the real project. Do not copy architecture, tooling, or folder rules from other repos unless they have been intentionally adopted here.

## Current Stack

| Layer            | Choice                            |
| ---------------- | --------------------------------- |
| Frontend         | React 19 + TypeScript 5.9         |
| Bundler          | Vite 8                            |
| Styling          | Tailwind CSS v4                   |
| UI Library       | shadcn/ui (base-nova style)       |
| State Management | Zustand                           |
| Routing          | React Router v7                   |
| HTTP Client      | Axios (`src/lib/api.ts`)          |
| Validation       | Zod                               |
| Pattern          | Container / Presentational        |
| Linting          | ESLint 9 + Prettier               |

## Commands

```bash
npm install                        # Install dependencies
npm run dev                        # Start dev server
npm run build                      # Type-check + production build
npm run lint                       # Run ESLint
npm run preview                    # Preview production build
npx shadcn@latest add <component>  # Add a shadcn/ui component
```

## Module Structure

Each feature lives in its own folder under `src/modules/`. Teammates should work in separate module folders to avoid merge conflicts.

```
src/
├── modules/
│   ├── auth/           # Login, Register — branch: feature/auth
│   │   ├── components/ # Presentational: LoginForm, RegisterForm
│   │   ├── containers/ # Logic: LoginContainer, RegisterContainer
│   │   └── LoginPage.tsx / RegisterPage.tsx
│   ├── home/           # Landing page — branch: feature/home
│   │   ├── components/ # Navbar, HeroSection, CategoriesSection, etc.
│   │   └── HomePage.tsx
│   ├── restaurants/    # Listing + detail — branch: feature/restaurants
│   │   ├── components/
│   │   ├── containers/
│   │   └── RestaurantsPage.tsx / RestaurantDetailPage.tsx
│   ├── menu/           # Menu browsing — branch: feature/menu
│   ├── cart/           # Cart management — branch: feature/cart
│   ├── orders/         # Order history + placement — branch: feature/orders
│   ├── owner/          # Owner dashboard — branch: feature/owner
│   └── admin/          # Admin panel — branch: feature/admin
├── components/
│   └── ui/             # shadcn/ui primitives (shared, touch carefully)
├── lib/
│   ├── utils.ts        # cn() class merger
│   └── api.ts          # Axios instance (base URL, JWT interceptor)
├── store/              # Zustand stores (one file per domain)
├── routes/             # Route definitions live in App.tsx
├── constants/
├── utils/
└── assets/
```

### Adding a New Route

1. Create your page component inside `src/modules/<your-module>/`.
2. Open `src/App.tsx` and add a new `{ path, element }` entry — comments mark where to add.
3. Import only your page component (do not touch other modules).

### Shared Conflict-Prone Files

Only touch these when your feature genuinely requires it:

| File | Owned by |
| --- | --- |
| `src/App.tsx` | All (add only your route, don't touch others) |
| `src/index.css` | Design system owner only |
| `AGENTS.md` | Any (update when adding modules) |
| `src/lib/api.ts` | Shared — do not modify, only import |
| `src/components/ui/` | Shared — add via `npx shadcn add`, don't hand-edit |

---

## Architecture

This project uses the **container/presentational component pattern**.

### Routes / Pages

- Route files should stay thin.
- Their job is composition only: layout, page structure, and wiring the correct container.
- Do not place business logic in routes.

### Containers

- Containers own logic.
- Put `useState`, `useEffect`, Zustand access, validation (Zod), derived state, and side effects here.
- Containers pass plain props and callbacks down to presentational components.
- Containers should not become styling-heavy UI files.
- **API calls:** use `api` from `@/lib/api` (axios instance). Never call `fetch` directly.

### Presentational Components

- Presentational components are pure UI.
- They receive data and handlers through props.
- They should not read Zustand stores directly.
- They should not contain business logic or data-fetching logic.
- Prefer building them with shadcn/ui primitives from `src/components/ui/`.

### Zustand

- Zustand is the global state solution for this repo.
- Stores belong in `src/store/` — one file per domain (e.g. `cartStore.ts`, `authStore.ts`).
- Only containers should talk to stores directly.

### API Integration Pattern

Mock data is used until the backend is ready. When integrating an API:

1. In the container, uncomment the `api.post / api.get` call.
2. Replace mock data / direct navigation with the real response.
3. Store JWT tokens in `localStorage` under the key `"token"`.

```ts
// Example: replacing mock login with real API call
const response = await api.post('/auth/login', { email, password })
localStorage.setItem('token', response.data.token)
navigate('/')
```

---

## Design System: Editorial Appetite

Colors, fonts, and spacing are defined in `src/index.css`.

### Key Color Classes

| Class | Value | Use |
| --- | --- | --- |
| `bg-primary` / `text-primary` | `#ab2d00` | CTAs, active states |
| `bg-primary-container` | `#ff7851` | Gradient endpoints |
| `text-on-surface` | `#2d2f2f` | Body text (never pure black) |
| `text-on-surface-variant` | `#5a5c5c` | Secondary text, icons |
| `bg-surface-container-low` | `#f0f1f1` | Input backgrounds |
| `bg-surface-container` | `#e7e8e8` | Card / section backgrounds |
| `bg-surface-container-highest` | `#dbdddd` | Inactive chips |
| `text-tertiary` | `#833e9a` | Special offers / loyalty |

### Key Font Classes

| Class | Font | Use |
| --- | --- | --- |
| `font-headline` | Plus Jakarta Sans | Display, restaurant names, section headers |
| `font-body` | Inter | Body copy, descriptions |
| `font-label` | Inter | Labels, metadata |

### Utility Classes

- `.hero-gradient` — 135° gradient `#ab2d00 → #ff7851`
- `.hide-scrollbar` — hides the scrollbar on horizontal scroll containers

### Design Rules (summary)

- **No 1px dividers** — use background color shifts or `spacing` for separation.
- **No pure black text** — always use `text-on-surface` (`#2d2f2f`).
- **Glassmorphism nav** — `bg-white/70 backdrop-blur-xl` for sticky headers.
- **Cards** — `rounded-3xl`, no borders, tonal elevation only.
- **Buttons** — primary uses gradient via `.hero-gradient`; `active:scale-[0.97]` for tactile feedback.

---

## TypeScript Rules

- Use `type`, not `interface`.
- Do not use `any`.
- Use function declarations for React components.
- Prefer named exports for components and utilities.
- `App.tsx` may remain the default export.

## Styling Rules

- Use Tailwind utilities for styling.
- Keep global styling and theme tokens in `src/index.css`.
- Avoid inline styles — exception: gradient backgrounds where Tailwind arbitrary values would be unreadable.
- Use `cn()` from `@/lib/utils` for conditional class merging.

## shadcn/ui Rules

- Add new primitives with `npx shadcn@latest add <component>`.
- Do not hand-copy component source.
- Use shadcn/ui building blocks inside **presentational components**, not inside containers.

## Testing

- Jest is not part of this project setup.
- Do not add Jest-specific files, scripts, or guidance unless explicitly requested.

## Documentation Hygiene

- Keep `README.md` and `AGENTS.md` in sync with the real project.
- Update `AGENTS.md` when adding a new module or changing a shared convention.
