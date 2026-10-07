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
            [ 002 ] / The studio
          </span>

          <h2>
            About the team
          </h2>
        </div>

        <div className="about-team-v2__stage">
          {/* LEFT IMAGE */}
          <div className="about-team-v2__side about-team-v2__side--left">
            <Image
              src="/images/about/team-left.jpg"
              alt="HYPE Tattoo studio"
              fill
              sizes="(max-width: 768px) 42vw, 280px"
              className="about-team-v2__photo"
            />

            <RadialMark className="about-team-v2__mark about-team-v2__mark--left" />
          </div>

          {/* MAIN IMAGE */}
          <div className="about-team-v2__main">
            <Image
              src="/images/about/team-main.jpg"
              alt="HYPE Tattoo team"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 680px"
              className="about-team-v2__photo about-team-v2__photo--main"
            />

            <div className="about-team-v2__main-index">
              <span>[ TEAM ]</span>
              <span>Toronto / Studio</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-team-v2__side about-team-v2__side--right">
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
            We&apos;re bringing your unique
            <br className="hidden sm:block" />
            {" "}vision to life through ink
          </h3>

          <p>
            Each member of our team brings their own style,
            experience and creative approach to the studio.
            Together, we turn personal ideas into custom artwork
            while keeping the process professional, collaborative
            and considered from start to finish.
          </p>

          <HypeButton
            href="/about"
            variant="light"
            className="about-team-v2__button"
          >
            About us
          </HypeButton>
        </div>
      </div>
    </section>
  );
}
