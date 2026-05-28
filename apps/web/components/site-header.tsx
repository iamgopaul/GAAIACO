"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GaaiaLogo } from "@/components/gaaia-logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/labs", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

const HEADER_HEIGHT = 64; // h-16

export function SiteHeader() {
  // Transparent while the hero section is on screen (homepage). On other
  // pages — or once the user scrolls past the hero — the bar frosts up.
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        setScrolled(hero.getBoundingClientRect().bottom <= HEADER_HEIGHT);
      } else {
        setScrolled(window.scrollY > 16);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ease-out ${
        scrolled
          ? "border-zinc-800/80 bg-black/80 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <GaaiaLogo variant="emblem" alt="" priority className="h-9 w-9" />
          <Image
            src="/gaaia-wordmark.png"
            alt="GAAIA"
            width={1098}
            height={181}
            priority
            className="h-4 w-auto"
          />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-silver px-4 py-2 text-sm font-semibold text-black transition hover:bg-silver-bright"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
