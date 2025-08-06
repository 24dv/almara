import { PageLayout } from "@/components/PageLayout";

const Mission = () => {
  return (
    <PageLayout title="Mission">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          Our Mission & Values
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8 text-center">
            To be your trusted steward in wealth creation, bringing intention, vision, and clarity to foster balanced growth with kindness and compassion.
          </p>
          
          <div className="not-prose grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-long-cang text-almara-subtitle-text mb-4">Our Mission</h3>
              <p className="text-almara-dark-text/80 leading-relaxed">
                ALMARA serves as a holistic steward, delivering comprehensive solutions that blend wisdom with practical expertise, creating sustainable pathways for wealth creation and preservation that honor both financial objectives and personal values.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-long-cang text-almara-subtitle-text mb-4">Core Values</h3>
              <ul className="text-almara-dark-text/80 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Wisdom:</strong> Drawing from deep experience to guide decisions with insight and perspective
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Grounded:</strong> Staying rooted in practical realities while pursuing ambitious goals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Simple:</strong> Finding clarity in complexity and elegance in solutions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-almara-light-blue rounded-full mr-3 mt-2"></span>
                  <div>
                    <strong>Spirituality:</strong> Honoring the deeper purpose behind wealth and recognizing our interconnectedness
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="prose prose-lg">
            <p className="leading-relaxed mb-6">
              At the heart of ALMARA's philosophy lies the principle of yin and yang—the understanding that true prosperity emerges from balance. We bring intention to every investment decision, vision to long-term planning, and clarity to complex financial landscapes.
            </p>
            <p className="leading-relaxed">
              Our approach embraces both the analytical rigor required for successful investing and the human wisdom needed to create meaningful, lasting wealth. Through kindness and compassion, we foster relationships that transcend transactions, building partnerships that enrich both financial portfolios and personal purpose.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mission;