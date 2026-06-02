# Pokédex

A modern Pokémon encyclopedia built with Next.js App Router, consuming [PokeAPI v2](https://pokeapi.co/).

## Features

- **Infinite scroll** — browse all 1,350+ Pokémon with offset-based pagination
- **Type filter** — filter Pokémon by any of the 18 game types via URL state
- **Search** — find Pokémon by name with debounced client-side filtering
- **Detail page** — artwork, base stats, abilities with effect text, evolution chain, and game sprites
- **Dark mode** — system-aware theme with manual toggle
- **Shareable URLs** — search and filter state live in the URL (`?type=fire&search=char`)
- **Loading & error states** — skeleton UI and error boundaries at route level

## Tech Stack

| Category        | Library                         |
| --------------- | ------------------------------- |
| Framework       | Next.js 16 (App Router)         |
| Language        | TypeScript                      |
| Styling         | TailwindCSS v4 + shadcn/ui      |
| Data fetching   | TanStack Query v5               |
| HTTP client     | Axios                           |
| URL state       | nuqs                            |
| Theme           | next-themes                     |
| Infinite scroll | react-infinite-scroll-component |
| Utilities       | usehooks-ts                     |
| Testing         | Vitest + React Testing Library  |
| Runtime         | Bun                             |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.0

### Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd pokemon

# 2. Install dependencies
bun install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable                       | Description         | Default                     |
| ------------------------------ | ------------------- | --------------------------- |
| `NEXT_PUBLIC_POKEAPI_BASE_URL` | PokeAPI v2 base URL | `https://pokeapi.co/api/v2` |

## Scripts

```bash
bun dev           # Start development server
bun build         # Build for production
bun start         # Start production server
bun test          # Run tests (single run)
bun test:watch    # Run tests in watch mode
bun test:coverage # Run tests with coverage report
bun lint          # Lint source files
bun type-check    # TypeScript type checking
bun validate      # type-check + lint + format check
```

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Home — infinite list, search, filter
│   ├── loading.tsx             # Home route loading state
│   ├── error.tsx               # Home route error boundary
│   ├── not-found.tsx           # 404 page
│   └── pokemon/[id]/           # Detail route
│       ├── page.tsx
│       ├── loading.tsx
│       └── error.tsx
│
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── pokemon/                # Pokemon-specific components
│   │   ├── pokemon-card.tsx
│   │   ├── pokemon-card-skeleton.tsx
│   │   ├── pokemon-detail.tsx
│   │   ├── pokemon-grid.tsx
│   │   ├── pokemon-list-item.tsx
│   │   ├── pokemon-type-filter.tsx
│   │   ├── stat-bar.tsx
│   │   └── type-badge.tsx
│   └── shared/                 # Layout and global components
│       ├── header.tsx
│       ├── query-provider.tsx
│       ├── search-input.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
│
├── services/                   # API service layer (only active endpoints)
│   ├── core/                   # Http class, ApiError, request types
│   ├── api.ts                  # pokemonApi singleton
│   ├── types.ts                # Shared PokeAPI types
│   ├── pokemon/                # fetcher + hooks + types
│   ├── pokemon-species/        # fetcher + hooks + types
│   ├── type/                   # fetcher + hooks + types
│   ├── ability/                # fetcher + hooks + types
│   └── evolution-chain/        # fetcher + hooks + types
│
├── constants/
│   ├── api.ts                  # BASE_URL, POKEMON_LIST_LIMIT
│   └── pokemon-types.ts        # Type → hex color mapping
│
├── utils/
│   └── pokemon.ts              # formatPokemonId, formatHeight, etc.
│
└── test/
    ├── setup.ts                # jest-dom global matchers
    └── render-utils.tsx        # renderWithProviders helper
```

## Architecture

### Service Layer

Only the endpoints actively used by the UI have a service folder. Each folder mirrors its API path exactly:

```
GET /pokemon           → services/pokemon/
GET /pokemon-species   → services/pokemon-species/
GET /type              → services/type/
GET /ability           → services/ability/
GET /evolution-chain   → services/evolution-chain/
```

Each service folder contains:

```
services/pokemon/
├── fetcher.ts   # Class-based fetcher (no hooks)
├── hooks.ts     # TanStack Query hooks
├── types.ts     # TypeScript interfaces for that endpoint
└── index.ts     # export * from each module
```

The `Http` class in `services/core/http.ts` wraps Axios with centralized error handling. All errors are normalized to `ApiError`. There is no auth logic — PokeAPI is a public API.

```ts
import { pokemonFetcher } from '@/services/pokemon';

const list = await pokemonFetcher.getPokemons({ limit: 20, offset: 0 });
const detail = await pokemonFetcher.getPokemonDetail({ idOrName: 'pikachu' });
```

### State Management

| State                        | Tool           | Example                  |
| ---------------------------- | -------------- | ------------------------ |
| Server data (Pokémon, types) | TanStack Query | `useGetPokemonDetail`    |
| URL state (search, filter)   | nuqs           | `?type=fire&search=char` |

URL state is used for all shareable filter/search values so users can bookmark or share filtered views. There is no global client-side state store — all server state lives in TanStack Query's cache.

### Data Flow — Home Page

```
URL (?type=fire&search=char)
  ↓ nuqs
PokemonGrid
  ├── [no type] → useGetInfinitePokemons → InfiniteScroll → PokemonListItem[]
  └── [type set] → useGetTypeDetail      → Grid          → PokemonListItem[]
                                                              ↓
                                                         useGetPokemonDetail
                                                              ↓
                                                         PokemonCard
```

### Data Flow — Detail Page

```
/pokemon/[id]
  ↓
PokemonDetail
  ├── useGetPokemonDetail(id)
  ├── useGetPokemonSpecies(species.name)   ← depends on detail
  ├── useGetEvolutionChain(chain.id)       ← depends on species
  └── AbilityItem × N
        └── useGetAbility(ability.name)
```

## Testing

```bash
bun test            # run all tests
bun test:coverage   # with coverage report
```

Tests live in `__tests__/` folders colocated with the source they cover.

| Layer      | Strategy                                                             |
| ---------- | -------------------------------------------------------------------- |
| Fetchers   | Mock `pokemonApi.get` via `vi.mock`, assert URL, params, error cases |
| Utilities  | Pure function tests, no mocking needed                               |
| Components | React Testing Library, mock `next/image`, `next/link`, and hooks     |

For components that use TanStack Query, use `renderWithProviders` from `src/test/render-utils.tsx`.

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(scope): short description
fix(scope): short description
chore(scope): short description
test(scope): short description
docs(scope): short description
refactor(scope): short description
perf(scope): short description
```
