import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageSplash } from "@gaaia/ui/page-splash";
import { SiteFooter } from "@gaaia/ui/site-footer";
import { SiteHeader } from "@gaaia/ui/site-header";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "https://labs.gaaia.co", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  openGraph: {
    title: "GAAIA · Global Autonomous Artificial Intelligence Agency",
    description: "Autonomous intelligence systems.",
    url: "https://gaaia.co",
    siteName: "GAAIA",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GAAIA",
  },
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageSplash />
      <SiteHeader navItems={navItems} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteLinks={navItems} />
    </>
  );
}
