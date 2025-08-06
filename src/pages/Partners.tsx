import { PageLayout } from "@/components/PageLayout";

const Partners = () => {
  return (
    <PageLayout title="Partners">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          Our Partners
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8">
            Building strategic alliances across the global maritime ecosystem to create unprecedented opportunities.
          </p>
          
          <div className="not-prose">
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-almara-light-blue/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-almara-dark-text">G</span>
                </div>
                <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Global Shipping Co.</h3>
                <p className="text-sm text-almara-dark-text/70">International freight solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-almara-light-blue/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-almara-dark-text">M</span>
                </div>
                <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Maritime Tech Inc.</h3>
                <p className="text-sm text-almara-dark-text/70">Advanced navigation systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-almara-light-blue/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-almara-dark-text">O</span>
                </div>
                <h3 className="text-lg font-semibold text-almara-dark-text mb-2">Ocean Logistics</h3>
                <p className="text-sm text-almara-dark-text/70">Sustainable cargo operations</p>
              </div>
            </div>
            
            <div className="prose prose-lg">
              <p className="leading-relaxed mb-6">
                Our partnership network spans across six continents, connecting innovative maritime companies, technology providers, and logistics specialists who share our vision for a more efficient and sustainable blue economy.
              </p>
              <p className="leading-relaxed">
                Through strategic collaborations, we facilitate knowledge exchange, resource sharing, and joint ventures that drive innovation in maritime commerce, environmental stewardship, and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Partners;