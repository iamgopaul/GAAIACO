import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LiveBackground } from "@/components/live-background";
import { PageSplash } from "@/components/page-splash";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bebas, inter } from "./fonts";
import "./globals.css";

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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="flex min-h-screen flex-col bg-black font-sans text-zinc-200 antialiased">
        <LiveBackground />
        <PageSplash />
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
