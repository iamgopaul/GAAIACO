import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LiveBackground } from "@gaaia/ui/live-background";
import { PageTransition } from "@gaaia/ui/page-transition";
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
  applicationName: "GAAIA",
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
