# TAAF — Future of Finance (redesign concept + build)

A world-class, futuristic website concept for **Tenth Avenue Accountants &
Financial Advisors** (Central Coast, NSW) — positioning TAAF as a trusted
financial growth partner that "looks like the future of finance."

This repo contains **both** the strategic concept **and** a complete, runnable
Next.js implementation of it.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — 31 static routes
```

## Documentation

| Doc | Contents |
|---|---|
| [`docs/00-CONCEPT.md`](docs/00-CONCEPT.md) | Vision, business analysis, UX strategy, sitemap, homepage & inner-page design, content & image strategy |
| [`docs/01-DESIGN-SYSTEM.md`](docs/01-DESIGN-SYSTEM.md) | Tokens, typography, components, motion strategy, accessibility |
| [`docs/02-ARCHITECTURE.md`](docs/02-ARCHITECTURE.md) | Stack, folder structure, rendering, performance, SEO, maintainability |
| [`docs/03-ROADMAP.md`](docs/03-ROADMAP.md) | Phased plan + **pre-launch checklist** |

## What's built

- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript ·
  Tailwind v4 · Motion · Lenis · lucide-react.
- **Homepage:** 10 sections incl. the signature **Financial Command Center**.
- **Inner pages:** services hub, 21 SSG service pages, About, Insights, Contact, 404.
- **System:** glassmorphism + aurora design system, scroll-linked motion,
  animated counters, SEO scaffolding (metadata, sitemap, robots).

## Integrity note

The brief included marketing claims not present on the live site
("3000+ clients", Newcastle/Cessnock offices). For a regulated firm these are
**not published as fact** — they're tagged `verified: false` in the content
layer, clearly labelled in the UI, and listed in the pre-launch checklist for
the client to confirm or remove. Only verifiable facts (since 2017, Toukley,
Xero Platinum Champion Partner) are presented as real.

> Local-only concept build — not deployed, no remote configured.
