export const siteConfig = {
  name: "Ink By Nala Tattoos",
  shortName: "Ink By Nala",

  tagline: "Ink that tells your story.",

  description:
    "Ink By Nala Tattoos is an appointment-only custom tattoo studio in Hatfield, Pretoria, specialising in realism, black-and-grey work, lettering, sleeves and story-driven custom tattoo designs.",

  location: "Hatfield, Pretoria",
  address: "1090 Burnett Street, Hatfield, Pretoria, Gauteng, South Africa",

  phone: "065 178 0709",
  whatsapp: "https://wa.me/27651780709",

  instagramHandle: "@ink_by_nala",
  instagram: "https://www.instagram.com/ink_by_nala/",

  website: "https://inkbynala.live/",

  hours: "Mon–Sat · Appointment only",

  logo: "/icons/hype-logo.png",
  logoAlt: "Ink By Nala Tattoos",

  artists: ["Moh", "Eugene"],
};

export const headerNavigation = [
  {
    label: "Main",
    href: "#hero",
  },
  {
    label: "About us",
    href: "#about-team",
  },
  {
    label: "Price",
    href: "#pricing",
  },
  {
    label: "Gallery",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#consultation",
  },
];

export const mainNavigation = headerNavigation.filter(
  (item) => item.href !== "#hero",
);
