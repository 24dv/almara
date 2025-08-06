import { PageLayout } from "@/components/PageLayout";
import servicesHero from "@/assets/services-hero.jpg";
const Services = () => {
  return <PageLayout title="Services">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img src={servicesHero} alt="Financial services collaboration" className="w-full h-64 object-cover opacity-80" />
        </div>
        <h1 className="text-4xl font-long-cang text-almara-subtitle-text mb-8 text-center font-thin md:text-5xl">LONG-TERM PARTNERSHIPS BUILT ON TRUST</h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="leading-relaxed mb-8 text-base">
            Our approach combines ongoing strategic guidance with hands-on operational support, creating solutions that evolve with your needs and deliver both stability and growth.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 not-prose">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Strategic Advice</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Ongoing guidance to shape your portfolio with vision and intention. We work alongside you to craft strategies that reflect both market opportunities and your long-term objectives.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Operational Support</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Complete setup and back-office solutions through our proven network of trusted partners. From infrastructure to compliance, we handle the complexities so you can focus on growth.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Opportunity Sourcing</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Access to hand-picked alternative investments across hedge funds, private equity, real estate, and litigation funding. Every opportunity is carefully vetted and aligned with your investment philosophy.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Capital Introduction</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Leverage our extensive relationships to grow your fund and expand your investor base. We connect you with the right partners at the right time, fostering meaningful and lasting partnerships.
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg">
            <p className="leading-relaxed text-center">
              Our business model balances recurring partnership revenues through fee sharing and retainer arrangements with selective transactional work, ensuring aligned interests and sustainable growth for all parties.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default Services;