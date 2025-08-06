import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const AlmaraLanding = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AlmaraLanding;