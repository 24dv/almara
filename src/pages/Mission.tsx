import { PageLayout } from "@/components/PageLayout";

const Mission = () => {
  return (
    <PageLayout title="Mission">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          Our Mission
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8 text-center">
            To unlock the infinite potential of our oceans through innovative maritime solutions and sustainable partnerships.
          </p>
          
          <div className="not-prose grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-long-cang text-almara-subtitle-text mb-4">Vision</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                A world where maritime commerce thrives in harmony with ocean preservation, creating endless opportunities for sustainable growth and prosperity.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-long-cang text-almara-subtitle-text mb-4">Values</h3>
              <ul className="text-almara-dark-text/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3"></span>
                  Innovation & Excellence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3"></span>
                  Sustainability & Responsibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3"></span>
                  Partnership & Collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3"></span>
                  Integrity & Trust
                </li>
              </ul>
            </div>
          </div>
          
          <div className="prose prose-lg">
            <p className="leading-relaxed mb-6">
              At ALMARA, we believe the ocean represents humanity's greatest frontier for sustainable development. Our mission is to bridge the gap between traditional maritime practices and cutting-edge innovation, creating pathways for responsible growth that benefit both commerce and conservation.
            </p>
            <p className="leading-relaxed mb-6">
              We are committed to fostering an ecosystem where maritime stakeholders can collaborate, innovate, and prosper while maintaining the highest standards of environmental stewardship and social responsibility.
            </p>
            <p className="leading-relaxed">
              Through our comprehensive approach to maritime solutions, we aim to transform challenges into opportunities, turning the vast blue expanse into a sea of endless possibility for current and future generations.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mission;