# TAAF — Enterprise Architecture

Built like a Fortune-500 front end: typed, modular, feature-based, and
production-ready.

## 1. Stack (as built)

| Layer | Choice | Note |
|---|---|---|
| Framework | **Next.js 16.2** (App Router, Turbopack) | Brief said 15; scaffold shipped 16 — built to 16's conventions (async `params`, `proxy`, `cacheComponents`) |
| UI runtime | **React 19.2** | |
| Language | **TypeScript 5** (strict) | |
| Styling | **Tailwind CSS v4** (`@theme` tokens) | No `tailwind.config.js` — CSS-first |
| Motion | **Motion** + **Lenis** | GSAP documented as an optional upgrade |
| Icons | **lucide-react** (typed map) | Tree-shaken via explicit imports |
| Utils | `clsx` + `tailwind-merge` (`cn`) | |

> **ShadCN UI** (in the brief) is compatible and recommended for future
> app-like surfaces (client portal, dashboards). It wasn't needed for these
> marketing pages; the custom glass primitives are lighter and fully on-brand.
> Init with `npx shadcn@latest init` when the portal work begins.

## 2. Folder structure (feature-based)

```
src/
├─ app/                      # App Router: routes, layout, metadata, sitemap, robots
│  ├─ layout.tsx             # fonts, metadata, Header/Footer, SmoothScroll, ScrollProgress
│  ├─ page.tsx               # homepage (composes 10 feature sections)
│  ├─ services/page.tsx      # services hub
│  ├─ services/[slug]/page.tsx  # SSG service detail (generateStaticParams)
│  ├─ about | insights | contact /page.tsx
│  ├─ not-found.tsx · sitemap.ts · robots.ts · globals.css
├─ components/
│  ├─ ui/                    # design-system primitives
│  ├─ layout/                # header, footer, smooth scroll, progress
│  └─ ConsultationForm.tsx   # shared form
├─ features/
│  └─ home/                  # the 10 homepage sections (+ HeroDashboard)
├─ content/                  # typed content layer (CMS-ready)
├─ lib/                      # cn() and helpers
└─ types/                    # shared domain types
```

**Boundaries:** `content` (data) → `features`/`app` (composition) →
`components` (reusable UI) → `lib`/`types` (foundation). UI never imports from
features; data has no UI dependency. This keeps units swappable and testable.

## 3. Rendering & data

- All marketing pages are **static** (SSG). Service pages use
  `generateStaticParams` → 21 pre-rendered pages. Build output: **31 static
  routes**.
- Content is imported from the typed `content/` layer today; the same interfaces
  map cleanly onto a headless CMS (Sanity/Contentful/Payload) or MDX later.
- Per-route `metadata` + a title template; `sitemap.ts` and `robots.ts`
  generated from the content layer.

## 4. Performance (path to 95+ Lighthouse)

- Static HTML + Turbopack-optimised bundles; mostly Server Components — only
  interactive islands (`"use client"`) ship JS (header, motion sections, form).
- `next/font` self-hosting → no render-blocking font requests, no CLS.
- `next/image` for all real photography (AVIF/WebP, responsive `srcset`, lazy) —
  configure `images.remotePatterns` / `qualities` per Next 16 defaults.
- Motion respects `prefers-reduced-motion`; decorative layers are GPU-cheap
  (blur/transform only) and `aria-hidden`.
- No heavy chart lib — data-viz is hand-rolled SVG.

## 5. SEO & accessibility

- Metadata API (Open Graph, keywords, robots), `metadataBase`, `en-AU` locale.
- Semantic landmarks, labelled controls, focus-visible, AA contrast.
- **Roadmap:** JSON-LD (`AccountingService` + `LocalBusiness` with NAP), OG
  images via `opengraph-image`, analytics + Core Web Vitals reporting.

## 6. Maintainability

- Strict TypeScript; every content item typed; `verified` flags make
  unverified marketing claims impossible to ship by accident.
- Small, single-purpose files; consistent naming; `cn()` for class composition.
- Adding a service = one entry in `services.ts` (auto-creates its SSG page,
  hub card, sitemap entry).
