import { NextResponse, type NextRequest } from "next/server";

/**
 * Subdomain routing for the GAAIA ecosystem.
 *
 * One Next.js app serves every subdomain. The middleware inspects the host
 * header and rewrites the URL to a path prefix matching the division folder
 * under `app/`. The browser URL stays clean (ai.gaaia.co/about), while the
 * server serves `/ai/about` internally.
 *
 *   ai.gaaia.co/about          ->  /ai/about
 *   apps.gaaia.co              ->  /apps
 *   web.gaaia.co/pricing       ->  /web-studio/pricing   (note name remap)
 *   gaaia.co/anything          ->  unchanged
 *   www.gaaia.co/anything      ->  unchanged
 *   localhost:3000/anything    ->  unchanged
 */

// Subdomain (as seen in the host header) -> folder name under app/.
// Most divisions match directly; `web` -> `web-studio` is the only remap.
const DIVISION_FOR_SUBDOMAIN: Record<string, string> = {
  ai: "ai",
  apps: "apps",
  web: "web-studio",
  agents: "agents",
  labs: "labs",
  api: "api",
  cloud: "cloud",
  cyber: "cyber",
};

const ROOT_HOSTS = new Set(["gaaia.co", "www.gaaia.co"]);

function getSubdomain(host: string): string | null {
  // Strip the port if present.
  const bare = host.split(":")[0]?.toLowerCase() ?? "";
  if (!bare) return null;
  if (ROOT_HOSTS.has(bare)) return null;
  if (bare === "localhost" || bare.endsWith(".localhost")) return null;
  if (!bare.endsWith(".gaaia.co")) return null;

  // Drop a leading "www." since both <name>.gaaia.co and www.<name>.gaaia.co
  // should resolve to the same division.
  const withoutGaaia = bare.slice(0, -".gaaia.co".length);
  const parts = withoutGaaia.split(".").filter((p) => p && p !== "www");
  // Use the leftmost remaining label as the subdomain (e.g. "ai" from "ai" or
  // "www.ai").
  return parts[0] ?? null;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const subdomain = getSubdomain(host);
  if (!subdomain) return NextResponse.next();

  const division = DIVISION_FOR_SUBDOMAIN[subdomain];
  if (!division) return NextResponse.next();

  const url = request.nextUrl.clone();

  // Already at the right prefix (e.g. internal redirect loop guard): bail.
  if (
    url.pathname === `/${division}` ||
    url.pathname.startsWith(`/${division}/`)
  ) {
    return NextResponse.next();
  }

  url.pathname = `/${division}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals + static assets + metadata routes; rewrite everything else.
  matcher: [
    "/((?!_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|icon|apple-icon|manifest|.*\\.).*)",
  ],
};
