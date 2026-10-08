"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteMenuOverlay from "@/components/layout/SiteMenuOverlay";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Main page", href: "#hero" },
  { label: "About us", href: "#about-team" },
  { label: "Artists", href: "#about-team" },
  { label: "Price", href: "#pricing" },
  { label: "Gallery", href: "#portfolio" },
  { label: "Contact", href: "#consultation" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="ink-site-header fixed inset-x-0 top-0 z-[80]">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
          <Link href="#hero" aria-label="Ink By Nala Tattoos home">
            <Image
              src={siteConfig.logo}
              alt="Ink By Nala Tattoos"
              width={110}
              height={110}
              priority
              className="h-auto w-[82px] object-contain sm:w-[90px] lg:w-[110px]"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8 text-sm font-semibold text-white">
              <Link href="#hero" className="transition-opacity hover:opacity-70">
                Main
              </Link>
              <Link href="#about-team" className="transition-opacity hover:opacity-70">
                About us
              </Link>
              <Link href="#pricing" className="transition-opacity hover:opacity-70">
                Price
              </Link>
              <Link href="#portfolio" className="transition-opacity hover:opacity-70">
                Gallery
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 text-sm font-semibold text-white transition-opacity hover:opacity-70"
              aria-label="Open menu"
            >
              <span>Menu</span>
              <span className="ink-menu-trigger-mark" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-3 text-sm font-semibold text-white lg:hidden"
            aria-label="Open menu"
          >
            <span>Menu</span>
            <span className="ink-menu-trigger-mark" aria-hidden="true" />
          </button>
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
