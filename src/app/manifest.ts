import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INKED",
    short_name: "INKED",
    description:
      "Custom tattoo studio specializing in original, story-driven tattoo work.",
    start_url: "/",
    display: "standalone",
    background_color: "#efefec",
    theme_color: "#D71920",
    icons: [
      {
        src: "/icons/inked-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
