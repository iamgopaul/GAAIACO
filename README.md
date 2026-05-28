# GAAIA

**Global Autonomous Artificial Intelligence Agency** — a multi-division technology
company. This is the Turborepo monorepo behind the GAAIA web ecosystem.

Today it contains the main company portal (`gaaia.co`). It is structured so that
each future subdomain — `ai.`, `apps.`, `web.`, `cloud.`, `labs.`, `docs.`, `api.`,
`agents.` — can be added later as its own app with no restructuring.

## Stack

- **Turborepo** + **pnpm workspaces** — monorepo tooling
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- Deploys to **Vercel**; DNS via **Cloudflare**

## Structure

```
.
├── apps/
│   └── web/                 # gaaia.co — the main company portal
├── packages/
│   ├── ui/                  # shared React components (@gaaia/ui)
│   ├── eslint-config/       # shared ESLint flat config (@gaaia/eslint-config)
│   └── typescript-config/   # shared tsconfig presets (@gaaia/typescript-config)
├── turbo.json
└── pnpm-workspace.yaml
```

## Getting started

Requires Node 20 (see `.nvmrc`) and pnpm.

```bash
pnpm install      # install all workspace dependencies
pnpm dev          # run apps/web at http://localhost:3000
pnpm build        # production build of every app
pnpm lint         # lint every package
```

## Adding a new division

Each subdomain is a separate app in the same monorepo:

1. Create `apps/<name>/` (e.g. `apps/ai`) — copy `apps/web` as a starting point.
2. Reuse shared code via `@gaaia/ui`, `@gaaia/eslint-config`, and
   `@gaaia/typescript-config` (already wired through pnpm workspaces).
3. Run `pnpm install` so the workspace picks up the new app.
4. In Vercel, create a **separate project** with **root directory `apps/<name>`**.
5. In Cloudflare, add a `CNAME` record for `<name>.gaaia.co` pointing at Vercel.

No changes to existing apps are required.

## Deploying to Vercel

The app is configured to deploy on Vercel out of the box.

1. **Import the repo** at [vercel.com/new](https://vercel.com/new) (connect the
   Git repository).
2. **Set the Root Directory to `apps/web`** (Project Settings → General → Root
   Directory). This is the only required setting — Vercel then auto-detects
   Next.js, pnpm, and the Turborepo workspace, and installs the shared
   `packages/*` from the monorepo root automatically.
3. Leave the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `pnpm build` (runs `next build --turbopack`)
   - **Install Command:** `pnpm install`
   - **Output Directory:** `.next` (default)
4. **Deploy.** No environment variables are required.

> **Why the build "just works":** [`apps/web/next.config.ts`](apps/web/next.config.ts)
> only redirects the build output to a `.nosync` folder **locally** (a
> workaround for this repo living in an iCloud-synced `~/Desktop`). On Vercel
> the `VERCEL` env var is set, so it uses the standard `.next` output that the
> platform expects.

### DNS

Cloudflare manages `gaaia.co`. Point the apex and `www` records at Vercel; add
one `CNAME` per subdomain as new divisions launch.

### Adding a division to Vercel

Each new `apps/<name>` deploys as its **own** Vercel project with Root Directory
`apps/<name>`, then add a `CNAME` for `<name>.gaaia.co`.

## Roadmap

- [x] `gaaia.co` — main company portal
- [ ] `ai.gaaia.co` — GAAIA Core (agents, multimodal, LLMs)
- [ ] `apps.gaaia.co` — product launcher
- [ ] `web.gaaia.co` — Web Studio (client engineering)
- [ ] `labs.gaaia.co` — research & experiments
- [ ] `api.gaaia.co`, `cloud.gaaia.co`, `agents.gaaia.co`, `docs.gaaia.co`
