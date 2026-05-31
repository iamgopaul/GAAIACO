# GAAIA Deploy Guide

The whole ecosystem runs from **one Next.js app** (`apps/web`) and **one Vercel project**. Subdomains are routed at the edge by `middleware.ts`, not by separate projects.

## How subdomain routing works

Every host arrives at the same `apps/web` build. `apps/web/middleware.ts` reads the `host` header and rewrites the URL to a path prefix that matches a folder under `app/`:

| Host | Rewritten internally to | Folder served |
|---|---|---|
| `gaaia.co/anything` | (unchanged) | `app/(main)/...` |
| `www.gaaia.co/anything` | (unchanged) | `app/(main)/...` |
| `ai.gaaia.co/about` | `/ai/about` | `app/ai/about/` |
| `apps.gaaia.co/` | `/apps` | `app/apps/` |
| `web.gaaia.co/pricing` | `/web-studio/pricing` | `app/web-studio/pricing/` |
| `agents.gaaia.co/...` | `/agents/...` | `app/agents/...` |
| `labs.gaaia.co/...` | `/labs/...` | `app/labs/...` |
| `api.gaaia.co/...` | `/api/...` | `app/api/...` |
| `cloud.gaaia.co/...` | `/cloud/...` | `app/cloud/...` |
| `cyber.gaaia.co/...` | `/cyber/...` | `app/cyber/...` |

The browser's URL stays clean (e.g. `ai.gaaia.co/about`). The rewrite is invisible to users.

## Vercel setup

You already have the `web` Vercel project, and every subdomain is already attached to it. **No reshuffling needed.** The next deploy of the `web` project will activate the new routing for all subdomains automatically.

If you ever need to add the project from scratch:

1. Vercel dashboard, **Add New, Project**.
2. Import `GAAIACO` from GitHub.
3. **Root Directory**: `apps/web`.
4. Framework: Next.js (auto-detected).
5. Build / output: defaults. The repo's `next.config.ts` already handles the local `.nosync` distDir vs. Vercel's `.next`.
6. Deploy.
7. **Settings, Domains**: add `gaaia.co`, `www.gaaia.co`, and every subdomain (apex + `www.<sub>`) you want to serve.

## Adding a new division

To add a future division (e.g. `data.gaaia.co`):

1. Create `apps/web/lib/divisions/data.ts` with the division's content (copy any existing division file as a template).
2. Create `apps/web/app/data/` and copy the page set from another division: `cp -R apps/web/app/ai/* apps/web/app/data/`.
3. Update the new layout's `import { division } from "@/lib/divisions/data"`.
4. Add the subdomain to `DIVISION_FOR_SUBDOMAIN` in `apps/web/middleware.ts`.
5. In Vercel, attach `data.gaaia.co` and `www.data.gaaia.co` to the `web` project.

## Local dev

`pnpm dev` runs the whole thing at `http://localhost:3000`. You see the main site by default; visit `localhost:3000/ai` (or `/apps`, `/web-studio`, etc.) to view a division as if you were on its subdomain. To test the actual subdomain rewrite locally, edit `/etc/hosts`:

```
127.0.0.1 ai.localhost apps.localhost web.localhost agents.localhost labs.localhost api.localhost cloud.localhost cyber.localhost
```

Then `http://ai.localhost:3000` triggers the middleware. The middleware ignores `*.localhost` by default for that path-based shortcut to keep working; remove that branch in `middleware.ts` if you'd rather force the subdomain form.
