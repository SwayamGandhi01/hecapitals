import type { Metadata } from "next";

import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { ContactSection } from "@/components/home/ContactSection";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { HeroSection } from "@/components/home/HeroSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { IntroSection } from "@/components/home/IntroSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VisionSection } from "@/components/home/VisionSection";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Global Investor Relations Specialists",
  description:
    "HE Capital Markets is a full-service investor relations firm helping North American listed companies build visibility, attract investors and raise their profile across North America and Europe.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogoStrip />
      <IntroSection />
      <ServicesSection />
      <SectorsSection />
      <VisionSection />
      <GlobalPresence />
      <InsightsSection />
      <ContactSection />
      <ContactCTA />
    </>
  );
}
