import { Footer } from "@/components/layout/footer";
import { FloatingTelegram } from "@/components/layout/floating-telegram";
import { Header } from "@/components/layout/header";
import {
  AudiencesSection,
  AboutSection,
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
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <AudiencesSection />
      <EarningsCalculatorSection />
      <HowItWorksSection />
      <GeographySection />
      <ProductHighlightsSection />
      <FaqSection />
      <ContactFormSection />
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
