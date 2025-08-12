import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect } from "react";

const Partners = () => {
  // Basic SEO
  useEffect(() => {
    document.title = "Partners | ALMARA";
    const desc =
      "A curated network that amplifies outcomes. Institutional, technology, and project partners—activated selectively when it serves the mandate.";
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
    <PageLayout title="Partners">
      {/* Banner 1 — Hero / Orientation */}
      <section className="h-screen flex items-center justify-center px-12 py-20">
        <div className="max-w-3xl text-center space-y-16">
          <h1 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">
            Partners
          </h1>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now max-w-2xl mx-auto px-[40px]">
            A curated network that amplifies outcomes.
          </p>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now max-w-2xl mx-auto px-[40px]">
            We collaborate with leading institutions, technology platforms, and project specialists—activated selectively, and only when it serves the mandate.
          </p>

        </div>
      </section>

      {/* Banner 2 — Institutional Partners */}
      <section className="px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-14">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Institutional Partners</h2>
            <p className="font-helvetica-now text-almara-dark-text/80">
              Banking and investment relationships that enable execution with discretion.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: "Quintet", desc: "Private banking & investment services" },
                { name: "Degroof Petercam", desc: "Wealth & asset management" },
                { name: "UBP", desc: "Institutional investment capabilities" },
                { name: "CIGP", desc: "Investment advisory & corporate finance" },
                { name: "Antarctica", desc: "Specialised investment platform" },
              ].map((p) => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 border border-white/20 text-center cursor-default">
                      <span className="block text-lg tracking-wide text-almara-dark-text">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          <p className="text-center mt-6 text-xs text-almara-dark-text/60 font-helvetica-now">
            Representative relationships shown; additional references available on request.
          </p>
        </div>
      </section>

      {/* Banner 3 — Technology Partners */}
      <section className="px-12 py-24 bg-almara-dark-text/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Technology Partners</h2>
            <p className="font-helvetica-now text-almara-dark-text/80">
              Infrastructure for secure sourcing, governance, and reporting.
            </p>
          </div>

          <TooltipProvider>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {[
                { name: "Delio", desc: "Private markets distribution platform" },
                { name: "Abbove", desc: "Wealth data and consolidated oversight" },
              ].map((p) => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-10 py-12 border border-white/20 text-center cursor-default min-w-[220px]">
                      <span className="block text-2xl tracking-wide text-almara-dark-text">{p.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="font-helvetica-now text-sm">
                    {p.name} — {p.desc}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          <p className="text-center mt-6 text-xs text-almara-dark-text/60 font-helvetica-now">
            Used selectively to streamline private markets distribution, data, and consolidated oversight.
          </p>
        </div>
      </section>

      {/* Banner 4 — Project Partners */}
      <section className="px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-14">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Project Partners</h2>
            <p className="font-helvetica-now text-almara-dark-text/80">
              Specialists we mobilise for specific mandates.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: "Aquitara", desc: "Sector specialist / advisory" },
                { name: "Deminor", desc: "Investor services / claims strategy" },
                { name: "Firgun", desc: "Venture / innovation initiatives" },
                { name: "Geneva Technologies", desc: "Technology / engineering expertise" },
                { name: "Golborne", desc: "Corporate advisory" },
              ].map((p) => (
                <Tooltip key={p.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 border border-white/20 text-center cursor-default">
                      <span className="block text-lg tracking-wide text-almara-dark-text">{p.name}</span>
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

      {/* Banner 5 — CTA */}
      <section className="px-12 py-28 bg-almara-dark-text/5">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Put the network to work</h2>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now">
            Tell us what you’re building; we’ll assemble the right team.
          </p>
          <div className="pt-2">
            <Button variant="call" size="call" className="font-helvetica-now">request a conversation</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
