"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";
import MenuTalkPanel from "@/components/layout/MenuTalkPanel";

type MenuLink = {
  index: string;
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
      viewBox="0 0 500 118"
      className="ink-menu__scribble"
      preserveAspectRatio="none"
    >
      <path
        className="ink-menu__scribble-main"
        d="
          M18 66
          C22 32 77 17 154 18
          C253 12 382 17 451 35
          C486 44 489 67 459 85
          C414 108 291 105 190 102
          C91 106 30 96 17 77
          C12 72 12 68 18 66
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="ink-menu__scribble-secondary"
        d="
          M37 26
          C135 4 302 12 455 35
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        className="ink-menu__scribble-secondary"
        d="
          M28 100
          C148 112 320 107 467 88
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <path
        className="ink-menu__scribble-detail"
        d="
          M71 17
          C121 12 176 13 221 16
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
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
                  key={`${link.index}-${link.href}`}
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
                  <span className="ink-menu__number">
                    [ {link.index} ]
                  </span>

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
