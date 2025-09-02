import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import partnersHero from "@/assets/partners-hero.jpg";
import quintetLogo from "@/assets/logos/quintet.svg";
import degroofPetercamLogo from "@/assets/logos/degroof-petercam.svg";
import ubpLogo from "@/assets/logos/ubp.svg";
import cigpLogo from "@/assets/logos/cigp.svg";
import antarcticaLogo from "@/assets/logos/antarctica.svg";
import delioLogo from "@/assets/logos/delio.svg";
import abboveLogo from "@/assets/logos/abbove.svg";
import aquitaraLogo from "@/assets/logos/aquitara.svg";
import deminorLogo from "@/assets/logos/deminor.svg";
import firgunLogo from "@/assets/logos/firgun.svg";
import genevaTechnologiesLogo from "@/assets/logos/geneva-technologies.svg";
import golborneLogo from "@/assets/logos/golborne.svg";

const Partners = () => {
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
    "Quintet": quintetLogo,
    "Degroof Petercam": degroofPetercamLogo,
    "UBP": ubpLogo,
    "CIGP": cigpLogo,
    "Antarctica": antarcticaLogo,
    "Delio": delioLogo,
    "Abbove": abboveLogo,
    "Aquitara": aquitaraLogo,
    "Deminor": deminorLogo,
    "Firgun": firgunLogo,
    "Geneva Technologies": genevaTechnologiesLogo,
    "Golborne": golborneLogo,
  };

  return (
    <div className="relative w-full min-h-screen almara-gradient-bg">
      {/* Section 1: Our Partners - Hero (includes header) */}
      <section className="h-screen flex flex-col bg-almara-cream">
        {/* Navigation - fixed positioned at same height as home page */}
        <Navigation positioning="fixed" />

        {/* Mobile Header/Menu */}
        <MobileMenu />
        
        {/* Header with Logo (desktop only) */}
        <header className="relative z-10 hidden lg:flex items-center justify-center pt-8 pb-4">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
          </Link>
        </header>
        
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-12 py-20">
          <div className="max-w-4xl text-center relative">
            {/* Large background circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>
            </div>
            
            {/* Content over the circle */}
            <div className="relative z-10 space-y-8">
              <h1 className="font-long-cang text-[48px] lg:text-[56px] text-almara-light-text tracking-[0.05em] opacity-90 leading-tight font-thin">
                Our Partners
              </h1>
              <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#364b56] mb-8">
                a curated network that amplifies outcomes
              </h2>
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="leading-relaxed text-base text-[#364b56] font-helvetica-now">
                  We collaborate with leading institutions, technology platforms, and project specialists—activated selectively, and only when it serves the mandate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Institutional Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-almara-cream">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[36px] lg:text-[42px] text-[#364b56] mb-6">Institutional Partners</h2>
            <p className="font-helvetica-now text-[#364b56] text-lg">
              Banking and investment relationships that enable execution with discretion.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid gap-8 grid-cols-3 max-w-3xl mx-auto mb-8">
              {/* Top row - 3 items */}
              {[{
                name: "Quintet",
                desc: "Private banking & investment services"
              }, {
                name: "Degroof Petercam", 
                desc: "Wealth & asset management"
              }, {
                name: "UBP",
                desc: "Institutional investment capabilities"
              }].map(p => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-12 border border-white/30 text-center cursor-default shadow-lg">
                      <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                      <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            
            <div className="grid gap-8 grid-cols-2 max-w-lg mx-auto">
              {/* Bottom row - 2 items */}
              {[{
                name: "CIGP",
                desc: "Investment advisory & corporate finance"
              }, {
                name: "Antarctica",
                desc: "Specialised investment platform"
              }].map(p => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-12 border border-white/30 text-center cursor-default shadow-lg">
                      <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                      <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Section 3: Technology Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-almara-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[36px] lg:text-[42px] text-[#364b56] mb-6">Technology Partners</h2>
            <p className="font-helvetica-now text-[#364b56] text-lg">
              Infrastructure for secure sourcing, governance, and reporting.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid gap-12 grid-cols-2 max-w-2xl mx-auto">
              {[{
                name: "Delio",
                desc: "Private markets distribution platform"
              }, {
                name: "Abbove",
                desc: "Wealth data and consolidated oversight"
              }].map(p => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-12 py-16 border border-white/30 text-center cursor-default shadow-lg">
                      <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-14 object-contain mb-6" />
                      <span className="block text-2xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Section 4: Project Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-almara-cream">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[36px] lg:text-[42px] text-[#364b56] mb-6">Project Partners</h2>
            <p className="font-helvetica-now text-[#364b56] text-lg">
              Specialists we mobilise for specific mandates.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid gap-8 grid-cols-3 max-w-3xl mx-auto mb-8">
              {/* Top row - 3 items */}
              {[{
                name: "Aquitara",
                desc: "Sector specialist / advisory"
              }, {
                name: "Deminor",
                desc: "Investor services / claims strategy"
              }, {
                name: "Firgun",
                desc: "Venture / innovation initiatives"
              }].map(p => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-12 border border-white/30 text-center cursor-default shadow-lg">
                      <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                      <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            
            <div className="grid gap-8 grid-cols-2 max-w-lg mx-auto">
              {/* Bottom row - 2 items */}
              {[{
                name: "Geneva Technologies",
                desc: "Technology / engineering expertise"
              }, {
                name: "Golborne",
                desc: "Corporate advisory"
              }].map(p => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-12 border border-white/30 text-center cursor-default shadow-lg">
                      <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                      <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-almara-cream">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="font-long-cang text-[32px] lg:text-[36px] text-[#364b56] tracking-wider leading-tight uppercase">
              Tell us what you're building,<br />
              we'll assemble the right team
            </h2>
          </div>
          <div className="pt-8">
            <Button variant="call" size="call" className="font-helvetica-now text-xl px-16 py-6">
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