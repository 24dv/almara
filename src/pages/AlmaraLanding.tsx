import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";

const AlmaraLanding = () => {
  return (
    <div className="relative w-full almara-gradient-bg animate-fade-in">
      {/* Mobile Header/Menu */}
      <MobileMenu />

      {/* Navigation */}
      <Navigation positioning="fixed" />
      
      {/* Hero Section - Full viewport height */}
      <HeroSection />
      
      {/* Footer - Only visible when scrolling */}
      <Footer />
    </div>
  );
};

export default AlmaraLanding;