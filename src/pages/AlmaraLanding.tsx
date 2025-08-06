import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const AlmaraLanding = () => {
  return (
    <div className="relative w-full almara-gradient-bg">
      {/* Navigation */}
      <Navigation positioning="absolute" />
      
      {/* Hero Section - Full viewport height */}
      <HeroSection />
      
      {/* Footer - Only visible when scrolling */}
      <Footer />
    </div>
  );
};

export default AlmaraLanding;