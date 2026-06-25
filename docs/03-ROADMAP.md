# TAAF — Development Roadmap

The concept is **built and runnable** (Phase 0 complete). What follows takes it
from polished concept to launched, production-grade site.

## Phase 0 — Concept build ✅ (this repository)

- [x] Design system (Tailwind v4 tokens, glass, aurora, motion primitives)
- [x] Typed content layer with honest `verified` flags
- [x] 10-section homepage incl. the Financial Command Center
- [x] Services hub + 21 SSG service pages, About, Insights, Contact, 404
- [x] Smooth scroll, scroll progress, animated counters, scroll-linked sections
- [x] SEO scaffolding (metadata, sitemap, robots)
- [x] `next build` green · 31 static routes · all routes serve 200

## Phase 1 — Content & truth (with the client)

> Resolve every `verified:false` flag before anything goes public.

- [ ] Confirm or remove **Newcastle / Cessnock** offices (`content/company.ts`).
- [ ] Confirm real trust-bar metrics (replace asterisked placeholders).
- [ ] Confirm **Business Advisory** & **Mortgage/Lending** are offered.
- [ ] Collect **consented** client testimonials (`content/testimonials.ts`).
- [ ] Final copy pass with the client; confirm tone and service descriptions.
- [ ] Commission **real team/office photography** (Toukley) + premium imagery.

## Phase 2 — Make it functional

- [ ] Wire `ConsultationForm` to a backend (Route Handler → email/CRM, e.g.
      Resend/HubSpot, or a Cloudflare Worker). Add validation + spam protection.
- [ ] Booking: embed a real scheduler (Calendly/SavvyCal) on `/contact` + `/book`.
- [ ] Insights: add `/insights/[slug]` template + MDX or a headless CMS feed.
- [ ] Replace SVG placeholder map with an embedded/interactive map.
- [ ] Add `images.remotePatterns` config when real images land.

## Phase 3 — Optimise & assure

- [ ] JSON-LD: `AccountingService` + `LocalBusiness` (NAP, hours, geo).
- [ ] `opengraph-image` route for rich social cards.
- [ ] Analytics + Core Web Vitals (`useReportWebVitals`); cookie/consent.
- [ ] Lighthouse pass → **95+** Performance / A11y / Best Practices / SEO.
- [ ] Cross-browser + device QA; reduced-motion + keyboard/AT audit.
- [ ] Optional: GSAP ScrollTrigger for richer Command Center / journey timelines;
      ShadCN UI if a client portal is added.

## Phase 4 — Launch (agency deploy workflow)

> Per agency standing rules — client work, agency Cloudflare account.

- [ ] Create the per-client repo; push (currently local-only, no remote).
- [ ] Deploy to the **agency Cloudflare account** (Sales@visiondigitallab.com)
      with auto-deploy; configure the client domain + DNS + SSL.
- [ ] 301 redirects from old URLs; submit `sitemap.xml`; verify Search Console.
- [ ] Post-launch: monitor conversions, Web Vitals, form deliverability.

---

## Pre-launch checklist (must be clear before go-live)

| Item | Where | Status |
|---|---|---|
| Newcastle/Cessnock confirmed or removed | `content/company.ts` | ⚠️ placeholder |
| Trust-bar numbers confirmed | `content/company.ts` | ⚠️ placeholder |
| Business Advisory / Mortgage offered? | `content/services.ts` | ⚠️ `verified:false` |
| Real, consented testimonials | `content/testimonials.ts` | ⚠️ placeholder |
| Form submissions delivered to TAAF | `ConsultationForm` | ⚠️ demo only |
| Real imagery (team/office) | `next/image` | ⚠️ CSS placeholders |
| Insights = real articles/CMS | `content/insights.ts` | ⚠️ sample |

## Local commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (green: 31 static routes)
npm run start   # serve the production build
```
