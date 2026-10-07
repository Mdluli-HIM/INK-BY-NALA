export type PricingPackage = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  theme: "light" | "cyan" | "dark";
  featured?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "01",
    name: "Custom",
    description:
      "Every tattoo is quoted individually according to the concept, placement, size, detail and complexity of the work.",
    price: "GET A QUOTE",
    image: "/images/pricing/quantum.jpg",
    theme: "light",
  },
  {
    id: "02",
    name: "Half Day",
    description:
      "A session of up to approximately four hours for focused pieces, panels and work that can be completed within a shorter sitting.",
    price: "ENQUIRE",
    image: "/images/pricing/hyper.jpg",
    theme: "cyan",
    featured: true,
  },
  {
    id: "03",
    name: "Full Day",
    description:
      "Longer sessions for larger, highly detailed work such as sleeves and complex realism pieces. Contact the studio for a current quote.",
    price: "ENQUIRE",
    image: "/images/pricing/blast.jpg",
    theme: "dark",
  },
];
