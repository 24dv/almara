import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState("family-office");

  const services = [
    {
      id: "family-office",
      title: "family office",
      description: "We design the architecture of bespoke wealth solutions, aligning asset management and wealth structuring.",
      points: [
        "Structural design: holdings, governance, succession (multi-jurisdictional)",
        "Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting",
        "Consolidated view: periodic reviews, risk monitoring, cadence and accountability"
      ]
    },
    {
      id: "alternatives",
      title: "alternatives",
      description: "Where opportunity meets access. Curated exposure across private markets.",
      points: [
        "Private Equity & Venture Capital",
        "Private Debt & Hedge Funds", 
        "Structured Products & Litigation Funding",
        "Real Estate & Specialty Assets"
      ]
    },
    {
      id: "capital-ma",
      title: "capital introduction & M&A",
      description: "Connecting capital and opportunity, quietly and effectively.",
      points: [
        "Capital introductions: institutions, family offices, and select co-investors",
        "M&A support: buy-side/sell-side, valuation, diligence, negotiations",
        "Execution with partners: targeted boutiques and global advisors where appropriate"
      ]
    },
    {
      id: "art-advisory",
      title: "art advisory",
      description: "Beyond collection management, insider access to expertise and institutions.",
      points: [
        "Acquisition & valuation: market intelligence, authenticity, pricing",
        "Conservation & succession: preservation strategies, estate integration",
        "Placement & financing: loans, insurance, art lending, gallery/museum relationships",
        "Infrastructure: collection-management systems and bespoke reporting"
      ]
    }
  ];

  // Basic SEO for this page
  useEffect(() => {
    document.title = "Services | ALMARA";
    const desc = "Family office, alternatives, M&A, and art advisory, delivered through ongoing counsel and mandate-led execution.";
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
    <div className="relative w-full min-h-screen bg-almara-bg no-overlay">
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
      <section className="h-screen flex items-center justify-center px-8 lg:px-12 services-section-gradient relative overflow-hidden">
        {/* Background Circle - Spans from header to bottom of section */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[120vh] h-[120vh] min-w-[800px] min-h-[800px] max-w-[1200px] max-h-[1200px] object-cover bg-transparent top-0 right-0 transform translate-x-[25%] -translate-y-[10%] z-[1] opacity-80" />
        
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

      {/* Interactive Services Section */}
      <section className="h-screen bg-almara-light-text/20 flex items-start justify-center px-8 lg:px-12 services-section-gradient">
        <div className="max-w-6xl mx-auto pt-60 pb-16">
          {/* Interactive Circles */}
          <div className="flex items-center justify-center mb-8">
            {services.map((service, index) => (
              <div key={service.id} className="flex items-center">
                <button
                  onClick={() => setActiveService(service.id)}
                  className="flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: activeService === service.id ? '#364b56' : 'transparent',
                    boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                    transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-out',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.backgroundColor = '#364b56';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                  aria-label={`Select ${service.title}`}
                />
                {/* Arrow after each circle except the last */}
                {index < services.length - 1 && (
                  <div className="flex items-center justify-center" style={{ width: '192px' }}>
                    {activeService === service.id && (
                      <span 
                        className="text-3xl"
                        style={{ color: '#f4eada' }}
                      >
                        ➤
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Content */}
          <div className="relative">
            <div className="absolute left-0 text-left" style={{ marginLeft: 'calc(50% - 400px)', maxWidth: '28rem' }}>
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`transition-all duration-500 ${
                    activeService === service.id 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
                  }`}
                >
                  <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#f4eada] mb-6">
                    {service.title}
                  </h3>
                  <p className="text-[#f4eada] leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.points.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-2">
                          <div 
                            style={{
                              width: '0',
                              height: '0',
                              borderLeft: '8px solid #f4eada',
                              borderTop: '6px solid transparent',
                              borderBottom: '6px solid transparent'
                            }}
                          />
                        </div>
                        <p className="text-[#f4eada] text-base leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="h-screen flex items-center justify-center px-8 lg:px-12 services-section-gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-helvetica-now text-white/70">
            <article className="space-y-2">
              <h3 className="text-lg text-white/80">Ongoing counsel</h3>
              <p className="leading-relaxed">
                We stay close to your world, anticipating needs, coordinating specialists, and maintaining oversight.
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
                Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts, curated and managed by us.
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