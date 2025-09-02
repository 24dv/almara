import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import partnersHero from "@/assets/partners-hero.jpg";
import quintetLogo from "@/assets/logos/quintet.svg";
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
    "Quintet": "/lovable-uploads/ff5b3eb0-a20e-4240-91a7-affd5dff85fd.png",
    "Degroof Petercam": "/lovable-uploads/c3574845-89ba-40fc-92f2-8bb1b34e4b56.png",
    "UBP": "/lovable-uploads/75ca8d5a-9e04-492e-8048-83b8e15d144d.png",
    "CIGP": "/lovable-uploads/820b3f6d-6998-45f0-ae8e-b47197131b55.png",
    "Antarctica": "/lovable-uploads/21882ea6-ceb9-4b1c-a053-99616dc103cc.png",
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
      {/* Header with cream background */}
      <header className="relative z-10 hidden lg:flex items-center justify-center pt-8 pb-4 bg-[hsl(var(--almara-light-text))]">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" />
        </Link>
      </header>

      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Section 1: Our Partners - Hero */}
      <section className="h-screen flex items-center justify-center bg-[hsl(var(--almara-light-text))] partners-gradient-bg relative">        
        {/* Background Circle */}
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] min-w-[320px] min-h-[320px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5]" />
        
        {/* Main Content - Centered in circle */}
        <div className="flex items-center justify-center px-12 py-20 relative z-10">
          <div className="max-w-lg text-center relative z-10">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="font-museo-moderno text-[32px] lg:text-[36px] text-almara-light-text tracking-[0.05em] opacity-90 leading-tight">
                Our Partners
              </h1>
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56] mb-6">
                a curated network that amplifies outcomes
              </h2>
              <div className="mx-auto">
                <p className="leading-relaxed text-sm lg:text-base text-[#363636] font-helvetica-now">
                  We collaborate with leading institutions, technology platforms, and project specialists—activated selectively, and only when it serves the mandate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Institutional Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#364b56] mb-6">Institutional Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-lg">
              Banking and investment relationships that enable execution with discretion.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-3 max-w-3xl mx-auto mb-8">
            {/* Top row - 3 items */}
            {[{
              name: "Quintet",
              longDesc: "Luxembourg-based Quintet offers private banking, wealth planning, and investment services across Europe and the UK."
            }, {
              name: "Degroof Petercam", 
              longDesc: "Belgium's Degroof Petercam provides private banking, corporate finance, and asset management with over €50 billion under management."
            }, {
              name: "UBP",
              longDesc: "Geneva-based UBP specializes in wealth and asset management, serving private and institutional clients worldwide."
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-8 py-12 text-center w-full">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-16 object-contain" />
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#364b56]/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center">
                  <h3 className="font-helvetica-now font-bold text-[#f4eada] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#f4eada] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid gap-8 grid-cols-2 max-w-lg mx-auto">
            {/* Bottom row - 2 items */}
            {[{
              name: "CIGP",
              longDesc: "CIGP is an independent Geneva firm offering global wealth management and corporate finance advisory."
            }, {
              name: "Antarctica",
              longDesc: "Antarctica Asset Management delivers hedge fund and private equity solutions for institutions, family offices, and private banks."
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-8 py-12 text-center w-full">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-16 object-contain" />
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#364b56]/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center">
                  <h3 className="font-helvetica-now font-bold text-[#f4eada] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#f4eada] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technology Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#364b56] mb-6">Technology Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-lg">
              Infrastructure for secure sourcing, governance, and reporting.
            </p>
          </div>

          <div className="grid gap-12 grid-cols-2 max-w-2xl mx-auto">
            {[{
              name: "Delio",
              longDesc: "Private markets distribution platform"
            }, {
              name: "Abbove",
              longDesc: "Wealth data and consolidated oversight"
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-12 py-16 text-center w-full">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-14 object-contain mb-6" />
                  <span className="block text-2xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#364b56]/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center">
                  <h3 className="font-helvetica-now font-bold text-[#f4eada] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#f4eada] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Project Partners */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#364b56] mb-6">Project Partners</h2>
            <p className="font-helvetica-now text-[#363636] text-lg">
              Specialists we mobilise for specific mandates.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-3 max-w-3xl mx-auto mb-8">
            {/* Top row - 3 items */}
            {[{
              name: "Aquitara",
              longDesc: "Sector specialist / advisory"
            }, {
              name: "Deminor",
              longDesc: "Investor services / claims strategy"
            }, {
              name: "Firgun",
              longDesc: "Venture / innovation initiatives"
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-8 py-12 text-center w-full">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                  <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#364b56]/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center">
                  <h3 className="font-helvetica-now font-bold text-[#f4eada] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#f4eada] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid gap-8 grid-cols-2 max-w-lg mx-auto">
            {/* Bottom row - 2 items */}
            {[{
              name: "Geneva Technologies",
              longDesc: "Technology / engineering expertise"
            }, {
              name: "Golborne",
              longDesc: "Corporate advisory"
            }].map(p => (
              <div key={p.name} className="relative group">
                <button className="bg-transparent text-[#f4eada] rounded-xl almara-call-btn relative z-[100] transition-all px-8 py-12 text-center w-full">
                  <img src={logos[p.name]} alt={`${p.name} logo`} loading="lazy" className="mx-auto h-12 object-contain mb-4" />
                  <span className="block text-xl tracking-wide text-[#364b56] font-medium">{p.name}</span>
                </button>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#364b56]/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200] p-6 flex flex-col justify-center">
                  <h3 className="font-helvetica-now font-bold text-[#f4eada] text-sm mb-4 tracking-wide">{p.name}</h3>
                  <p className="font-helvetica-now text-[#f4eada] text-xs leading-relaxed">{p.longDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="h-screen flex items-center justify-center px-12 py-20 bg-[hsl(var(--almara-light-text))] partners-gradient-bg">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-8">
            <h2 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[46px] text-[#364b56] tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl uppercase rotate-[3deg]">
              Tell us what you're building,<br />
              we'll assemble the right team
            </h2>
          </div>
          <div className="pt-8">
            <Button variant="call-footer" size="call" className="font-helvetica-now relative z-10">
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