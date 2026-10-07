import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { TeamStats } from "@/components/sections/TeamStats";
import { StoryFeature } from "@/components/sections/StoryFeature";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { PricingSection } from "@/components/sections/PricingSection";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <AboutTeam />

      <TeamStats />

      <StoryFeature />

      <PortfolioShowcase />

      <PricingSection />

      <ConsultationSection />

      <Footer />
    </main>
  );
}
