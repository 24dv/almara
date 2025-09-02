import { PageLayout } from "@/components/PageLayout";
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
  return <PageLayout title="Services">
      {/* Banner 1 — Page Intro */}
      <section className="h-screen flex items-center px-12 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <h1 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">SERVICES</h1>
            <p className="leading-relaxed text-base px-[40px] text-[#f4eada] font-helvetica-now max-w-2xl mx-auto md:mx-0">
              Family office, alternatives, M&A, and art advisory—delivered through ongoing counsel and mandate-led execution.
            </p>
          </div>
          <figure className="mt-6 md:mt-0">
            <img src={servicesHero} alt="ALMARA services overview hero mockup" loading="lazy" className="mx-auto md:ml-auto rounded-xl shadow-xl w-full max-w-2xl h-auto object-cover" />
          </figure>
        </div>
      </section>

      {/* Banner 2 — How We Work */}
      <section className="px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-helvetica-now text-[#363636]">
            <article className="space-y-3">
              <h3 className="text-lg text-[#364b56]">Ongoing counsel</h3>
              <p className="leading-relaxed">
                We stay close to your world—anticipating needs, coordinating specialists, and maintaining oversight.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-lg text-[#364b56]">Mandate-led execution</h3>
              <p className="leading-relaxed">
                When opportunities arise, we mobilise the right people and drive transactions to completion.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-lg text-[#364b56]">Orchestrated network</h3>
              <p className="leading-relaxed">
                Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts—curated and managed by us.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Banner 3 — What We Do (Cards) */}
      <section className="px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">What We Do</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Family Office */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-[#364b56] mb-4">Family Office</h3>
              <p className="text-[#363636] leading-relaxed mb-4">
                We design the architecture of bespoke wealth solutions—aligning asset management and wealth structuring.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#363636]">
                <li>Structural design: holdings, governance, succession (multi-jurisdictional)</li>
                <li>Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting</li>
                <li>Consolidated view: periodic reviews, risk monitoring, cadence and accountability</li>
              </ul>
            </article>

            {/* Alternatives */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-[#364b56] mb-4">Alternatives</h3>
              <p className="text-[#363636] leading-relaxed mb-4">
                Where opportunity meets access. Curated exposure across private markets.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#363636]">
                <li>Private Equity & Venture Capital</li>
                <li>Private Debt & Hedge Funds</li>
                <li>Structured Products & Litigation Funding</li>
                <li>Real Estate & Specialty Assets</li>
              </ul>
            </article>

            {/* Capital & M&A */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-[#364b56] mb-4">Capital Introduction & M&A</h3>
              <p className="text-[#363636] leading-relaxed mb-4">
                Connecting capital and opportunity—quietly and effectively.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#363636]">
                <li>Capital introductions: institutions, family offices, and select co-investors</li>
                <li>M&A support: buy-side/sell-side, valuation, diligence, negotiations</li>
                <li>Execution with partners: targeted boutiques and global advisors where appropriate</li>
              </ul>
            </article>

            {/* Art Advisory */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-[#364b56] mb-4">Art Advisory</h3>
              <p className="text-[#363636] leading-relaxed mb-4">
                Beyond collection management—insider access to expertise and institutions.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#363636]">
                <li>Acquisition & valuation: market intelligence, authenticity, pricing</li>
                <li>Conservation & succession: preservation strategies, estate integration</li>
                <li>Placement & financing: loans, insurance, art lending, gallery/museum relationships</li>
                <li>Infrastructure: collection-management systems and bespoke reporting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Banner 7 — Perspective */}
      <section className="px-12 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 font-helvetica-now">
          <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Perspective</h2>
          <p className="leading-relaxed text-base text-[#f4eada]">
            Our work is grounded in research and culture. We maintain close ties with leading academic institutions (including London Business School and the Sorbonne) and support initiatives that strengthen democracy, the rule of law, European integration, and humanistic thinking. We also maintain close connections to contemporary visual and performance art.
          </p>
        </div>
      </section>

      {/* Banner 8 — Who We Work With (optional) */}
      <section className="px-12 py-20 bg-almara-dark-text/5">
        <div className="max-w-4xl mx-auto text-center space-y-6 font-helvetica-now">
          <h2 className="font-museo-moderno text-[24px] lg:text-[28px] text-[#363636]">Who We Work With</h2>
          <p className="text-[#363636]">Principals & Families · Entrepreneurial Investors · Fund Managers</p>
        </div>
      </section>

      {/* Banner 9 — Discretion & Access */}
      <section className="px-12 py-20">
        <div className="max-w-3xl mx-auto text-center font-helvetica-now space-y-6">
          <h2 className="font-museo-moderno text-[24px] lg:text-[28px] text-[#363636]">Discretion & Access</h2>
          <p className="leading-relaxed text-base text-[#f4eada]">
            We collaborate with leading institutions and boutiques. References available on request.
          </p>
        </div>
      </section>

      {/* Banner 10 — CTA */}
      <section className="px-12 py-28">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-[#363636]">Request a conversation</h2>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now">
            Let’s align around your objectives and define where ongoing counsel and targeted mandates can create the most leverage.
          </p>
          <div className="pt-4">
            <Button variant="call" size="call" className="font-helvetica-now">request a call</Button>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default Services;