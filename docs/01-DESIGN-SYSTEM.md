# TAAF Design System — "Future of Finance"

A three-layer token system (primitive → semantic → component) implemented with
**Tailwind CSS v4** `@theme` in `src/app/globals.css`. Everything below is live
in the build.

## 1. Design language

- **Mood:** futuristic financial institution × luxury wealth brand × premium
  enterprise software. Deep-ink canvas, aurora light, glass surfaces, restrained
  champagne luxury accent, cinematic type.
- **Feel:** calm confidence. Motion and glow guide the eye; they never shout.

## 2. Color tokens

| Token | Hex | Role |
|---|---|---|
| `ink-950` … `ink-600` | `#05070f` → `#1f2b58` | Deep navy canvas + raised surfaces |
| `mist-50` … `mist-500` | `#f6f8fc` → `#61719a` | Foreground → muted text |
| `aurora-teal` | `#2dd4bf` | Accent / success |
| `aurora-cyan` | `#22d3ee` | Highlights, sparklines |
| `aurora-indigo` | `#6366f1` | Primary brand |
| `aurora-violet` | `#8b5cf6` | Primary brand (gradient end) |
| `champagne` | `#e7c9a0` | Luxury / trust-mark accent |

**Signature gradients:** `from-aurora-indigo to-aurora-violet` (primary CTAs);
`teal → indigo → violet` (the aurora ramp for text & borders).

## 3. Typography

- **Display:** Sora (geometric, premium) — headings, tight `-0.02em` tracking.
- **Body:** Inter — UI and prose.
- **Mono:** JetBrains Mono — data labels, step numbers.
- Self-hosted via `next/font` (zero layout shift, no external requests).
- Fluid scale from `text-sm` to `text-[4.1rem]`; headings use `text-balance`.

## 4. Surfaces, depth & effects (component utilities in `globals.css`)

- `.glass` / `.glass-strong` — backdrop-blur glassmorphism with inset hairline +
  premium drop shadow.
- `.border-aurora` — animated gradient border revealed on hover.
- `.text-gradient` / `.text-gradient-aurora` — gradient headline text.
- `.bg-grid` — subtle dotted enterprise grid.
- `.ring-hairline`, `.mask-fade-b`, `.balance` — fine-detail utilities.
- Shadow tokens: `--shadow-glass`, `--shadow-glow`. Radius scale up to `3xl`.

## 5. Component system

**Primitives** (`src/components/ui/`):
`Button` (primary/outline/ghost), `GlassCard`, `SectionHeading` + `Eyebrow`,
`Reveal` (scroll-reveal, staggerable, polymorphic), `Counter` (animated number),
`Aurora` + `Container`, `Icon` (typed lucide map), `PageHero`.

**Layout** (`src/components/layout/`):
`Header` (scroll-aware glass nav + animated mobile sheet), `Footer`,
`SmoothScroll` (Lenis), `ScrollProgress` (spring top bar).

**Shared:** `ConsultationForm` (used by homepage + contact).

**Feature sections** (`src/features/home/`): the 10 homepage sections.

Each unit has one purpose and a clear prop interface, so it's independently
understandable, testable and reusable.

## 6. Motion strategy

| Library | Used for |
|---|---|
| **Lenis** | Smooth scroll + anchor easing (respects reduced-motion) |
| **Motion** (Framer Motion successor) | Reveals, layout animations, counters, scroll-linked transforms, the Command Center, gauges |
| CSS keyframes | Aurora drift, float, shimmer, pulse-ring |
| **GSAP** | *Documented integration point* — kept out of runtime deps for build reliability; the scroll-pinned Why-TAAF + journey path are implemented with Motion's `useScroll`. Swap to GSAP ScrollTrigger if richer timelines are needed (see roadmap). |

**Principles:**
- Entrance: 0.6–0.8s, `cubic-bezier(0.22, 1, 0.36, 1)`, `once: true`, stagger 80ms.
- Scroll-linked: spring-smoothed progress (`ScrollProgress`, horizontal `WhyTaaf`,
  drawn path in `SuccessJourney`).
- Micro-interactions: hover lift (`-translate-y-1`), aurora borders, icon nudges.
- **Accessibility:** a global `prefers-reduced-motion` block neutralises
  animation; `SmoothScroll` and `Counter` no-op under reduced motion.

## 7. Accessibility & quality bar

- Semantic landmarks (`header`/`main`/`footer`/`section`), labelled controls,
  `aria-expanded` on the menu, focus-visible rings on all interactive elements.
- Color contrast meets WCAG AA on the ink canvas; decorative layers are
  `aria-hidden`.
- Targets: Lighthouse 95+ across Performance / A11y / Best Practices / SEO
  (see [architecture](02-ARCHITECTURE.md) for how the stack supports this).
