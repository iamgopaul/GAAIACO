"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades and lifts the page content into place as the curtain sweeps away.
 * Keyed on the pathname so it re-runs cleanly on every navigation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="gaaia-page-enter">
      {children}
    </div>
  );
}
