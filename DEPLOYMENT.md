# Deployment — TAAF website

This site is a **Next.js 16 (App Router)** application deployed to **Cloudflare
Workers** via the **OpenNext** Cloudflare adapter. Git is the source of truth:
a push to `main` builds and deploys automatically.

## Stack & required config (already in this repo)

| File | Purpose |
|---|---|
| `wrangler.jsonc` | Worker name, `compatibility_date`, `nodejs_compat`, `main: .open-next/worker.js`, `ASSETS` binding, observability |
| `open-next.config.ts` | `export default defineCloudflareConfig()` |
| `next.config.ts` | calls `initOpenNextCloudflareForDev()` (dev-only no-op) |
| `package.json` | `cf:build`, `cf:preview`, `cf:deploy`, `cf:typegen` scripts |
| `.gitignore` | ignores `/.open-next/`, `/.wrangler/`, `.dev.vars` |

Dev dependencies: `@opennextjs/cloudflare`, `wrangler`.

## First-time deploy (Workers Builds — recommended)

1. Cloudflare dashboard → **Workers & Pages → Create → Workers → Import a repository**.
2. **Authorize GitHub** and select this repository (least access).
3. Build settings:
   - **Build command:** `npx opennextjs-cloudflare build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** repo root (`/`)
4. **Save & Deploy**, then open the generated `…workers.dev` URL and verify:
   pages render, navigation works, images and logo load, the booking form posts.
5. Every push to `main` now auto-deploys; pull requests get preview URLs.

## CLI deploy (alternative — build on Linux/macOS/WSL)

```bash
npx wrangler login      # one-time browser auth
npm run cf:deploy       # opennextjs-cloudflare build && wrangler deploy
```

> **Build on Linux/macOS/WSL.** The OpenNext build is not fully supported on
> Windows; use Workers Builds (Linux CI) or WSL for production builds.

## Custom domain

1. Add the domain as a Cloudflare zone (Free plan) and point the registrar's
   nameservers at Cloudflare; wait for **Active**.
2. Worker → **Settings → Domains & Routes → Add Custom Domain** → add the apex
   and `www`. DNS + SSL are provisioned automatically.
3. Set **SSL/TLS → Full (Strict)** and enable **Always Use HTTPS**.

## Rollback

- **Dashboard:** Worker → **Deployments** → select last good version → **Rollback**.
- **CLI:** `npx wrangler deployments list` → `npx wrangler rollback <version-id>`.
- **Git:** revert the commit and push; CI redeploys.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Next.js production build (verifies the app compiles)
```

## Security checklist (per domain, ~5 min)

- [ ] SSL/TLS → **Full (Strict)**, **Always Use HTTPS** on
- [ ] WAF managed ruleset + **Bot Fight Mode** on
- [ ] Rate limit on the form/lead endpoint once a backend is wired
- [ ] 2FA on the hosting account; least-privilege access

## Pre-launch reminders

See `docs/03-ROADMAP.md` for the full checklist. Key items: confirm/replace the
flagged placeholder stats, offices, sample reviews and photography, and wire the
consultation form to a backend before going live.
```
