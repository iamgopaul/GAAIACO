import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LiveBackground } from "@gaaia/ui/live-background";
import { PageSplash } from "@gaaia/ui/page-splash";
import { PageTransition } from "@gaaia/ui/page-transition";
import { SiteFooter } from "@gaaia/ui/site-footer";
import { SiteHeader } from "@gaaia/ui/site-header";
import { division } from "@/lib/division";
import { bebas, inter } from "./fonts";
import "./globals.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  metadataBase: new URL(`https://${division.domain}`),
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

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="flex min-h-screen flex-col bg-black font-sans text-zinc-200 antialiased">
        <LiveBackground />
        <PageSplash
          welcomeName={division.brand}
          tagline="A division of GAAIA"
          mission={division.tagline}
        />
        <SiteHeader navItems={navItems} wordmark={division.short} />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter
          brand={division.brand}
          tagline={division.description}
          siteLinks={navItems}
        />
      </body>
    </html>
  );
}
