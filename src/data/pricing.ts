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
    name: "Quantum",
    description:
      "This package includes the work of the master. R2 700 per hour of work, R12 500 per session.",
    price: "R2 700",
    image: "/images/pricing/quantum.jpg",
    theme: "light",
  },
  {
    id: "02",
    name: "Hyper",
    description:
      "This package includes the work of the master. R18 000–R22 000 per session.",
    price: "R18k–R22k",
    image: "/images/pricing/hyper.jpg",
    theme: "cyan",
    featured: true,
  },
  {
    id: "03",
    name: "Blast",
    description:
      "This package includes the work of the master. R36 000+ per session.",
    price: "R36k+",
    image: "/images/pricing/blast.jpg",
    theme: "dark",
  },
];
