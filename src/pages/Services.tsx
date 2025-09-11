import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servicesHero from "@/assets/services-hero.jpg";
const Services = () => {
  const [activeService, setActiveService] = useState("family-office");
  
  // Scroll reveal hooks for animations
  const { ref: circlesRef, isVisible: circlesVisible } = useScrollReveal(0.1, 200);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1, 400);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1, 200);
  const { ref: topGridRef, isVisible: topGridVisible } = useScrollReveal(0.1, 400);
  const { ref: bottomGridRef, isVisible: bottomGridVisible } = useScrollReveal(0.1, 600);
  const services = [{
    id: "family-office",
    title: "family office",
    description: "We design the architecture of bespoke wealth solutions, aligning asset management and wealth structuring.",
    points: ["Structural design: holdings, governance, succession (multi-jurisdictional)", "Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting", "Consolidated view: periodic reviews, risk monitoring, cadence and accountability"]
  }, {
    id: "alternatives",
    title: "alternatives",
    description: "Where opportunity meets access. Curated exposure across private markets.",
    points: ["Private Equity & Venture Capital", "Private Debt & Hedge Funds", "Structured Products & Litigation Funding", "Real Estate & Specialty Assets"]
  }, {
    id: "capital-ma",
    title: "capital introduction & M&A",
    description: "Connecting capital and opportunity, quietly and effectively.",
    points: ["Capital introductions: institutions, family offices, and select co-investors", "M&A support: buy-side/sell-side, valuation, diligence, negotiations", "Execution with partners: targeted boutiques and global advisors where appropriate"]
  }, {
    id: "art-advisory",
    title: "art advisory",
    description: "Beyond collection management, insider access to expertise and institutions.",
    points: ["Acquisition & valuation: market intelligence, authenticity, pricing", "Conservation & succession: preservation strategies, estate integration", "Placement & financing: loans, insurance, art lending, gallery/museum relationships", "Infrastructure: collection-management systems and bespoke reporting"]
  }];

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
  return <div className="relative w-full min-h-screen almara-gradient-bg no-overlay animate-fade-in">
      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">

      {/* Logo Section - Hidden on mobile */}
      <section className="hidden xl:block absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" loading="eager" fetchPriority="high" />
        </Link>
      </section>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 mission-section-gradient relative overflow-hidden">
        {/* Background Circle - Spans from header to bottom of section */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[120vh] h-[120vh] min-w-[800px] min-h-[800px] max-w-[1200px] max-h-[1200px] object-cover bg-transparent top-0 right-0 transform translate-x-[25%] -translate-y-[10%] z-[1] opacity-80 reveal-fade" style={{
          animationDelay: '0.1s',
          animationFillMode: 'both'
        }} loading="eager" fetchPriority="high" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="w-full flex justify-end">
            <div className="max-w-6xl text-right space-y-4 sm:space-y-6 lg:space-y-8 reveal-up" style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}>
          <h1 className="font-museo-moderno almara-h1-mobile text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">Our Services</h1>
          <div className="space-y-1 sm:space-y-2">
            <p className="leading-relaxed almara-body-mobile text-[#f4eada] font-helvetica-now">
              Family office, alternatives, M&A, and art advisory,
            </p>
            <p className="leading-relaxed almara-body-mobile text-[#f4eada] font-helvetica-now">
              delivered through ongoing counsel
            </p>
            <p className="leading-relaxed almara-body-mobile text-[#f4eada] font-helvetica-now">
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
      <section className="min-h-screen lg:h-screen bg-almara-light-text/20 flex items-start justify-center px-4 sm:px-6 lg:px-12 mission-section-gradient">
        <div className="max-w-6xl mx-auto pt-24 sm:pt-32 lg:pt-48 pb-16">
          
          {/* Desktop Layout - Interactive Circles */}
          <div className="hidden lg:block">
            <div ref={circlesRef} className={`flex items-center justify-center mb-16 transition-all duration-1000 ease-out ${circlesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              {services.map((service, index) => <div key={service.id} className="flex items-center">
                  <button onClick={() => setActiveService(service.id)} className="flex-shrink-0 relative z-30" style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: activeService === service.id ? '#364b56' : 'transparent',
                  boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                  transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-out',
                  transform: 'scale(1)',
                  position: 'relative',
                  zIndex: 30
                }} onMouseEnter={e => {
                  if (activeService !== service.id) {
                    e.currentTarget.style.backgroundColor = '#364b56';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }} onMouseLeave={e => {
                  if (activeService !== service.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }} aria-label={`Select ${service.title}`} />
                  {/* Arrow after each circle except the last */}
                  {index < services.length - 1 && <div className="flex items-center justify-center" style={{
                  width: '192px'
                }}>
                      {activeService === service.id && <span className="text-3xl" style={{
                    color: '#f4eada'
                  }}>
                          ➤
                        </span>}
                    </div>}
                </div>)}
            </div>

            {/* Desktop Service Content */}
            <div ref={contentRef} className={`relative min-h-[300px] transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <div className="absolute left-0 w-full" style={{
                marginLeft: 'calc(50% - 400px)',
                maxWidth: '800px'
              }}>
                {services.map(service => <div key={service.id} className={`transition-all duration-700 ease-in-out ${activeService === service.id ? 'opacity-100 transform translate-y-0 relative z-10' : 'opacity-0 transform translate-y-2 absolute top-0 pointer-events-none z-0'}`} style={{
                  transitionProperty: 'opacity, transform',
                  willChange: 'opacity, transform'
                }}>
                    {/* Services with images - Family Office, Art Advisory, Capital M&A, and Alternatives */}
                    {service.id === 'family-office' || service.id === 'art-advisory' || service.id === 'capital-ma' || service.id === 'alternatives' ? <div className="flex items-start space-x-12">
                        <div className="w-1/2 flex-shrink-0 relative">
                          <img src={service.id === 'family-office' ? "/lovable-uploads/0fb235b5-0ef7-4a23-b23c-a09271d1c1ee.png" : service.id === 'art-advisory' ? "/lovable-uploads/24427e5c-c5b4-462c-8320-f420776f39d1.png" : service.id === 'capital-ma' ? "/lovable-uploads/4c877114-c7bc-42b2-aa3d-5cf4f2df46b6.png" : "/lovable-uploads/402e0eb5-ac60-45a4-b299-85280c71cb6d.png"} alt={service.id === 'family-office' ? "Family Office" : service.id === 'art-advisory' ? "Art Advisory" : service.id === 'capital-ma' ? "Capital Introduction & M&A" : "Alternatives"} className="w-full aspect-square object-cover rounded-lg relative z-0" loading="lazy" />
                          <div className="absolute inset-0 rounded-lg z-0" style={{
                        background: 'rgba(54, 75, 86, 0.44)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(0px)',
                        WebkitBackdropFilter: 'blur(0px)'
                      }} />
                        </div>
                        <div className="w-1/2">
                          <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-3 sm:mb-4 lg:mb-6 text-[#b3bacb]">
                            {service.title}
                          </h3>
                          <p className="text-[#f4eada] leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-[14px] xs:text-[15px] sm:text-[16px]">
                            {service.description}
                          </p>
                          <div className="space-y-3">
                            {service.points.map((point, index) => <div key={index} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-2">
                                  <div style={{
                              width: '0',
                              height: '0',
                              borderLeft: '8px solid #f4eada',
                              borderTop: '6px solid transparent',
                              borderBottom: '6px solid transparent'
                            }} />
                                </div>
                                <p className="text-[#f4eada] text-[13px] xs:text-[14px] sm:text-[15px] leading-relaxed">{point}</p>
                              </div>)}
                          </div>
                        </div>
                      </div> : (/* Other services - original layout */
                  <div style={{
                    maxWidth: '28rem'
                  }}>
                        <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#f4eada] mb-3 sm:mb-4 lg:mb-6">
                          {service.title}
                        </h3>
                        <p className="text-[#f4eada] leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-[14px] xs:text-[15px] sm:text-[16px]">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.points.map((point, index) => <div key={index} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-2">
                                <div style={{
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid #f4eada',
                            borderTop: '6px solid transparent',
                            borderBottom: '6px solid transparent'
                          }} />
                              </div>
                              <p className="text-[#f4eada] text-[13px] xs:text-[14px] sm:text-[15px] leading-relaxed">{point}</p>
                            </div>)}
                        </div>
                      </div>)}
                  </div>)}
              </div>
            </div>
          </div>

          {/* Mobile Layout - Interactive Service Selection */}
          <div className="lg:hidden px-6 py-12">
            {/* Mobile Service Navigation */}
            <div className="flex justify-center gap-8 mb-16 reveal-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className="flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: activeService === service.id ? '#364b56' : 'transparent',
                    boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                    transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-out',
                    transform: 'scale(1)'
                  }}
                  onTouchStart={(e) => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.backgroundColor = '#364b56';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                  aria-label={`Select ${service.title}`}
                />
              ))}
            </div>

            {/* Mobile Service Content */}
            <div className="relative min-h-[500px] px-8 py-6">
              {services.map(service => (
                <div 
                  key={service.id} 
                  className={`transition-all duration-700 ease-in-out ${
                    activeService === service.id 
                      ? 'opacity-100 transform translate-y-0 relative z-10' 
                      : 'opacity-0 transform translate-y-2 absolute top-0 left-0 right-0 pointer-events-none z-0'
                  }`}
                  style={{
                    transitionProperty: 'opacity, transform',
                    willChange: 'opacity, transform'
                  }}
                >
                  {/* Service with image */}
                  {(service.id === 'family-office' || service.id === 'art-advisory' || service.id === 'capital-ma' || service.id === 'alternatives') ? (
                    <div className="space-y-6">
                      {/* Image */}
                      <div className="w-full max-w-md mx-auto relative mb-6">
                        <img 
                          src={
                            service.id === 'family-office' ? "/lovable-uploads/0fb235b5-0ef7-4a23-b23c-a09271d1c1ee.png" 
                            : service.id === 'art-advisory' ? "/lovable-uploads/24427e5c-c5b4-462c-8320-f420776f39d1.png" 
                            : service.id === 'capital-ma' ? "/lovable-uploads/4c877114-c7bc-42b2-aa3d-5cf4f2df46b6.png" 
                            : "/lovable-uploads/402e0eb5-ac60-45a4-b299-85280c71cb6d.png"
                          } 
                          alt={
                            service.id === 'family-office' ? "Family Office" 
                            : service.id === 'art-advisory' ? "Art Advisory" 
                            : service.id === 'capital-ma' ? "Capital Introduction & M&A" 
                            : "Alternatives"
                          } 
                          className="w-full aspect-square object-cover rounded-lg" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 rounded-lg" style={{
                          background: 'rgba(54, 75, 86, 0.44)',
                          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                          backdropFilter: 'blur(0px)',
                          WebkitBackdropFilter: 'blur(0px)'
                        }} />
                      </div>
                      
                      {/* Content */}
                      <div className="text-center space-y-6 px-6">
                        <h3 className="font-helvetica-now almara-h3-mobile tracking-wider font-bold text-[#b3bacb]">
                          {service.title}
                        </h3>
                        <p className="text-[#f4eada] leading-relaxed almara-body-mobile max-w-lg mx-auto">
                          {service.description}
                        </p>
                        <div className="space-y-4 max-w-lg mx-auto">
                          {service.points.map((point, index) => (
                            <div key={index} className="flex items-start space-x-3 text-left">
                              <div className="flex-shrink-0 mt-2">
                                <div style={{
                                  width: '0',
                                  height: '0',
                                  borderLeft: '6px solid #f4eada',
                                  borderTop: '4px solid transparent',
                                  borderBottom: '4px solid transparent'
                                }} />
                              </div>
                              <p className="text-[#f4eada] almara-body-small-mobile leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Service without image */
                    <div className="text-center space-y-4 max-w-lg mx-auto">
                      <h3 className="font-helvetica-now almara-h3-mobile tracking-wider font-bold text-[#b3bacb]">
                        {service.title}
                      </h3>
                      <p className="text-[#f4eada] leading-relaxed almara-body-mobile">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.points.map((point, index) => (
                          <div key={index} className="flex items-start space-x-3 text-left">
                            <div className="flex-shrink-0 mt-2">
                              <div style={{
                                width: '0',
                                height: '0',
                                borderLeft: '6px solid #f4eada',
                                borderTop: '4px solid transparent',
                                borderBottom: '4px solid transparent'
                              }} />
                            </div>
                            <p className="text-[#f4eada] almara-body-small-mobile leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 mission-section-gradient overflow-hidden">
        {/* Background Circle - Centered and sized to touch top/bottom borders */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[90vh] h-[90vh] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] opacity-60 reveal-fade" style={{
          animationDelay: '0.1s',
          animationFillMode: 'both'
        }} loading="lazy" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div ref={titleRef} className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <h2 className="font-museo-moderno text-[18px] xs:text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-[#f4eada]">How We Work</h2>
          </div>
          <div ref={topGridRef} className={`grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 font-helvetica-now text-white/70 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${topGridVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">ongoing counsel</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                We stay close to your world, anticipating needs, coordinating specialists, and maintaining oversight.
              </p>
            </article>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">mandate-led execution</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                When opportunities arise, we mobilise the right people and drive transactions to completion.
              </p>
            </article>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">orchestrated network</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts, curated and managed by us.
              </p>
            </article>
          </div>
          <div ref={bottomGridRef} className={`grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 font-helvetica-now transition-all duration-1000 ease-out ${bottomGridVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">who we work with</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                Principals & families · Entrepreneurial investors · Fund managers
              </p>
            </article>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">perspective</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                Research-led and culture-aware, with ties to London Business School and the Sorbonne. We support democracy, the rule of law, European integration, and contemporary visual and performance art.
              </p>
            </article>
            <article className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb] mb-2 sm:mb-3 lg:mb-4">discretion & access</h3>
              <p className="text-[#f4eada] leading-relaxed text-[14px] xs:text-[15px] sm:text-[16px]">
                We collaborate with leading institutions and boutiques. References available on request.
              </p>
            </article>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>;
};
export default Services;