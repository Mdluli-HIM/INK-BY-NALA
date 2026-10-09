import { ArrowUpRight } from "lucide-react";

import { portfolioItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";

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
              Selected work
            </span>

            <span className="portfolio-showcase__line" />
          </div>

          <h2>
            Explore our
            <br />
            extensive portfolio
          </h2>

          <p>
            A selection of original work created by Ink By Nala
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
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="portfolio-work__link"
                aria-label={`View ${item.style} tattoo ${item.id} by ${item.artist} (opens image in a new tab)`}
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
              </a>
            </article>
          ))}
        </div>

        <footer className="portfolio-showcase__footer">
          <div>
            <span className="hype-label text-white/40">
              INK by Nala / Hatfield, Pretoria
            </span>

            <p>
              Every project starts with an idea.
              <br />
              The result should belong to you.
            </p>
          </div>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="portfolio-showcase__cta"
            aria-label="More work on Instagram (opens in a new tab)"
          >
            <span>
              More work on Instagram
            </span>

            <span>
              <ArrowUpRight
                size={22}
                strokeWidth={1.8}
              />
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
}
