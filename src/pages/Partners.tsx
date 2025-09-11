import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import partnersHero from "@/assets/partners-hero.jpg";
import quintetLogo from "@/assets/logos/quintet.svg";
import cigpLogo from "@/assets/logos/cigp.svg";
import antarcticaLogo from "@/assets/logos/antarctica.svg";
import delioLogo from "@/assets/logos/delio.svg";
import abboveLogo from "@/assets/logos/abbove.svg";
import aquitaraLogo from "@/assets/logos/aquitara.svg";

import firgunLogo from "@/assets/logos/firgun.svg";
import genevaTechnologiesLogo from "@/assets/logos/geneva-technologies.svg";
import golborneLogo from "@/assets/logos/golborne.svg";

const Partners = () => {
  // Scroll reveal animations for content elements
  const { ref: instHeaderRef, isVisible: instHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: instGridRef, isVisible: instGridVisible } = useScrollReveal(0.1, 200);
  const { ref: techHeaderRef, isVisible: techHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: techGridRef, isVisible: techGridVisible } = useScrollReveal(0.1, 200);
  const { ref: projHeaderRef, isVisible: projHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: projGridRef, isVisible: projGridVisible } = useScrollReveal(0.1, 200);
  const { ref: ctaHeaderRef, isVisible: ctaHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: ctaButtonRef, isVisible: ctaButtonVisible } = useScrollReveal(0.1, 200);

  // Basic SEO
  useEffect(() => {
    document.title = "Partners | ALMARA";
    const desc = "A curated network that amplifies outcomes. Institutional, technology, and project partners—activated selectively when it serves the mandate.";
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

  const logos: Record<string, string> = {
    "Beonti": "/lovable-uploads/ee8615d4-ce98-4f1c-a704-916cc74548ab.png",
    "Kyros Capital": "/lovable-uploads/7ca2ceb4-fa85-48a5-bdcf-a9354ea750a6.png",
    "UBP": "/lovable-uploads/75ca8d5a-9e04-492e-8048-83b8e15d144d.png",
    "CIGP": "/lovable-uploads/820b3f6d-6998-45f0-ae8e-b47197131b55.png",
    "Antarctica": "/lovable-uploads/21882ea6-ceb9-4b1c-a053-99616dc103cc.png",
    "Delio": "/lovable-uploads/3fc3d753-d5ff-4595-bce7-6272f9f9ccac.png",
    "Abbove": "/lovable-uploads/b10b396d-3422-4a4e-a8d6-106ce903a97e.png",
    "Aquitara": "/lovable-uploads/8ae18207-d04e-40bf-8988-daf09a9004ec.png",
    
    "Firgun Ventures": "/lovable-uploads/3e7ad95e-31d6-499c-86ae-69fbdaa5c3fb.png",
    "Geneva Technologies": "/lovable-uploads/fb70fc12-73d6-4b1a-966c-d2e15456ca28.png",
    "Golborne": "/lovable-uploads/5a2ca5d0-c530-438f-a901-3963ba8f89a7.png",
  };

  return (
    <div className="relative w-full min-h-screen almara-gradient-bg animate-fade-in">
      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Section 1: Our Partners - Hero with extended background including header */}
      <section className="min-h-screen flex flex-col bg-[hsl(var(--almara-light-text))] partners-gradient-bg relative py-16 sm:py-20">
        {/* Header with logo - now part of the section */}
        <header className="relative z-50 hidden lg:flex items-center justify-center pt-8 pb-4">
          <Link to="/" className="transition-opacity hover:opacity-80 relative z-50">
            <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
          </Link>
        </header>
        
        {/* Background Circle */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] max-w-[600px] max-h-[600px] min-w-[280px] min-h-[280px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] reveal-fade" style={{ animationDelay: '0.1s', animationFillMode: 'both' }} />
        
        {/* Main Content - Better centered in remaining space */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-lg text-center relative z-10 reveal-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
            <h1 className="font-museo-moderno text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-almara-light-text tracking-[0.05em] opacity-90 leading-tight">
              Our Partners
            </h1>
            <h2 className="font-helvetica-now text-base sm:text-lg md:text-xl tracking-wider font-bold text-[#364b56] mb-4 sm:mb-6">
              a curated network that amplifies outcomes
            </h2>
            <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
              <p className="leading-relaxed text-sm sm:text-base text-[#363636] font-helvetica-now">
                We collaborate with leading institutions, technology platforms, and project specialists—activated selectively, and only when it serves the mandate.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Institutional Partners */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div ref={instHeaderRef} className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${instHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-museo-moderno text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-[#364b56] mb-4 sm:mb-6">Institutional Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-sm sm:text-base max-w-[95%] sm:max-w-[85%] md:max-w-[70%] mx-auto">
              Banking and investment relationships that enable execution with discretion.
            </p>
          </div>

          <div ref={instGridRef} className={`transition-all duration-1000 ease-out ${instGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mb-6 sm:mb-8">
              {/* Top row - 3 items */}
              {[{
                name: "Beonti",
                longDesc: "Beonti is a consulting boutique in Luxembourg, advising firms across the alternative investment industry."
              }, {
                name: "Kyros Capital", 
                longDesc: "Kyros provides structured investment solutions, offering bankable and non-bankable products to global investors."
              }, {
                name: "UBP",
                longDesc: "Geneva-based UBP specializes in wealth and asset management, serving private and institutional clients worldwide."
              }].map(p => (
                <div key={p.name} className="relative group">
                  <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center w-full min-h-[120px] sm:min-h-[140px] hover:scale-105 active:scale-95">
                    <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className={`mx-auto h-10 sm:h-12 md:h-16 object-contain ${p.name === 'Beonti' ? 'scale-[2.36]' : p.name === 'Kyros Capital' ? 'scale-[2.25]' : ''}`} />
                  </button>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center" style={{
                    background: 'rgba(244, 234, 218, 0.14)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(13.2px)',
                    WebkitBackdropFilter: 'blur(13.2px)'
                  }}>
                    <h3 className="font-helvetica-now font-bold text-[#363636] text-sm mb-4 tracking-wide">{p.name}</h3>
                    <p className="font-helvetica-now text-[#363636] text-xs leading-relaxed">{p.longDesc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
              {/* Bottom row - 2 items */}
              {[{
                name: "CIGP",
                longDesc: "CIGP is an independent Geneva firm offering global wealth management and corporate finance advisory."
              }, {
                name: "Antarctica",
                longDesc: "Antarctica Asset Management delivers hedge fund and private equity solutions for institutions, family offices, and private banks."
              }].map(p => (
                <div key={p.name} className="relative group">
                  <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center w-full min-h-[120px] sm:min-h-[140px] hover:scale-105 active:scale-95">
                    <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-10 sm:h-12 md:h-16 object-contain" />
                  </button>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center" style={{
                    background: 'rgba(244, 234, 218, 0.14)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(13.2px)',
                    WebkitBackdropFilter: 'blur(13.2px)'
                  }}>
                    <h3 className="font-helvetica-now font-bold text-[#363636] text-sm mb-4 tracking-wide">{p.name}</h3>
                    <p className="font-helvetica-now text-[#363636] text-xs leading-relaxed">{p.longDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technology Partners */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div ref={techHeaderRef} className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${techHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-museo-moderno text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-[#364b56] mb-4 sm:mb-6">Technology Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-sm sm:text-base max-w-[95%] sm:max-w-[85%] mx-auto">
              Infrastructure for secure sourcing, governance, and reporting.
            </p>
          </div>

          <div ref={techGridRef} className={`grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto transition-all duration-1000 ease-out ${techGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[{
              name: "Delio",
              longDesc: "Delio offers a white-label platform that helps financial firms digitise and distribute private market investments."
            }, {
              name: "Abbove",
              longDesc: "Abbove provides a wealth-planning platform that consolidates client data into a single, structured view."
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center w-full min-h-[120px] sm:min-h-[140px] hover:scale-105 active:scale-95">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-10 sm:h-12 md:h-16 object-contain" />
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center" style={{
                  background: 'rgba(244, 234, 218, 0.14)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(13.2px)',
                  WebkitBackdropFilter: 'blur(13.2px)'
                }}>
                  <h3 className="font-helvetica-now font-bold text-[#363636] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#363636] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Project Partners */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div ref={projHeaderRef} className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${projHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-museo-moderno text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-[#364b56] mb-4 sm:mb-6">Project Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-sm sm:text-base max-w-[95%] sm:max-w-[85%] mx-auto">
              Specialists we mobilise for specific mandates.
            </p>
          </div>

          <div ref={projGridRef} className={`transition-all duration-1000 ease-out ${projGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto mb-6 sm:mb-8">
              {/* Top row - 2 items */}
              {[{
                name: "Aquitara",
                longDesc: "Aquitara (via 5I2 Capital) invests in remediating Agent Orange–contaminated land in Vietnam and developing renewable-energy eco-parks."
              }, {
                name: "Firgun Ventures",
                longDesc: "A $250M VC firm investing in series A/B Quantum Scaleups."
              }].map(p => (
                <div key={p.name} className="relative group">
                  <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center w-full hover:scale-105 active:scale-95">
                    <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-10 sm:h-12 md:h-16 object-contain" />
                  </button>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center" style={{
                    background: 'rgba(244, 234, 218, 0.14)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(13.2px)',
                    WebkitBackdropFilter: 'blur(13.2px)'
                  }}>
                    <h3 className="font-helvetica-now font-bold text-[#363636] text-sm mb-4 tracking-wide">{p.name}</h3>
                    <p className="font-helvetica-now text-[#363636] text-xs leading-relaxed">{p.longDesc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto">
              {/* Bottom row - 2 items */}
              {[{
                name: "Geneva Technologies",
                longDesc: "Genève Technologies builds machine learning–based trading strategies, extracting alpha from global markets through proprietary AI models."
              }, {
                name: "Golborne",
                longDesc: "Golborne Capital offers secured private credit to SMEs and growth firms, often as first institutional lender, focused on preservation and niche opportunities."
              }].map(p => (
                <div key={p.name} className="relative group">
                  <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 text-center w-full hover:scale-105 active:scale-95">
                    <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-10 sm:h-12 md:h-16 object-contain" />
                  </button>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center" style={{
                    background: 'rgba(244, 234, 218, 0.14)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(13.2px)',
                    WebkitBackdropFilter: 'blur(13.2px)'
                  }}>
                    <h3 className="font-helvetica-now font-bold text-[#363636] text-sm mb-4 tracking-wide">{p.name}</h3>
                    <p className="font-helvetica-now text-[#363636] text-xs leading-relaxed">{p.longDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 relative z-50">
          <div ref={ctaHeaderRef} className={`space-y-6 sm:space-y-8 relative z-50 transition-all duration-1000 ease-out ${ctaHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-long-cang text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[46px] text-[#364b56] tracking-[0.05em] opacity-90 leading-tight font-thin uppercase rotate-[1deg] sm:rotate-[3deg] relative z-50 px-4">
              Tell us what you're building,<br />
              we'll assemble the right team
            </h2>
          </div>
          <div ref={ctaButtonRef} className={`pt-6 sm:pt-8 relative z-50 transition-all duration-1000 ease-out ${ctaButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button variant="call-footer" size="call" className="font-helvetica-now relative z-50 text-sm sm:text-base">
              request a call
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partners;