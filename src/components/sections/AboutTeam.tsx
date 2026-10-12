import Image from "next/image";

import { HypeButton } from "@/components/ui/HypeButton";
import { RadialMark } from "@/components/ui/RadialMark";

export function AboutTeam() {
  return (
    <section
      id="about-team"
      data-cursor-tone="dark"
      className="about-team-v2"
    >
      <div className="hype-shell about-team-v2__inner">
        <div className="about-team-v2__heading">
          <span className="about-team-v2__eyebrow">
            INKED
          </span>

          <h2>
            About the team
          </h2>
        </div>

        <div className="about-team-v2__stage">
          {/* LEFT IMAGE */}
          <div className="about-team-v2__side about-team-v2__side--left relative">
            <Image
              src="/images/about/team-left.jpg"
              alt="INKED tattoo studio"
              fill
              sizes="(max-width: 768px) 42vw, 280px"
              className="about-team-v2__photo"
            />

            <RadialMark className="about-team-v2__mark about-team-v2__mark--left" />
          </div>

          {/* MAIN IMAGE */}
          <div className="about-team-v2__main relative">
            <Image
              src="/images/about/team-main.jpg"
              alt="INKED tattoo artists"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 680px"
              className="about-team-v2__photo about-team-v2__photo--main"
            />

            <div className="about-team-v2__main-index">
              <span>[ TEAM ]</span>
              <span>Brooklyn / New York</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-team-v2__side about-team-v2__side--right relative">
            <RadialMark className="about-team-v2__mark about-team-v2__mark--right" />

            <Image
              src="/images/about/team-right.jpg"
              alt="Tattoo artist at work"
              fill
              sizes="(max-width: 768px) 42vw, 260px"
              className="about-team-v2__photo"
            />
          </div>
        </div>

        <div className="about-team-v2__content">
          <h3>
            Custom tattoos built around
            <br className="hidden sm:block" />
            {" "}in ink
          </h3>

          <p>
            INKED is a private, appointment-first tattoo studio built around
            original artwork, thoughtful collaboration and great craft.
            Maya, Jordan and Alex work closely with every client to turn
            references, memories and rough ideas into custom tattoos
            designed specifically for the person wearing them.</p>

          <HypeButton
            href="#portfolio"
            variant="light"
            className="about-team-v2__button"
          >
            Explore their work
          </HypeButton>
        </div>
      </div>
    </section>
  );
}
