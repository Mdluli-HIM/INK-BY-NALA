import { HypeButton } from "@/components/ui/HypeButton";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      data-cursor-tone="light"
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#aeb6b8] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/hero-main.jpg')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/[0.10]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/40 via-black/10 to-transparent"
      />

      <div className="hype-shell relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center pt-[90px]">
          <div className="w-full text-center">
            <h1 className="hero-heading">
              Ink that tells
              <br />
              your story
            </h1>

            <div className="mt-8 flex justify-center md:mt-10">
              <HypeButton
                href="#consultation"
                className="w-full max-w-[410px]"
              >
                Book an appointment
              </HypeButton>
            </div>
          </div>
        </div>

        <div className="hero-bottom-row">
          <div className="hero-bottom-row__left">
            <span>
              Based in{" "}
              <span className="whitespace-nowrap">
                {siteConfig.location}
              </span>
            </span>
          </div>

          <div className="hero-bottom-row__center">
            <span className="text-center text-[10px] leading-snug sm:text-xs">
              Independent website concept by{" "}
              <a
                href="https://thingsdesign.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 transition-colors duration-300 hover:text-hype-cyan"
              >
                Things
              </a>
            </span>
          </div>

          <div className="hero-bottom-row__right">
            <a
              href="#about-team"
              className="whitespace-nowrap transition-colors duration-300 hover:text-hype-cyan"
            >
              Scroll Down ↘
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
