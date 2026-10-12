import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { InkCursor } from "@/components/motion/InkCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

import "./globals.css";
import "@fontsource/bebas-neue/400.css";

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),

  applicationName: "INKED",

  title: {
    default: "INKED — Custom Tattoo Studio",
    template: "%s | INKED",
  },

  description:
    "INKED is a custom tattoo studio in Brooklyn, New York specializing in black-and-grey, realism, fine-line work, lettering and custom tattoo concepts.",

  keywords: [
    "tattoo studio",
    "Brooklyn tattoo",
    "custom tattoo",
    "black and grey tattoo",
    "realism tattoo",
    "fine line tattoo",
    "tattoo artist",
    "INKED",
  ],

  authors: [
    {
      name: "INKED",
    },
  ],

  creator: "INKED",
  publisher: "INKED",

  icons: {
    icon: [
      {
        url: "/icons/inked-logo.png",
      },
    ],
    shortcut: "/icons/inked-logo.png",
    apple: "/icons/inked-logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "INKED",
    title: "INKED — Custom Tattoo Studio",
    description:
      "Custom tattoos built around your ideas, references and story.",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "INKED custom tattoo studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INKED — Custom Tattoo Studio",
    description:
      "Custom tattoos built around your ideas, references and story.",
    images: [
      "/images/hero/hero-main.jpg",
    ],
  },

  category: "tattoo studio",
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
