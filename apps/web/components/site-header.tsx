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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const frosted = scrolled || menuOpen;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ease-out ${
        frosted
          ? "border-zinc-800/80 bg-black/80 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
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

        {/* Desktop nav */}
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

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-silver px-4 py-2 text-sm font-semibold text-black transition hover:bg-silver-bright md:inline-flex"
          >
            Get in touch
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-zinc-200 transition hover:text-white md:hidden"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-zinc-800/80 bg-black/95 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-zinc-200 transition hover:bg-zinc-900/60 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-silver px-4 py-3 text-sm font-semibold text-black transition hover:bg-silver-bright"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
