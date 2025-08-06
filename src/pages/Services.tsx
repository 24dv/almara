import { PageLayout } from "@/components/PageLayout";

const Services = () => {
  return (
    <PageLayout title="Services">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          Our Services
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8">
            Comprehensive maritime solutions designed to navigate the complexities of the modern blue economy.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 not-prose">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Maritime Consulting</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Expert guidance for maritime operations, regulatory compliance, and strategic planning across international waters.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Logistics Solutions</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                End-to-end supply chain management and logistics optimization for maritime commerce and trade.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Technology Integration</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Cutting-edge maritime technology solutions to enhance operational efficiency and safety standards.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-almara-dark-text mb-4">Partnership Development</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                Strategic alliance building and partnership facilitation across global maritime networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;