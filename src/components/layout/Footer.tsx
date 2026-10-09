import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  headerNavigation,
  siteConfig,
} from "@/data/site";

export function Footer() {
  const phoneHref = siteConfig.phone.replace(/[^\d+]/g, "");

  return (
    <footer
      data-cursor-tone="dark"
      className="hype-footer-v2"
    >
      <div className="hype-shell hype-footer-v2__inner">
        {/* ==================================================
            LEFT
        ================================================== */}
        <div className="hype-footer-v2__left">
          <div className="hype-footer-v2__brand-word">
            <span className="hype-footer-v2__corner" />

            <strong>
              INK
            </strong>
          </div>

          <div className="hype-footer-v2__email">
            <div className="hype-footer-v2__micro-heading">
              <span>
                Let&apos;s talk
              </span>

              <span />
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp {siteConfig.phone}
            </a>
          </div>

          <div className="hype-footer-v2__contact-row">
            <div className="hype-footer-v2__contact-item">
              <div className="hype-footer-v2__micro-heading">
                <span>
                  Phone
                </span>

                <span />
              </div>

              <a href={`tel:${phoneHref}`}>
                {siteConfig.phone}
              </a>
            </div>

            <div className="hype-footer-v2__contact-divider" />

            <div className="hype-footer-v2__contact-item">
              <div className="hype-footer-v2__micro-heading">
                <span>
                  Work time
                </span>

                <span />
              </div>

              <p>
                {siteConfig.hours}
              </p>
            </div>
          </div>

          <div className="hype-footer-v2__address">
            <div className="hype-footer-v2__micro-heading">
              <span>
                Address
              </span>

              <span />
            </div>

            <p>
              {siteConfig.address}
            </p>
          </div>
        </div>

        {/* ==================================================
            CENTER LOGO / ART MARK
        ================================================== */}
        <div className="hype-footer-v2__art">
          <img
            src={siteConfig.logo}
            alt={siteConfig.logoAlt}
            className="hype-footer-v2__art-image"
          />
        </div>

        {/* ==================================================
            RIGHT
        ================================================== */}
        <div className="hype-footer-v2__right">
          <div>
            <div className="hype-footer-v2__menu-heading">
              <span>
                Menu
              </span>

              <span />
            </div>

            <nav
              aria-label="Footer navigation"
              className="hype-footer-v2__menu"
            >
              {headerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.label === "Main"
                    ? "Main page"
                    : item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="#consultation"
            className="hype-footer-v2__consult group"
          >
            <span>
              Start your tattoo
            </span>

            <span>
              <ArrowUpRight
                size={27}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </Link>
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}
        <div className="hype-footer-v2__bottom">
          <div
            aria-hidden="true"
            className="hype-footer-v2__rule"
          >
            <span />
            <b>{"//"}</b>
            <span />
          </div>

          <p>
            © INK BY NALA 2026
            <br />
            All rights reserved
            <span className="concept-credit">
              Independent website concept by{" "}
              <a
                href="https://thingsdesign.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Things
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
