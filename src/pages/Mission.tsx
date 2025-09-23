import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Mission = () => {
  // Scroll reveal animations
  const { ref: pillarsHeaderRef, isVisible: pillarsHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: pillarsContentRef, isVisible: pillarsContentVisible } = useScrollReveal(0.1, 200);
  const { ref: practiceHeaderRef, isVisible: practiceHeaderVisible } = useScrollReveal(0.1, 100);
  const { ref: practiceGridRef, isVisible: practiceGridVisible } = useScrollReveal(0.1, 200);

  // SEO meta tags for Mission page
  useEffect(() => {
    document.title = "Our Mission | ALMARA Alternative Asset Investment";
    const desc = "Our mission: Providing tailored alternative asset investment solutions with expertise, integrity, and a long-term perspective. Discover our core pillars and approach.";
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
  }, []);
  return <div className="relative w-full min-h-screen almara-gradient-bg no-overlay animate-fade-in">
      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Header with Logo (desktop only) - now part of first section */}
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
      {/* Section 1 — Our Mission (includes header) */}
      <section className="h-screen flex flex-col px-4 sm:px-6 lg:px-12 mission-section-gradient">
        <header className="relative z-50 hidden lg:flex items-center justify-center pt-8 pb-4">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src={`${import.meta.env.BASE_URL}lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png`} alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-lg text-center space-y-4 sm:space-y-6 lg:space-y-8 reveal-up" style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
            <h1 className="font-museo-moderno almara-h1-mobile text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">Our Mission</h1>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <p className="leading-relaxed almara-body-mobile lg:text-base text-[#f4eada] font-helvetica-now">
                We bring intention, vision and clarity to foster balanced growth, with kindness and compassion.
              </p>
              <p className="leading-relaxed almara-body-mobile lg:text-base text-[#f4eada] font-helvetica-now">
                Almara pairs wisdom with execution: grounded judgment, simple structures, and a quiet, steady core that guides how we steward capital, culture, and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Pillars */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 mission-section-gradient">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-transparent via-gray-600/30 to-gray-700/60 rounded-3xl px-4 sm:px-6 md:px-12 lg:px-[120px] py-6 sm:py-8 md:py-12 lg:py-[58px] backdrop-blur-sm">
          <div ref={pillarsHeaderRef} className={`text-center mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ease-out ${pillarsHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-museo-moderno almara-h1-mobile text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight mb-4 sm:mb-6 lg:mb-8">Our Pillars</h2>
          </div>
          <div ref={pillarsContentRef} className={`space-y-4 sm:space-y-6 lg:space-y-8 font-helvetica-now text-[#f4eada] transition-all duration-1000 ease-out ${pillarsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <article className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb]">wisdom</h3>
              <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed max-w-sm mx-auto">Experience distilled into judgment. We prioritise signal over noise and the long term over the immediate.</p>
            </article>
            <article className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb]">grounded</h3>
              <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed max-w-sm mx-auto">Calm, practical, reality-first. We work with what is, then shape what can be.</p>
            </article>
            <article className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb]">simple</h3>
              <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed max-w-sm mx-auto">Clarity is a discipline. We focus on the essence and remove what doesn't serve.</p>
            </article>
            <article className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#b3bacb]">spirituality</h3>
              <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed max-w-sm mx-auto">Meaning and care in action. Compassion and responsibility inform decisions.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 — In Practice */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 mission-section-gradient">
        <div className="max-w-6xl mx-auto">
          <div ref={practiceHeaderRef} className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${practiceHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-museo-moderno almara-h1-mobile text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">In Practice</h2>
          </div>
          <div ref={practiceGridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 font-helvetica-now text-[#f4eada] transition-all duration-1000 ease-out ${practiceGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">clarity first</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">We define purpose, constraints, and desired outcomes before we act.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">balance</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">We hold risk/return and time/impact in healthy tension.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">simplicity as rigour</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">We believe in fewer moving parts, tighter governance, better decisions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">exploration & creativity</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">We focus on research, first principles, new lenses.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">community & belonging</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">Through trusted circles, shared knowledge, aligned action.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)'
              }} />
              <div>
                <h3 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold mb-2 sm:mb-3 lg:mb-4 text-[#b3bacb]">materiality · play</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base leading-relaxed text-[#f4eada]">We respect the tangible and the felt, and keep our minds open.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>;
};
export default Mission;