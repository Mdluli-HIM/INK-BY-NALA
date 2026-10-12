"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SiteMenuOverlay from "@/components/layout/SiteMenuOverlay";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { headerNavigation, siteConfig } from "@/data/site";

const navLinks = headerNavigation.map((item) => ({
  ...item,
  label: item.label === "Main" ? "Main page" : item.label,
}));

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="ink-site-header fixed inset-x-0 top-0 z-[99990]">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
          <Link href="#hero" aria-label="INKED home">
            <Image
              src={siteConfig.logo}
              alt="INKED"
              width={110}
              height={110}
              priority
              className="h-auto w-[82px] object-contain sm:w-[90px] lg:w-[110px]"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex items-center gap-8 text-sm font-semibold">
              <Link
                href="#hero"
                className="transition-opacity hover:opacity-70"
              >
                Main
              </Link>

              <Link
                href="#about-team"
                className="transition-opacity hover:opacity-70"
              >
                About us
              </Link>

              <Link
                href="#pricing"
                className="transition-opacity hover:opacity-70"
              >
                Price
              </Link>

              <Link
                href="#portfolio"
                className="transition-opacity hover:opacity-70"
              >
                Gallery
              </Link>
            </nav>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-70"
              aria-label="Open menu"
            >
              <span>Menu</span>
              <span className="ink-menu-trigger-mark" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 text-sm font-semibold"
              aria-label="Open menu"
            >
              <span>Menu</span>
              <span className="ink-menu-trigger-mark" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <SiteMenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}

export { Header };
export default Header;
