"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";
import MenuTalkPanel from "@/components/layout/MenuTalkPanel";

type MenuLink = {
  label: string;
  href: string;
};

type SiteMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  links: MenuLink[];
};

function ActiveScribble() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 70"
      className="ink-menu__scribble"
      preserveAspectRatio="none"
    >
      {/* Main heavy stroke */}
      <path
        className="ink-menu__scribble-main"
        d="
          M8 25
          C72 20 132 23 197 22
          C270 21 338 25 405 23
          C447 22 482 24 512 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Second imperfect stroke */}
      <path
        className="ink-menu__scribble-secondary"
        d="
          M16 34
          C82 29 149 31 214 32
          C281 33 351 30 417 34
          C455 36 486 34 507 33
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Long loose lower stroke */}
      <path
        className="ink-menu__scribble-detail"
        d="
          M42 43
          C102 39 166 40 224 42
          C297 44 349 47 399 51
          C431 54 455 58 475 62
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteMenuOverlay({
  open,
  onClose,
  links,
}: SiteMenuOverlayProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          data-cursor-tone="dark"
          className="ink-menu"
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0% 0)",
          }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Artist cutout supplied by you */}
          <div
            aria-hidden="true"
            className="ink-menu__artist"
          >
            <img
              src="/images/menu/menu-artist.png"
              alt=""
            />
          </div>

          {/* Logo */}
          <Link
            href="#hero"
            onClick={onClose}
            aria-label="Ink By Nala home"
            className="ink-menu__logo"
          >
            <img
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
            />
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="ink-menu__close group"
          >
            <span className="ink-menu__close-bracket" />

            <span className="ink-menu__close-text">
              Close
            </span>

            <X
              className="ink-menu__close-icon transition-transform duration-300 group-hover:rotate-90"
              strokeWidth={2}
            />
          </button>

          {/* =====================================
              NAVIGATION
          ===================================== */}
          <nav
            aria-label="Main navigation"
            className="ink-menu__nav"
            onMouseLeave={() => setActiveIndex(0)}
          >
            {links.map((link, index) => {
              const active =
                activeIndex === index;

              return (
                <motion.div
                  key={`${link.label}-${link.href}`}
                  className="ink-menu__nav-row"
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.16 +
                      index * 0.045,
                    duration: 0.45,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                >

                  <Link
                    href={link.href}
                    onClick={onClose}
                    onFocus={() => setActiveIndex(index)}
                    className="ink-menu__link"
                  >
                    {active && (
                      <motion.span
                        layoutId="ink-menu-active"
                        className="ink-menu__active"
                        transition={{
                          type: "spring",
                          stiffness: 330,
                          damping: 30,
                        }}
                      >
                        <ActiveScribble />
                      </motion.span>
                    )}

                    <span>
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* =====================================
              RIGHT CONTACT DETAILS
          ===================================== */}
          <div className="ink-menu__contact">
            <span className="ink-menu__contact-kicker">
              [ Let&apos;s talk ]
            </span>

            <div className="ink-menu__contact-list">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="ink-menu__contact-item"
              >
                <small>
                  WhatsApp
                </small>

                <span>
                  {siteConfig.phone}
                </span>

                <ArrowUpRight />
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="ink-menu__contact-item"
              >
                <small>
                  Phone
                </small>

                <span>
                  {siteConfig.phone}
                </span>

                <ArrowUpRight />
              </a>

              <a
                href="https://maps.google.com/?q=1090+Burnett+Street+Hatfield+Pretoria"
                target="_blank"
                rel="noreferrer"
                className="ink-menu__contact-item ink-menu__contact-item--address"
              >
                <small>
                  Address
                </small>

                <span>
                  1090 Burnett Street,
                  <br />
                  Hatfield, Pretoria
                </span>

                <ArrowUpRight />
              </a>

              <div className="ink-menu__contact-item">
                <small>
                  Work time
                </small>

                <span>
                  Mon–Sat
                  <br />
                  Appointment only
                </span>
              </div>
            </div>
          </div>

          {/* =====================================
              BOTTOM LEFT
          ===================================== */}
          <div className="ink-menu__bottom-left">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="ink-menu__bottom-link"
            >
              <small>
                Instagram
              </small>

              <span>
                {siteConfig.instagramHandle}
              </span>

              <ArrowUpRight />
            </a>

            <span className="ink-menu__bottom-divider" />

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="ink-menu__bottom-link"
            >
              <small>
                Book a consultation
              </small>

              <span>
                Start here
              </span>

              <ArrowUpRight />
            </a>
          </div>

          {/* Copyright */}
          <p className="ink-menu__copyright">
            © Ink By Nala 2026
            <br />
            All rights reserved
          </p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default SiteMenuOverlay;
