"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useRef,
  useState,
  type MouseEvent,
} from "react";

type Stat = {
  label: string;
  value: string;
  description: string;
  image: string;
  rotation: number;
};

const stats: Stat[] = [
  {
    label: "A",
    value: "8+ YRS",
    description: "tattooing experience",
    image: "/images/about/stats/stat-a.jpg",
    rotation: -4,
  },
  {
    label: "B",
    value: "CUSTOM",
    description: "every piece designed for the client",
    image: "/images/about/stats/stat-b.jpg",
    rotation: 3,
  },
  {
    label: "C",
    value: "BROOKLYN",
    description: "private appointment-first studio",
    image: "/images/about/stats/stat-c.jpg",
    rotation: -3,
  },
  {
    label: "D",
    value: "3",
    description: "resident artists",
    image: "/images/about/stats/stat-d.jpg",
    rotation: 4,
  },
];

type StatColumnProps = {
  stat: Stat;
};

function StatColumn({
  stat,
}: StatColumnProps) {
  const columnRef =
    useRef<HTMLDivElement>(null);

  const [active, setActive] =
    useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 420,
    damping: 36,
    mass: 0.35,
  });

  const y = useSpring(rawY, {
    stiffness: 420,
    damping: 36,
    mass: 0.35,
  });

  const updatePointer = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    const element =
      columnRef.current;

    if (!element) return;

    const rect =
      element.getBoundingClientRect();

    rawX.set(
      event.clientX - rect.left,
    );

    rawY.set(
      event.clientY - rect.top,
    );
  };

  const handleMouseEnter = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    updatePointer(event);
    setActive(true);
  };

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    updatePointer(event);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <div
      ref={columnRef}
      className="team-stats__hover-column"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="team-stats__hover-content">
        <span className="team-stats__index">
          {stat.label}
        </span>

        <div className="team-stats__copy">
          <strong>
            {stat.value}
          </strong>

          <p>
            {stat.description}
          </p>
        </div>
      </div>

      <motion.div
        className="team-stats__hover-image"
        style={{
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
          rotate: stat.rotation,
        }}
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scale: active
            ? 1
            : 0.88,
        }}
        transition={{
          opacity: {
            duration: 0.16,
          },
          scale: {
            duration: 0.22,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          },
        }}
      >
        <Image
          src={stat.image}
          alt=""
          fill
          sizes="260px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

function MobileStat({
  stat,
}: {
  stat: Stat;
}) {
  return (
    <div className="team-stats__mobile-stat">
      <span className="team-stats__index">
        {stat.label}
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

function MobileImage({
  stat,
}: {
  stat: Stat;
}) {
  return (
    <div className="team-stats__mobile-image">
      <Image
        src={stat.image}
        alt=""
        fill
        sizes="50vw"
        className="object-cover"
      />
    </div>
  );
}

export function TeamStats() {
  return (
    <section
      data-cursor-tone="dark"
      className="team-stats"
    >
      {/* Desktop */}
      <div className="team-stats__desktop hype-shell">
        {stats.map((stat) => (
          <StatColumn
            key={stat.label}
            stat={stat}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="team-stats__mobile">
        <div className="team-stats__mobile-row">
          <MobileStat
            stat={stats[0]}
          />

          <MobileImage
            stat={stats[0]}
          />
        </div>

        <div className="team-stats__mobile-row">
          <MobileImage
            stat={stats[1]}
          />

          <MobileStat
            stat={stats[1]}
          />
        </div>

        <div className="team-stats__mobile-row">
          <MobileStat
            stat={stats[2]}
          />

          <MobileImage
            stat={stats[2]}
          />
        </div>

        <div className="team-stats__mobile-row">
          <MobileImage
            stat={stats[3]}
          />

          <MobileStat
            stat={stats[3]}
          />
        </div>
      </div>
    </section>
  );
}

export default TeamStats;
