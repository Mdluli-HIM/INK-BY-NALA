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
            [ 002 ] / Ink By Nala
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
              alt="Ink By Nala tattoo studio"
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
              alt="Ink By Nala tattoo artists"
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
            Custom ink built around
            <br className="hidden sm:block" />
            {" "}your story
          </h3>

          <p>
            Ink By Nala is a focused, appointment-only studio built
            around precision, patience and personal meaning. Moh and
            Eugene work closely with each client to turn references,
            memories and ideas into original tattoo designs rather
            than simply copying existing work.
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
