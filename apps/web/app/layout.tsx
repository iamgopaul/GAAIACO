import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LiveBackground } from "@gaaia/ui/live-background";
import { PageSplash } from "@gaaia/ui/page-splash";
import { PageTransition } from "@gaaia/ui/page-transition";
import { SiteFooter } from "@gaaia/ui/site-footer";
import { SiteHeader } from "@gaaia/ui/site-header";
import { bebas, inter } from "./fonts";
import "./globals.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/labs", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://gaaia.co"),
  title: {
    default: "GAAIA · Global Autonomous Artificial Intelligence Agency",
    template: "%s · GAAIA",
  },
  description:
    "GAAIA builds autonomous intelligence systems: AI agents, software, and infrastructure for the next generation of intelligent products.",
  openGraph: {
    title: "GAAIA · Global Autonomous Artificial Intelligence Agency",
    description: "Autonomous intelligence systems.",
    url: "https://gaaia.co",
    siteName: "GAAIA",
    type: "website",
  },
  applicationName: "GAAIA",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GAAIA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  // Allow pinch-zoom for accessibility, but start at 1×.
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="flex min-h-screen flex-col bg-black font-sans text-zinc-200 antialiased">
        <LiveBackground />
        <PageSplash />
        <SiteHeader navItems={navItems} />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter siteLinks={navItems} />
      </body>
    </html>
  );
}
