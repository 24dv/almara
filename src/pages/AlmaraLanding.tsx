import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const AlmaraLanding = () => {
  return (
    <div className="relative w-full">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Full viewport height */}
      <HeroSection />
      
      {/* Footer - Only visible when scrolling */}
      <Footer />
    </div>
  );
};

export default AlmaraLanding;