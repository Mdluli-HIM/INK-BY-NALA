import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { InkCursor } from "@/components/motion/InkCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

import "./globals.css";
import "@fontsource/bebas-neue/400.css";

export const metadata: Metadata = {
  title: {
    default: "INK by Nala — Hatfield, Pretoria",
    template: "%s | INK by Nala",
  },
  description:
    "An independent website concept by Things for INK by Nala, a custom tattoo studio in Hatfield, Pretoria.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>

        <InkCursor />
      </body>
    </html>
  );
}
