import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { InkCursor } from "@/components/motion/InkCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

import "./globals.css";
import "@fontsource/bebas-neue/400.css";

export const metadata: Metadata = {
  title: {
    default: "HYPE Tattoo Studio — Toronto",
    template: "%s | HYPE Tattoo",
  },
  description:
    "HYPE Tattoo Studio in Toronto. Custom tattoos, professional artists and original artwork.",
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
