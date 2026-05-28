import Link from "next/link";
import { Container } from "@gaaia/ui/container";
import { divisions } from "@/lib/divisions";

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/labs", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-base font-bold tracking-tight text-white">
              GAAIA
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Global Autonomous Artificial Intelligence Agency
            </p>
            <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-silver" />
              Operating
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <ColumnLabel>Ecosystem</ColumnLabel>
            <ul className="mt-6 space-y-3">
              {divisions.map((d) => (
                <li
                  key={d.domain}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="text-zinc-300">{d.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <ColumnLabel>Company</ColumnLabel>
            <ul className="mt-6 space-y-3">
              {company.map((c) => (
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

          {/* Meta */}
          <div>
            <ColumnLabel>Meta</ColumnLabel>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>
                <span className="text-zinc-500">Established</span>{" "}
                <span className="font-mono tabular-nums text-zinc-300">2026</span>
              </li>
              <li>
                <span className="text-zinc-500">Coverage</span>{" "}
                <span className="text-zinc-300">Global</span>
              </li>
              <li>
                <a
                  href="mailto:hello@gaaia.co"
                  className="font-mono text-silver hover:text-silver-bright"
                >
                  hello@gaaia.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
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
