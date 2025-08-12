import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <PageLayout title="Services">
      {/* Banner 1 — Hero (above the fold) */}
      <section className="h-screen flex items-center justify-center px-12 py-20">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl text-almara-dark-text font-helvetica-now">
            Services
          </h1>
          <p className="text-base md:text-lg text-almara-dark-text/80 font-helvetica-now leading-relaxed">
            Family office, alternatives, M&A, and art advisory—delivered through ongoing counsel and mandate-led execution.
          </p>
          <div className="pt-2">
            <Button variant="call" size="call" className="font-helvetica-now">
              request a call
            </Button>
          </div>
        </div>
      </section>

      {/* Banner 2 — What We Do (four cards) */}
      <section aria-labelledby="what-we-do" className="px-12 py-24 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 id="what-we-do" className="text-center text-2xl md:text-3xl text-almara-dark-text font-helvetica-now mb-12">
            What we do
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Family Office</h3>
              <p className="text-almara-dark-text/80 leading-relaxed mb-5">
                We design the architecture of bespoke wealth solutions—aligning asset management and wealth structuring.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
                <li>Structural design: holdings, governance, succession (multi-jurisdictional)</li>
                <li>Coordination & oversight: investment managers, tax & legal, financing, accounting, audit, reporting</li>
                <li>Consolidated view: periodic reviews, risk monitoring, cadence and accountability</li>
              </ul>
            </article>

            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Alternatives</h3>
              <p className="text-almara-dark-text/80 leading-relaxed mb-5">
                Where opportunity meets access. Curated exposure across private markets.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
                <li>Private Equity & Venture Capital</li>
                <li>Private Debt & Hedge Funds</li>
                <li>Structured Products & Litigation Funding</li>
                <li>Real Estate & Specialty Assets</li>
              </ul>
            </article>

            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Capital & M&A</h3>
              <p className="text-almara-dark-text/80 leading-relaxed mb-5">
                Connecting capital and opportunity—quietly and effectively.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-almara-dark-text/80">
                <li>Capital introductions: institutions, family offices, select co-investors</li>
                <li>M&A support: buy-side/sell-side, valuation, diligence, negotiations</li>
                <li>Execution with partners: targeted boutiques and global advisors where appropriate</li>
              </ul>
            </article>

            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-3">Art Advisory</h3>
              <p className="text-almara-dark-text/80 leading-relaxed mb-5">
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
        </div>
      </section>

      {/* Banner 3 — How We Work (clean typography) */}
      <section aria-labelledby="how-we-work" className="px-12 py-24 border-t border-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 id="how-we-work" className="text-center text-2xl md:text-3xl text-almara-dark-text font-helvetica-now mb-16">
            How we work
          </h2>

          <div className="space-y-12 font-helvetica-now">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Ongoing counsel</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                We stay close to your world—anticipating needs, coordinating specialists, and maintaining oversight.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Mandate-led execution</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                When opportunities arise, we mobilise the right people and drive transactions to completion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Orchestrated network</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Discreet access to private banks, boutiques, legal/tax advisors, researchers, and art-world experts—curated and managed by us.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Who we work with</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Principals & families · Entrepreneurial investors · Fund managers
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Perspective</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Grounded in research and culture. Ties with leading academic institutions (including London Business School and the Sorbonne). We support initiatives that strengthen democracy, the rule of law, European integration, and humanistic thinking—and maintain close connections to contemporary visual and performance art.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-almara-dark-text">Discretion & access</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                We collaborate with leading institutions and boutiques. References available on request.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="call" size="call" className="font-helvetica-now">
              request a call
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
