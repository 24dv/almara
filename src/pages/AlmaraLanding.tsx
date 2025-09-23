import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { useEffect } from "react";

const AlmaraLanding = () => {
  // SEO meta tags for homepage
  useEffect(() => {
    document.title = "ALMARA - Alternative Asset Investment";
    const desc = "A Sea of Opportunity in Alternative Asset Investment. Expert guidance through hedge funds, private equity, real estate, litigation finance and art.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Prevent scrolling on mobile for home page
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // Cleanup function to restore scrolling when leaving the page
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="relative w-full almara-gradient-bg animate-fade-in">
      {/* Mobile Header/Menu */}
      <MobileMenu />

      {/* Navigation */}
      <Navigation positioning="fixed" />
      
      {/* Hero Section - Full viewport height */}
      <HeroSection />
      
      {/* Footer - Hidden on mobile, visible on desktop */}
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
};

export default AlmaraLanding;