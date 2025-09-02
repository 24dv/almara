import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { useEffect } from "react";

const Mission = () => {
  // SEO
  useEffect(() => {
    document.title = "Mission | ALMARA";
    const desc = "We bring intention, vision and clarity to foster balanced growth—with kindness and compassion.";
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
      
      {/* Header with Logo (desktop only) - now part of first section */}
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
      {/* Section 1 — Our Mission (includes header) */}
      <section className="h-screen flex flex-col px-8 lg:px-12 mission-section-gradient">
        <header className="relative z-10 hidden lg:flex items-center justify-center pt-8 pb-4">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-lg text-center space-y-8">
            <h1 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">Our Mission</h1>
            <div className="space-y-6">
              <p className="leading-relaxed text-sm lg:text-base text-[#f4eada] font-helvetica-now">
                We bring intention, vision and clarity to foster balanced growth, with kindness and compassion.
              </p>
              <p className="leading-relaxed text-sm lg:text-base text-[#f4eada] font-helvetica-now">
                Almara pairs wisdom with execution: grounded judgment, simple structures, and a quiet, steady core that guides how we steward capital, culture, and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Pillars */}
      <section className="h-screen flex items-center justify-center px-8 lg:px-12 mission-section-gradient">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-purple-400 px-8 py-4 mb-12">
              <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">Our Pillars</h2>
            </div>
          </div>
          <div className="space-y-12 font-helvetica-now text-[#f4eada]">
            <article className="text-center space-y-4">
              <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#f4eada]">wisdom</h3>
              <p className="text-base leading-relaxed">Experience distilled into judgment. We prioritise signal over noise and the long term over the immediate.</p>
            </article>
            <article className="text-center space-y-4">
              <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#f4eada]">grounded</h3>
              <p className="text-base leading-relaxed">Calm, practical, reality-first. We work with what is, then shape what can be.</p>
            </article>
            <article className="text-center space-y-4">
              <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#f4eada]">simple</h3>
              <p className="text-base leading-relaxed">Clarity is a discipline. We focus on the essence and remove what doesn't serve.</p>
            </article>
            <article className="text-center space-y-4">
              <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#f4eada]">spirituality</h3>
              <p className="text-base leading-relaxed">Meaning and care in action. Compassion and responsibility inform decisions.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 — In Practice */}
      <section className="h-screen flex items-center justify-center px-8 lg:px-12 mission-section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight">In Practice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 font-helvetica-now text-[#f4eada]">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">clarity first</h3>
                <p className="text-sm leading-relaxed">We define purpose, constraints, and desired outcomes before we act.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">balance</h3>
                <p className="text-sm leading-relaxed">We hold risk/return and time/impact in healthy tension.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">simplicity as rigour</h3>
                <p className="text-sm leading-relaxed">We believe in fewer moving parts, tighter governance, better decisions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">exploration & creativity</h3>
                <p className="text-sm leading-relaxed">We focus on research, first principles, new lenses.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">community & belonging</h3>
                <p className="text-sm leading-relaxed">Through trusted circles, shared knowledge, aligned action.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 rounded-full bg-[#5d717b] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#f4eada]">materiality · sensitivity · play</h3>
                <p className="text-sm leading-relaxed">We respect the tangible and the felt, and keep our minds open.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mission;