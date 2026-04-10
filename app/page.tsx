import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  AboutSection,
  AudiencesSection,
  BenefitsSection,
  ContactFormSection,
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
      <HowItWorksSection />
      <BenefitsSection />
      <GeographySection />
      <AudiencesSection />
      <ProductHighlightsSection />
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
