export type PortfolioItem = {
  id: string;
  image: string;
  artist: string;
  style: string;
  layout:
    | "portrait-small"
    | "portrait-medium"
    | "portrait-large"
    | "landscape-small"
    | "landscape-wide"
    | "portrait-narrow";
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "001",
    image: "/images/gallery/portfolio/work-01.jpg",
    artist: "Ink By Nala",
    style: "Blackwork",
    layout: "portrait-small",
  },
  {
    id: "002",
    image: "/images/gallery/portfolio/work-02.jpg",
    artist: "Ink By Nala",
    style: "Realism",
    layout: "portrait-medium",
  },
  {
    id: "003",
    image: "/images/gallery/portfolio/work-03.jpg",
    artist: "Ink By Nala",
    style: "Fine Line",
    layout: "portrait-large",
  },
  {
    id: "004",
    image: "/images/gallery/portfolio/work-04.jpg",
    artist: "Ink By Nala",
    style: "Illustrative",
    layout: "landscape-wide",
  },
  {
    id: "005",
    image: "/images/gallery/portfolio/work-05.jpg",
    artist: "Ink By Nala",
    style: "Black & Grey",
    layout: "portrait-large",
  },
  {
    id: "006",
    image: "/images/gallery/portfolio/work-06.jpg",
    artist: "Ink By Nala",
    style: "Ornamental",
    layout: "portrait-medium",
  },
  {
    id: "007",
    image: "/images/gallery/portfolio/work-07.jpg",
    artist: "Ink By Nala",
    style: "Traditional",
    layout: "portrait-narrow",
  },
  {
    id: "008",
    image: "/images/gallery/portfolio/work-08.jpg",
    artist: "Ink By Nala",
    style: "Custom",
    layout: "landscape-small",
  },
];
