import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  // Basic SEO for this page
  useEffect(() => {
    document.title = "Services | ALMARA";
    const desc = "Family office, alternatives, M&A, and art advisory—delivered through ongoing counsel and mandate-led execution.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  return (
    <div className="relative w-full min-h-screen almara-gradient-bg no-overlay">
      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
      {/* Logo Section */}
      <section className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
        </Link>
      </section>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-8 lg:px-12 mission-gradient relative overflow-hidden">
        {/* Background Circle - Right Side Oversized */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] object-cover bg-transparent top-1/2 right-[10%] transform -translate-y-1/2 z-[1] opacity-80" />
        
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="w-full flex justify-end">
            <div className="max-w-6xl text-right space-y-8">
          <h1 className="font-museo-moderno text-[32px] lg:text-[36px] text-white tracking-[0.05em] opacity-90 leading-tight">Our Services</h1>
          <div className="space-y-2">
            <p className="leading-relaxed text-sm lg:text-base text-white font-helvetica-now">
              Family office, alternatives, M&A, and art advisory,
            </p>
            <p className="leading-relaxed text-sm lg:text-base text-white font-helvetica-now">
              delivered through ongoing counsel
            </p>
            <p className="leading-relaxed text-sm lg:text-base text-white font-helvetica-now">
              and mandate-led execution.
            </p>
          </div>
          <div className="pt-6">
            <Button variant="call" size="call" className="font-helvetica-now">request a call</Button>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-8 lg:px-12 py-24 mission-gradient">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Family Office */}
            <article className="bg-gradient-to-r from-transparent via-gray-600/30 to-gray-700/60 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white/80 mb-4">Family Office</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We design the architecture of bespoke wealth solutions—aligning asset management and wealth structuring.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>Structural design: holdings, governance, succession (multi-jurisdictional)</li>
                <li>Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting</li>
                <li>Consolidated view: periodic reviews, risk monitoring, cadence and accountability</li>
              </ul>
            </article>

            {/* Alternatives */}
            <article className="bg-gradient-to-r from-transparent via-gray-600/30 to-gray-700/60 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white/80 mb-4">Alternatives</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Where opportunity meets access. Curated exposure across private markets.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>Private Equity & Venture Capital</li>
                <li>Private Debt & Hedge Funds</li>
                <li>Structured Products & Litigation Funding</li>
                <li>Real Estate & Specialty Assets</li>
              </ul>
            </article>

            {/* Capital & M&A */}
            <article className="bg-gradient-to-r from-transparent via-gray-600/30 to-gray-700/60 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white/80 mb-4">Capital Introduction & M&A</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Connecting capital and opportunity—quietly and effectively.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>Capital introductions: institutions, family offices, and select co-investors</li>
                <li>M&A support: buy-side/sell-side, valuation, diligence, negotiations</li>
                <li>Execution with partners: targeted boutiques and global advisors where appropriate</li>
              </ul>
            </article>

            {/* Art Advisory */}
            <article className="bg-gradient-to-r from-transparent via-gray-600/30 to-gray-700/60 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white/80 mb-4">Art Advisory</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Beyond collection management—insider access to expertise and institutions.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>Acquisition & valuation: market intelligence, authenticity, pricing</li>
                <li>Conservation & succession: preservation strategies, estate integration</li>
                <li>Placement & financing: loans, insurance, art lending, gallery/museum relationships</li>
                <li>Infrastructure: collection-management systems and bespoke reporting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-8 lg:px-12 py-24 mission-gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-helvetica-now text-white/70">
            <article className="space-y-2">
              <h3 className="text-lg text-white/80">Ongoing counsel</h3>
              <p className="leading-relaxed">
                We stay close to your world—anticipating needs, coordinating specialists, and maintaining oversight.
              </p>
            </article>
            <article className="space-y-2">
              <h3 className="text-lg text-white/80">Mandate-led execution</h3>
              <p className="leading-relaxed">
                When opportunities arise, we mobilise the right people and drive transactions to completion.
              </p>
            </article>
            <article className="space-y-2">
              <h3 className="text-lg text-white/80">Orchestrated network</h3>
              <p className="leading-relaxed">
                Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts—curated and managed by us.
              </p>
            </article>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;