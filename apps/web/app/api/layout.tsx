import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageSplash } from "@gaaia/ui/page-splash";
import { SiteFooter } from "@gaaia/ui/site-footer";
import { SiteHeader } from "@gaaia/ui/site-header";
import { division } from "@/lib/divisions/api";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: {
    default: `${division.brand} · ${division.tagline}`,
    template: `%s · ${division.brand}`,
  },
  description: division.description,
  openGraph: {
    title: `${division.brand} · ${division.tagline}`,
    description: division.description,
    url: `https://${division.domain}`,
    siteName: division.brand,
    type: "website",
  },
  applicationName: division.brand,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: division.brand,
  },
};

export default function DivisionLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageSplash
        welcomeName={division.brand}
        tagline="A division of GAAIA"
        mission={division.tagline}
      />
      <SiteHeader navItems={navItems} wordmark={division.short} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        brand={division.brand}
        tagline={division.description}
        siteLinks={navItems}
      />
    </>
  );
}
