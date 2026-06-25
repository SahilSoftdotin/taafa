# TAAF — "Future of Finance" Redesign Concept

**Client:** Tenth Avenue Accountants & Financial Advisors (TAAF / TAAFA)
**Current site:** https://www.taafa.com.au/
**Positioning shift:** from "another local accounting firm" → **a trusted financial growth partner that looks like the future of finance.**
**Brand-perception target:** a firm that feels like a $100M+ AUD enterprise — McKinsey credibility, Apple/Linear polish, Stripe/Morgan Stanley confidence.

> This document is the strategic concept. The companion docs cover the
> [design system](01-DESIGN-SYSTEM.md), [architecture](02-ARCHITECTURE.md) and
> [development roadmap](03-ROADMAP.md). A complete, runnable Next.js 16 build of
> this concept lives in this repository (`npm run dev`).

---

## 1. Business understanding (extracted from the live site)

**Verified facts** (taafa.com.au, captured 2026-06-25):

| Field | Value |
|---|---|
| Name | Tenth Avenue Accountants & Financial Advisors |
| Established | 2017 |
| Location | Unit 2/28 Canton Beach Road, Toukley NSW 2263 (Central Coast) |
| Phone / Email | (02) 4399 1551 · info@taafa.com.au |
| ABN | 46 626 434 991 |
| Hours | Mon–Fri 9:00am–5:00pm |
| **Key credential** | **Xero Platinum Champion Partner** |
| Socials | Facebook (TenthAvenueAccounting), Instagram (tenth.avenue.group) |

**Services confirmed on the live site:** personal / sole-trader / partnership /
company tax returns; tax planning; business accounting (BAS, payroll,
bookkeeping); trusts & disability trusts; SMSF; superannuation & super
investments; financial & estate planning; investment property advice; life,
income-protection, TPD & trauma insurance; insurance within super.

### ⚠️ Integrity flags (decided: *honest content + placeholders*)

The original brief specified marketing claims that are **not on the live site**.
For a regulated financial firm these must not be published unverified:

- **"3000+ clients"** — no client count is published. Replaced with honest,
  clearly-flagged placeholder metrics (`verified:false`, asterisked in the UI).
- **"Multi-location · Toukley, Newcastle, Cessnock"** — only **Toukley** is real.
  Newcastle/Cessnock are included in the data layer but **disabled and labelled
  "To confirm"** until the client verifies they exist.

Every placeholder is tagged in code (`verified: boolean`) so the client can
confirm-or-remove each one before launch. See the [pre-launch checklist](03-ROADMAP.md#pre-launch-checklist).

---

## 2. UX strategy

**Primary goal:** consultation bookings (lead-gen). **Secondary:** service
discovery and trust-building.

**Audience modes:**
1. *Individuals & families* — tax returns, super, insurance, estate planning.
2. *Business owners* — accounting, BAS/payroll, advisory, company tax.
3. *Investors / pre-retirees* — SMSF, wealth, property, financial planning.

**Conversion architecture (every page earns the next click):**
- A persistent, glass "Book a Session" CTA in the header + sticky phone number.
- Each of the 10 homepage sections ends with forward momentum (CTA card, related
  links, or the next narrative beat).
- One **low-friction primary action** repeated everywhere: *Book a Strategy
  Session* (framed as "a conversation, not a sales pitch").
- Trust is front-loaded: the **Xero Platinum** credential appears in the hero,
  header proof line, service sidebars and footer.

**Principles:** clarity over cleverness; plain-English copy; transparency as a
brand pillar (it's literally TAAF's differentiator); motion that guides
attention, never blocks reading; accessible by default.

---

## 3. Sitemap

```
/
├─ /                       Homepage (10-section experience)
├─ /services              Services hub (grouped by 8 categories)
│   └─ /services/[slug]   21 service detail pages (SSG)
├─ /about                 Story, values, at-a-glance, accreditation
├─ /insights             Insights hub (article grid — CMS-ready)
│   └─ /insights/[slug]  (roadmap: article template + MDX/CMS)
├─ /contact              Book a session + details + map
├─ /sitemap.xml          Generated
└─ /robots.txt           Generated

Future (roadmap): /smsf, /business, /individuals landing pages,
/insights/[slug], /book (calendar embed), /privacy, /terms.
```

---

## 4. Homepage experience (10 sections)

| # | Section | Wow factor | Implementation |
|---|---|---|---|
| 1 | **Hero** | Aurora field + floating 3D glass dashboard mockup (animated bars, sparkline, live chips) | `features/home/Hero.tsx` + `HeroDashboard.tsx` |
| 2 | **Trust bar** | Real animated counters (honest figures + flagged placeholders) | `TrustBar.tsx` + `Counter.tsx` |
| 3 | **Services ecosystem** | Filterable "service universe", animated layout, hover-aurora cards | `ServicesEcosystem.tsx` |
| 4 | **Financial Command Center** ★ | Interactive multi-module dashboard (Tax/Wealth/Insurance/SMSF/Cashflow/Investments) with animated area chart + radial gauge | `CommandCenter.tsx` |
| 5 | **Why TAAF** | Pinned **horizontal scroll** of 6 pillars (scroll-driven translateX) | `WhyTaaf.tsx` |
| 6 | **Success journey** | Scroll-drawn SVG path: Starting position → Strategy → Execution → Growth | `SuccessJourney.tsx` |
| 7 | **Locations** | Stylised interactive map, animated pins, honest Toukley-only default | `Locations.tsx` |
| 8 | **Insights hub** | Modern content grid (CMS-ready) | `InsightsHub.tsx` |
| 9 | **Book consultation** | Premium glass card, multi-step-feel form, success state | `BookConsultation.tsx` + `ConsultationForm.tsx` |
| 10 | **Footer** | Enterprise footer: CTA strip, 3 nav columns, credential, ABN | `components/layout/Footer.tsx` |

The **Command Center (4)** is the signature moment — it visually proves the
"one partner for your entire financial life" promise that differentiates TAAF.

---

## 5. Inner-page design

- **Services hub** — categories as sections, each with an icon header and a
  responsive card grid; placeholder services visibly flagged.
- **Service detail** (`[slug]`) — overview, "what's included" checklist, related
  services, and a sticky advisor CTA sidebar with phone/email + credential.
  Statically generated for all 21 services with per-page metadata.
- **About** — story, "at a glance" facts panel, four brand values.
- **Insights** — full article grid (sample content; CMS-ready).
- **Contact** — contact cards, stylised map link, and the booking form.
- **404** — on-brand aurora error page.

---

## 6. Content structure

All copy and data live in a typed content layer (`src/content/`) so the site is
CMS-migration-ready and the client's real content drops straight in:

- `company.ts` — facts, locations, stats, trust marks (each `verified`-flagged).
- `services.ts` — 21 services across 8 categories, with grouping/lookup helpers.
- `insights.ts` — article metadata (swap for a CMS feed).
- `testimonials.ts` — placeholder, **consented reviews required** before launch.
- `nav.ts` — header + footer navigation.

---

## 7. Image strategy

The concept ships **zero stock-photo clichés** — it uses CSS/SVG aurora fields,
glassmorphism and data-viz as the visual language (faster, fully original,
on-brand for "future of finance"). For launch, layer in **authentic** imagery:

1. **Real team & office** photography (Toukley) — the single highest-trust asset.
2. Central Coast / Australian business-owner lifestyle shots (commissioned or
   premium licensed — not generic).
3. Abstract data/finance textures only as accents behind glass.
4. All images via `next/image` (AVIF/WebP, responsive, lazy) — see
   [architecture](02-ARCHITECTURE.md). Provide art-directed crops per breakpoint.

**Guardrail:** every image must read as *premium, authentic, trustworthy,
enterprise.* If it looks like stock, it doesn't ship.
