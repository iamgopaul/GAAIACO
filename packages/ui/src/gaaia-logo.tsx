"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

type Variant = "full" | "emblem";

const VARIANTS: Record<
  Variant,
  {
    base: string;
    size: number;
    coreLeft: string;
    coreTop: string;
    coreWidth: string;
    glow: number;
  }
> = {
  full: {
    base: "/gaaia-logo-base.png",
    size: 1254,
    coreLeft: "51.3%",
    coreTop: "38%",
    coreWidth: "11.5%",
    glow: 1.2,
  },
  emblem: {
    base: "/gaaia-emblem-base.png",
    size: 560,
    coreLeft: "52.7%",
    coreTop: "50.5%",
    coreWidth: "26%",
    glow: 0.5,
  },
};

type GaaiaLogoProps = {
  variant?: Variant;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function GaaiaLogo({
  variant = "full",
  className = "",
  alt = "GAAIA",
  priority = false,
}: GaaiaLogoProps) {
  const v = VARIANTS[variant];
  return (
    <div className={`relative ${className}`}>
      <Image
        src={v.base}
        alt={alt}
        width={v.size}
        height={v.size}
        priority={priority}
        className="h-full w-full"
      />
      <span
        aria-hidden
        className="gaaia-core pointer-events-none absolute block aspect-square -translate-x-1/2 -translate-y-1/2 animate-core-glow rounded-full"
        style={
          {
            left: v.coreLeft,
            top: v.coreTop,
            width: v.coreWidth,
            "--g": v.glow,
          } as CSSProperties
        }
      />
    </div>
  );
}
