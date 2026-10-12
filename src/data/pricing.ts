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
    name: "Tattoo Minimum",
    description:
      "Perfect for smaller custom tattoos, fine-line work, lettering and simple concepts. Final pricing depends on placement, size and detail.",
    price: "$150+",
    image: "/images/pricing/quantum.jpg",
    theme: "light",
  },

  {
    id: "02",
    name: "Half Day",
    description:
      "Up to four hours of tattoo time for medium-scale custom pieces, detailed panels and work that needs a longer focused sitting.",
    price: "$650+",
    image: "/images/pricing/hyper.jpg",
    theme: "cyan",
    featured: true,
  },

  {
    id: "03",
    name: "Full Day",
    description:
      "A longer session designed for large-scale custom work, realism, sleeves and projects that require extended tattoo time.",
    price: "$1,200+",
    image: "/images/pricing/blast.jpg",
    theme: "dark",
  },
];
