import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  pricingPackages,
  type PricingPackage,
} from "@/data/pricing";

function PricingCard({
  item,
}: {
  item: PricingPackage;
}) {
  const cursorTone =
    item.theme === "dark"
      ? "light"
      : "dark";

  return (
    <article
      data-cursor-tone={cursorTone}
      className={[
        "pricing-card",
        `pricing-card--${item.theme}`,
      ].join(" ")}
    >
      {item.featured && (
        <div className="pricing-card__featured">
          Most popular
        </div>
      )}

      <div className="pricing-card__image-wrap">
        <div
          className="pricing-card__image"
          style={{
            backgroundImage: `url('${item.image}')`,
          }}
        />

        <div className="pricing-card__image-index">
          <span>{item.id}</span>
          <span />
        </div>

        <h3 className="pricing-card__image-name">
          {item.name}
        </h3>
      </div>

      <div className="pricing-card__content">
        <div>
          <h3 className="pricing-card__title">
            {item.name}
          </h3>

          <span className="pricing-card__dash" />

          <p className="pricing-card__description">
            {item.description}
          </p>
        </div>

        <strong className="pricing-card__price">
          {item.price}
        </strong>

        <Link
          href="/contact"
          className="pricing-card__button group"
        >
          <span>
            Get a quote
          </span>

          <span className="pricing-card__button-arrow">
            <ArrowRight
              size={25}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>

        <div className="pricing-card__footer">
          <span>
            [{item.id.padStart(3, "0")}]
          </span>

          <span>
            [choose]
          </span>
        </div>
      </div>
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      data-cursor-tone="dark"
      className="pricing-section"
    >
      <div className="hype-shell">
        <header className="pricing-section__header">
          <div className="pricing-section__heading">
            <div className="pricing-section__eyebrow">
              <span />
              <p>
                Our packages
              </p>
            </div>

            <h2>
              How does pricing
              <br />
              work with us
            </h2>
          </div>

          <aside className="pricing-section__aside">
            <div className="pricing-section__aside-line" />

            <p>
              Every piece is custom.
              <br />
              Pricing depends on
              <br />
              size, detail and
              <br />
              session length.
            </p>

            <span className="pricing-section__cyan-line" />
          </aside>
        </header>

        <div className="pricing-section__grid">
          {pricingPackages.map((item) => (
            <PricingCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
