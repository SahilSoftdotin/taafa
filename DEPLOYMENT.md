# Deployment — TAAF website

This site is a **Next.js 16 (App Router)** application exported as a **fully
static site** and served from **Cloudflare** (Workers static assets / global
CDN). Git is the source of truth: a push to `main` can build and deploy
automatically via Workers Builds.

> Why static: every route is statically generated (no SSR, APIs, or server
> actions), so a static export is lighter, faster and avoids a server runtime.
> When dynamic features are added later (e.g. a form backend or CMS), revisit
> the OpenNext → Cloudflare Workers adapter.

## Config in this repo

| File | Purpose |
|---|---|
| `next.config.ts` | `output: "export"`, `images.unoptimized: true` |
| `wrangler.jsonc` | Worker name `taafa`, `assets.directory: ./out`, `html_handling: auto-trailing-slash`, `not_found_handling: 404-page`, observability |
| `package.json` | `cf:build` (`next build`), `cf:preview`, `cf:deploy` |
| `.gitignore` | ignores `/out/`, `/.wrangler/`, `.dev.vars` |

Build output is `out/` (static HTML, assets, `sitemap.xml`, `robots.txt`).

## First-time deploy (Workers Builds — recommended)

1. Cloudflare dashboard → **Workers & Pages → Create → Workers → Import a repository**.
2. **Authorize GitHub** and select this repository (least access).
3. Build settings:
   - **Build command:** `npx next build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** repo root (`/`)
4. **Save & Deploy**, open the generated `…workers.dev` URL and verify pages,
   navigation, images, logo and the booking form.
5. Every push to `main` now auto-deploys; pull requests get preview URLs.

## CLI deploy (alternative)

```bash
npx wrangler login      # one-time browser auth (select the correct account)
npm run cf:deploy       # next build && wrangler deploy
```

## Custom domain

1. Add the domain as a Cloudflare zone (Free plan); point the registrar's
   nameservers at Cloudflare; wait for **Active**.
2. Worker → **Settings → Domains & Routes → Add Custom Domain** → apex + `www`.
   DNS + SSL are provisioned automatically.
3. Set **SSL/TLS → Full (Strict)** and enable **Always Use HTTPS**.

## Rollback

- **Dashboard:** Worker → **Deployments** → select last good version → **Rollback**.
- **CLI:** `npx wrangler deployments list` → `npx wrangler rollback <version-id>`.
- **Git:** revert the commit and push; CI redeploys.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Security checklist (per domain, ~5 min)

- [ ] SSL/TLS → **Full (Strict)**, **Always Use HTTPS** on
- [ ] WAF managed ruleset + **Bot Fight Mode** on
- [ ] Rate limit on the form/lead endpoint once a backend is wired
- [ ] 2FA on the hosting account; least-privilege access

## Pre-launch reminders

See `docs/03-ROADMAP.md`. Key items: confirm/replace the flagged placeholder
stats, offices, sample reviews and photography, and wire the consultation form
to a backend before going live.
```
