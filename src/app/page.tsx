import { CtaSection } from "@/src/components/cta-section";
import { FeaturesSection } from "@/src/components/features-section";
import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { HeroSection } from "@/src/components/hero-section";
import { TestimonialsSection } from "@/src/components/testimonials-section";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header logo="MeuNegócio" />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer companyName="MeuNegócio" />
    </main>
  );
}
