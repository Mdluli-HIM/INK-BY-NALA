"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function StoryFeature() {
  const sectionRef = useRef<HTMLElement>(null);
  const threadRef = useRef<HTMLSpanElement>(null);
  const dropRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const thread = threadRef.current;
      const drop = dropRef.current;

      if (!section || !thread || !drop) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      if (reducedMotion.matches) {
        return;
      }

      gsap.set(thread, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top center",
      });

      gsap.set(drop, {
        y: -2,
        opacity: 0,
        scaleX: 0.7,
        scaleY: 0.7,
        transformOrigin: "center top",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          end: "bottom 38%",
          scrub: 0.65,
        },
      });

      /*
       * Ink gathers at the needle.
       */
      timeline.to(thread, {
        scaleY: 1,
        opacity: 0.82,
        duration: 0.2,
        ease: "none",
      });

      timeline.to(
        drop,
        {
          opacity: 1,
          y: 3,
          scaleX: 0.92,
          scaleY: 1.15,
          duration: 0.17,
          ease: "none",
        },
        "<0.05",
      );

      /*
       * Drop stretches away from the tip.
       */
      timeline.to(drop, {
        y: 18,
        scaleX: 0.82,
        scaleY: 1.45,
        duration: 0.25,
        ease: "none",
      });

      timeline.to(
        thread,
        {
          scaleY: 0.25,
          opacity: 0.3,
          duration: 0.18,
          ease: "none",
        },
        "<0.08",
      );

      /*
       * Ink releases and falls.
       */
      timeline.to(drop, {
        y: 42,
        scaleX: 0.72,
        scaleY: 1.08,
        opacity: 0,
        duration: 0.28,
        ease: "none",
      });

      timeline.to(
        thread,
        {
          opacity: 0,
          scaleY: 0,
          duration: 0.16,
          ease: "none",
        },
        "<0.08",
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="story"
      data-cursor-tone="dark"
      className="story-feature"
    >
      <div
        className="story-feature__grid-lines"
        aria-hidden="true"
      />

      <div className="hype-shell story-feature__inner">
        <div className="story-feature__eyebrow">
          

          <span className="story-feature__eyebrow-line" />

          <span>
            Meaning / Detail / Ink
          </span>
        </div>

        <div className="story-feature__left">
          <h2>
            Every
            <br />
            mark
            <br />
            tells a
            <br />
            story.
          </h2>

          <div className="story-feature__intro">
            <p>
              Custom tattooing built around meaning,
              detail and personal expression.
            </p>

            <Link
              href="/gallery"
              className="story-feature__cta group"
            >
              <span>
                View portfolio
              </span>

              <span>
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="story-feature__object">
          <div className="story-feature__hanger-line" />

          <img
            src="/images/story/feature-object.png"
            alt=""
            className="story-feature__object-image"
          />

          {/* Scroll-driven ink drip */}
          <div
            aria-hidden="true"
            className="story-feature__ink"
          >
            <span
              ref={threadRef}
              className="story-feature__ink-thread"
            />

            <span
              ref={dropRef}
              className="story-feature__ink-drop"
            />
          </div>

          <span className="story-feature__object-label">
            [ Original artwork ]
          </span>
        </div>

        <div className="story-feature__right">
          <div className="story-feature__right-line" />

          <p>
            Some are
            <br />
            lived.
            <br />
            Some are
            <br />
            inked.
          </p>

          <span>
            Your reference.
            <br />
            Your story.
            <br />
            Your tattoo.
          </span>
        </div>
      </div>
    </section>
  );
}
