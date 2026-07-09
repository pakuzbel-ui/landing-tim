import { Footer } from "@/components/layout/footer";
import { FloatingTelegram } from "@/components/layout/floating-telegram";
import { Header } from "@/components/layout/header";
import { LoadingSplash } from "@/components/layout/loading-splash";
import {
  AboutSection,
  AudiencesSection,
  BenefitsSection,
  ContactFormSection,
  EarningsCalculatorSection,
  FaqSection,
  GeographySection,
  HeroSection,
  HowItWorksSection,
  ProductHighlightsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-copy">
      <LoadingSplash />
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <EarningsCalculatorSection />
      <GeographySection />
      <AudiencesSection />
      <ProductHighlightsSection />
      <FaqSection />
      <ContactFormSection />
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
