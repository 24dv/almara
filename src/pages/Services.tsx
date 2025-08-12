import { PageLayout } from "@/components/PageLayout";
import servicesHero from "@/assets/services-hero.jpg";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <PageLayout title="Services">
      {/* Banner 1 — Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-16 pb-10">
        <div className="mb-10 rounded-lg overflow-hidden">
          <img
            src={servicesHero}
            alt="ALMARA services hero"
            className="w-full h-64 object-cover opacity-80"
            loading="eager"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-helvetica-now text-almara-dark-text text-center mb-4">
          Services
        </h1>
        <p className="text-base md:text-lg text-almara-dark-text/80 font-helvetica-now text-center max-w-3xl mx-auto leading-relaxed">
          Family office, alternatives, M&A, and art advisory—delivered through ongoing counsel and mandate-led execution.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="call" size="call" className="font-helvetica-now">
            request a call
          </Button>
        </div>
      </section>

      {/* Banner 2 — What We Do */}
      <section aria-labelledby="what-we-do" className="max-w-6xl mx-auto px-8 py-12">
        <h2 id="what-we-do" className="sr-only">
          What we do
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Family Office</h3>
            <p className="text-almara-dark-text/80 leading-relaxed mb-4">
              We design the architecture of bespoke wealth solutions—aligning asset management and wealth structuring.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
              <li>Structural design: holdings, governance, succession (multi-jurisdictional)</li>
              <li>Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting</li>
              <li>Consolidated view: periodic reviews, risk monitoring, cadence and accountability</li>
            </ul>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Alternatives</h3>
            <p className="text-almara-dark-text/80 leading-relaxed mb-4">
              Where opportunity meets access. Curated exposure across private markets.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
              <li>Private Equity & Venture Capital</li>
              <li>Private Debt & Hedge Funds</li>
              <li>Structured Products & Litigation Funding</li>
              <li>Real Estate & Specialty Assets</li>
            </ul>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Capital & M&A</h3>
            <p className="text-almara-dark-text/80 leading-relaxed mb-4">
              Connecting capital and opportunity—quietly and effectively.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
              <li>Capital introductions: institutions, family offices, select co-investors</li>
              <li>M&A support: buy-side/sell-side, valuation, diligence, negotiations</li>
              <li>Execution with partners: targeted boutiques and global advisors where appropriate</li>
            </ul>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Art Advisory</h3>
            <p className="text-almara-dark-text/80 leading-relaxed mb-4">
              Beyond collection management—insider access to expertise and institutions.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
              <li>Acquisition & valuation: market intelligence, authenticity, pricing</li>
              <li>Conservation & succession: preservation strategies, estate integration</li>
              <li>Placement & financing: loans, insurance, art lending, gallery/museum relationships</li>
              <li>Infrastructure: collection-management systems and bespoke reporting</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Banner 3 — How We Work */}
      <section aria-labelledby="how-we-work" className="max-w-5xl mx-auto px-8 py-12">
        <h2 id="how-we-work" className="text-2xl md:text-3xl font-helvetica-now text-almara-dark-text text-center mb-8">
          How we work
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Ongoing counsel</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              We stay close to your world—anticipating needs, coordinating specialists, and maintaining oversight.
            </p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Mandate-led execution</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              When opportunities arise, we mobilise the right people and drive transactions to completion.
            </p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Orchestrated network</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts—curated and managed by us.
            </p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Who we work with</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              Principals & families · Entrepreneurial investors · Fund managers
            </p>
          </article>
        </div>

        <div className="mt-8 space-y-6">
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Perspective</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              Grounded in research and culture. Ties with leading academic institutions (including London Business School and the Sorbonne). We support initiatives that strengthen democracy, the rule of law, European integration, and humanistic thinking—and maintain close connections to contemporary visual and performance art.
            </p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Discretion & access</h3>
            <p className="text-almara-dark-text/80 leading-relaxed">
              We collaborate with leading institutions and boutiques. References available on request.
            </p>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="call" size="call" className="font-helvetica-now">
            request a call
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
