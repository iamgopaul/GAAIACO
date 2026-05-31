import Link from "next/link";
import { Container } from "./container";
import { divisions } from "./divisions";

export type FooterLink = { href: string; label: string };

type SiteFooterProps = {
  /** Brand / division name shown in the brand column (e.g. "GAAIA", "GAAIA AI"). */
  brand?: string;
  /** Tagline under the brand. */
  tagline?: string;
  /** Internal site links (typically the same as the header nav). */
  siteLinks: FooterLink[];
  /** Heading for the site-links column. Defaults to "Company". */
  siteLinksLabel?: string;
};

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
      {children}
    </p>
  );
}

export function SiteFooter({
  brand = "GAAIA",
  tagline = "Global Autonomous Artificial Intelligence Agency",
  siteLinks,
  siteLinksLabel = "Company",
}: SiteFooterProps) {
  return (
    <footer className="bg-black">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold tracking-tight text-white">
              {brand}
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">{tagline}</p>
            <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-silver" />
              Operating
            </p>
          </div>

          <div>
            <ColumnLabel>Ecosystem</ColumnLabel>
            <ul className="mt-6 space-y-3">
              {divisions.map((d) => (
                <li key={d.domain}>
                  <a
                    href={`https://${d.domain}`}
                    className="flex items-center justify-between gap-3 text-sm text-zinc-300 transition-colors hover:text-silver"
                  >
                    <span>{d.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                      Soon
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnLabel>{siteLinksLabel}</ColumnLabel>
            <ul className="mt-6 space-y-3">
              {siteLinks.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnLabel>Meta</ColumnLabel>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>
                <span className="text-zinc-500">Established</span>{" "}
                <span className="font-mono tabular-nums text-zinc-300">
                  2026
                </span>
              </li>
              <li>
                <span className="text-zinc-500">Coverage</span>{" "}
                <span className="text-zinc-300">Global</span>
              </li>
              <li>
                <a
                  href="mailto:gaaia.team@gmail.com"
                  className="font-mono text-silver hover:text-silver-bright"
                >
                  gaaia.team@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17542819617"
                  className="font-mono text-silver hover:text-silver-bright"
                >
                  +1 (754) 281-9617
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} GAAIA. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            v1.0 · Silver / Black
          </p>
        </div>
      </Container>
    </footer>
  );
}
