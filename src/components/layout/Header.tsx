"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  headerNavigation,
  mainNavigation,
  siteConfig,
} from "@/data/site";

import { RadialMark } from "@/components/ui/RadialMark";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        data-cursor-tone="light"
        className="absolute inset-x-0 top-0 z-50 text-white"
      >
        <div className="hype-shell flex h-[92px] items-center justify-between md:h-[112px]">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="HYPE Tattoo home"
            className="hype-site-logo relative z-50"
          >
            <img
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              className="hype-site-logo__image"
            />
          </Link>

          <div className="flex items-center gap-8 lg:gap-12">
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-10 lg:flex"
            >
              {headerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[12px] font-semibold transition-colors duration-300 hover:text-hype-cyan"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-3"
            >
              <span className="text-[12px] font-semibold">
                Menu
              </span>

              <RadialMark className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Invisible left-side close target */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="hype-menu-backdrop"
            />

            <motion.aside
              data-cursor-tone="dark"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.72,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="hype-menu-panel"
            >
              <div className="hype-menu-panel__inner">
                <div className="hype-menu-panel__top">
                  <span className="hype-menu-panel__label">
                    [ Menu ]
                  </span>

                  <button
                    type="button"
                    onClick={closeMenu}
                    className="hype-menu-panel__close group"
                    aria-label="Close menu"
                  >
                    <span>
                      Close
                    </span>

                    <RadialMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-45" />
                  </button>
                </div>

                <nav
                  aria-label="Menu navigation"
                  className="hype-menu-panel__nav"
                >
                  {mainNavigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: 45,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.48,
                        delay: 0.16 + index * 0.055,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="hype-menu-panel__link"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="hype-menu-panel__bottom">
                  <div className="hype-menu-panel__contact">
                    <span>
                      [ Get in touch ]
                    </span>

                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp {siteConfig.phone}
                    </a>
                  </div>

                  <p className="hype-menu-panel__copyright">
                    © INK BY NALA 2026
                    <br />
                    All rights reserved
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
