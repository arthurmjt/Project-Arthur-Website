# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — Turbopack dev server at http://localhost:3000
- `npm run build` — production build (runs TypeScript typecheck; prerenders the site statically)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (Next.js config)
- `npx tsc --noEmit` — type-check without emitting

No test runner is configured.

## Architecture

This is a **single-page portfolio site** ported from `../personal-website/project/Project Arthur.html` — a Claude Design handoff prototype. The React + Tailwind structure of that prototype is preserved; class names, CSS custom properties, and SVG markup are intentionally near-verbatim so visual parity with the prototype can be verified by diffing.

### One page, three "tabs" — no routes

There is one Next.js route (`app/page.tsx`). "Tabs" (Me, Résumé, Photography) are **client state**, not URL routes. `TabProvider` (`components/providers/tab-provider.tsx`) holds the active tab index in React state and scrolls to top on change. `app/page.tsx` is a server component that mounts `<App/>`; everything downstream is a client component because the whole interactive tree lives under `"use client"` providers.

Tab state is in-memory only — there is no `localStorage` persistence and no URL sync. `Dict.tabs` is typed as a fixed-length `[string, string, string]` tuple, so adding a tab is a type-level change that ripples into `lib/dict.ts` and `components/app.tsx`'s `Pages` array.

If someone asks for deep-linkable tabs, that's a real change — it means turning `components/pages/*` into App Router segments and moving the tab state into the URL.

### i18n (EN / 中) — via context

`I18nProvider` in `components/providers/i18n-provider.tsx` exposes `lang` and `t` (the active dictionary) via the `useT()` hook, and mirrors `lang` onto `document.documentElement.lang` (`en` / `zh-Hans`). The dictionary lives in `lib/dict.ts` with a **shared `Dict` TypeScript type** that both `DICT.en` and `DICT.zh` must satisfy — if you add a field to one language, TypeScript forces you to add it to the other. Pages index into `t` directly (e.g. `t.tabs[i]`, `t.rings[i].note`, `t.photoCaptions[i].h`). Do not flatten or rename dict keys without touching every page.

Bio paragraphs use a structured segment format (`BioPara = BioSeg[]`, where `BioSeg` is `string | { t, href } | { em }`) so inline links and emphasis survive translation — `me-page.tsx` walks the array via a local `renderSeg` helper. Add new segment shapes in `lib/dict.ts` *and* `renderSeg` together.

Language selection is also in-memory only (no `localStorage`).

### Client-side-only world map

`me-page.tsx` loads `components/world-map.tsx` via `next/dynamic` with `ssr: false` and a matching-aspect-ratio loading placeholder. This produces a `BAILOUT_TO_CLIENT_SIDE_RENDERING` notice in the SSR HTML for `/` — that is expected, not an error. `react-simple-maps` pulls in D3 modules that assume a browser environment, which is why SSR is disabled for this component specifically rather than for the whole page.

### Design tokens live in CSS, not Tailwind config

`app/globals.css` defines all tokens (`--ivory`, `--ink*`, `--green*`, `--orange*`, `--veil*`) as CSS custom properties on `:root`, plus the prototype's utility classes (`glass`, `card`, `tab[data-active]`, `pill`, `chip`, `lift`, `zen-bg`, `grain`, `breathe`, `fade-up`, `photo-tile[.wide|.tall]`, `play-puck`). Tailwind v4 is used with its default config — no `tailwind.config.ts`. Colors and sizes appear in markup as arbitrary values: `text-[color:var(--ink)]`, `bg-[rgba(255,255,255,0.6)]`, `text-[clamp(56px,8.4vw,132px)]`. Keep that pattern when adding styles; don't introduce a Tailwind theme layer for tokens already in CSS.

### Fonts

Inter, JetBrains Mono, and Noto Serif SC are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-inter`, `--font-mono`, `--font-cn`). `globals.css` wires them into `body`, `.f-display`, `.f-mono`, `.f-cn`, `.eyebrow`. Noto Serif SC has `preload: false` because it has no latin subset — preloading it would waste bandwidth for EN users.

### Shared chrome, page bodies

- `components/top-bar.tsx` and `components/footer.tsx` render on every tab. `components/ai-persona.tsx` is imported by each page and rendered at the bottom of that page's body (not by `App`).
- `components/pages/{me,resume,photo}-page.tsx` each own a tab. The tab-index → component mapping lives in `components/app.tsx` as `Pages = [MePage, ResumePage, PhotoPage]` — order must match `Dict.tabs`.
- `components/app.tsx` routes `tab` → `Pages[tab]` with a `key={tab}` on `<main>` so the `fade-up` animation replays on tab change.

### Placeholder content

Photo tiles (CSS-gradient tiles via `shade()` in `components/photo-tile.tsx`), social icons (inline SVG), and résumé entries are still **placeholders** carried over from the prototype. Swapping in real photos means replacing `PhotoTile` usages with real `<Image>` components. The portrait on the Me page is no longer a placeholder — it reads from `/public/media/me.jpg` via a plain `<img>` in `me-page.tsx`; replace the file to change the photo.
