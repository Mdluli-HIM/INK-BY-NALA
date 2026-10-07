"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { RadialMark } from "@/components/ui/RadialMark";

type TeamStat = {
  index: string;
  value: string;
  description: string;
  image: string;
  rotation: number;
  imagePosition?: string;
};

const stats: TeamStat[] = [
  {
    index: "A",
    value: "6+ YRS",
    description: "experience in the chair",
    image: "/images/about/stats/stat-a.jpg",
    rotation: -8,
    imagePosition: "center",
  },
  {
    index: "B",
    value: "CUSTOM",
    description: "original designs built around your idea",
    image: "/images/about/stats/stat-b.jpg",
    rotation: 4,
    imagePosition: "center",
  },
  {
    index: "C",
    value: "4.9★",
    description: "strong customer reputation",
    image: "/images/about/stats/stat-c.jpg",
    rotation: 7,
    imagePosition: "center",
  },
  {
    index: "D",
    value: "2",
    description: "artists — Moh & Eugene",
    image: "/images/about/stats/stat-d.jpg",
    rotation: -5,
    imagePosition: "center",
  },
];

/* ==================================================
   DESKTOP COLUMN
================================================== */

function DesktopStatColumn({
  stat,
}: {
  stat: TeamStat;
}) {
  const columnRef =
    useRef<HTMLDivElement>(null);

  const [active, setActive] =
    useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 250,
    damping: 28,
    mass: 0.35,
  });

  const y = useSpring(rawY, {
    stiffness: 250,
    damping: 28,
    mass: 0.35,
  });

  function updatePointer(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (
      event.pointerType === "touch"
    ) {
      return;
    }

    const column =
      columnRef.current;

    if (!column) {
      return;
    }

    const rect =
      column.getBoundingClientRect();

    rawX.set(
      event.clientX -
        rect.left,
    );

    rawY.set(
      event.clientY -
        rect.top,
    );
  }

  function handlePointerEnter(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (
      event.pointerType === "touch"
    ) {
      return;
    }

    updatePointer(event);
    setActive(true);
  }

  return (
    <div
      ref={columnRef}
      onPointerEnter={
        handlePointerEnter
      }
      onPointerMove={
        updatePointer
      }
      onPointerLeave={() =>
        setActive(false)
      }
      className="team-stat-desktop-column"
    >
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          opacity:
            active ? 1 : 0,

          scale:
            active
              ? 1
              : 0.92,
        }}
        transition={{
          opacity: {
            duration: 0.18,
          },

          scale: {
            duration: 0.35,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          },
        }}
        style={{
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
          rotate:
            stat.rotation,
        }}
        className="team-stat-hover-image"
      >
        <div
          className="team-stat-hover-image__photo"
          style={{
            backgroundImage:
              `url('${stat.image}')`,

            backgroundPosition:
              stat.imagePosition,
          }}
        />
      </motion.div>

      <div className="team-stat-desktop-content">
        <span className="team-stat-letter">
          {stat.index}
        </span>

        <div className="team-stat-copy">
          <strong>
            {stat.value}
          </strong>

          <p>
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==================================================
   MOBILE BLOCKS
================================================== */

function MobileStatText({
  stat,
}: {
  stat: TeamStat;
}) {
  return (
    <div className="team-stat-mobile__text">
      <span className="team-stat-letter">
        {stat.index}
      </span>

      <div>
        <strong>
          {stat.value}
        </strong>

        <p>
          {stat.description}
        </p>
      </div>
    </div>
  );
}

function MobileStatImage({
  stat,
  showMark = false,
}: {
  stat: TeamStat;
  showMark?: boolean;
}) {
  return (
    <div className="team-stat-mobile__image-wrap">
      <div
        className="team-stat-mobile__image"
        style={{
          backgroundImage:
            `url('${stat.image}')`,

          backgroundPosition:
            stat.imagePosition,
        }}
      />

      {showMark && (
        <RadialMark className="team-stat-mobile__mark" />
      )}
    </div>
  );
}

export function TeamStats() {
  return (
    <section
      data-cursor-tone="dark"
      className="team-stats"
    >
      {/* DESKTOP */}
      <div className="team-stats__desktop hype-shell">
        <div className="team-stats__desktop-grid">
          {stats.map(
            (stat) => (
              <DesktopStatColumn
                key={
                  stat.index
                }
                stat={stat}
              />
            ),
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="team-stats__mobile">
        <div className="team-stat-mobile__row">
          <MobileStatText
            stat={stats[0]}
          />

          <MobileStatImage
            stat={stats[0]}
            showMark
          />
        </div>

        <div className="team-stat-mobile__row">
          <MobileStatImage
            stat={stats[1]}
          />

          <MobileStatText
            stat={stats[1]}
          />
        </div>

        <div className="team-stat-mobile__row">
          <MobileStatText
            stat={stats[2]}
          />

          <MobileStatImage
            stat={stats[2]}
            showMark
          />
        </div>

        <div className="team-stat-mobile__row">
          <MobileStatImage
            stat={stats[3]}
          />

          <MobileStatText
            stat={stats[3]}
          />
        </div>
      </div>

      <div className="team-stats__end-line" />
    </section>
  );
}
