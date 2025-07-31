import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { PricingSection } from "./components/PricingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <AdvantagesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}