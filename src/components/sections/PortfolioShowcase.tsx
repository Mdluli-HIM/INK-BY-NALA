import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { portfolioItems } from "@/data/gallery";

export function PortfolioShowcase() {
  return (
    <section
      id="portfolio"
      data-cursor-tone="light"
      className="portfolio-showcase"
    >
      <div className="hype-shell">
        <header className="portfolio-showcase__header">
          <div className="portfolio-showcase__eyebrow">
            <span className="portfolio-showcase__line" />

            <span>
              [ 004 ] / Selected work
            </span>

            <span className="portfolio-showcase__line" />
          </div>

          <h2>
            Explore our
            <br />
            extensive portfolio
          </h2>

          <p>
            A selection of original work created by HYPE artists
            across different styles, techniques and placements.
          </p>
        </header>

        <div className="portfolio-showcase__grid">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className={[
                "portfolio-work",
                `portfolio-work--${item.layout}`,
              ].join(" ")}
            >
              <Link
                href="/gallery"
                className="portfolio-work__link"
                aria-label={`View ${item.style} tattoo`}
              >
                <div
                  className="portfolio-work__image"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                <div className="portfolio-work__shade" />

                <div className="portfolio-work__meta">
                  <div>
                    <span>
                      [ {item.id} ]
                    </span>

                    <span>
                      {item.style}
                    </span>
                  </div>

                  <div>
                    <span>
                      {item.artist}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <footer className="portfolio-showcase__footer">
          <div>
            <span className="hype-label text-white/40">
              HYPE / Toronto
            </span>

            <p>
              Every project starts with an idea.
              <br />
              The result should belong to you.
            </p>
          </div>

          <Link
            href="/gallery"
            className="portfolio-showcase__cta"
          >
            <span>
              View full gallery
            </span>

            <span>
              <ArrowUpRight
                size={22}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
