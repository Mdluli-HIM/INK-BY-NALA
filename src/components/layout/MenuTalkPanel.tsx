import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

type TalkItem = {
  label: string;
  value: string;
  href?: string;
};

const cleanPhone = (value: string) => value.replace(/[^\d+]/g, "");

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;

const talkItems: TalkItem[] = [
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsapp,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${cleanPhone(siteConfig.phone)}`,
  },
  {
    label: "Address",
    value: siteConfig.address,
    href: mapHref,
  },
  {
    label: "Work time",
    value: siteConfig.hours.replace(/\s*[·•]\s*/g, "\n"),
  },
];

export default function MenuTalkPanel() {
  return (
    <div className="menu-talk-panel">
      <p className="menu-talk-panel__eyebrow">[ LET&apos;S TALK ]</p>

      <div className="menu-talk-panel__list">
        {talkItems.map((item) => {
          const content = (
            <>
              <span className="menu-talk-panel__label">{item.label}</span>

              <div className="menu-talk-panel__row">
                <span className="menu-talk-panel__value">{item.value}</span>

                <span
                  className={`menu-talk-panel__arrow${
                    item.href ? "" : " menu-talk-panel__arrow--muted"
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-7 w-7" strokeWidth={2.1} />
                </span>
              </div>
            </>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="menu-talk-panel__item"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={item.label} className="menu-talk-panel__item">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
