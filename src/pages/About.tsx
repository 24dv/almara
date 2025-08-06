import { PageLayout } from "@/components/PageLayout";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <PageLayout title="About">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src={aboutHero} 
            alt="Professional financial advisor" 
            className="w-full h-64 object-cover opacity-80"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          A trusted steward bringing wisdom and vision to your wealth journey
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8">
            Over 25 years, I've navigated the intricate world of family offices and alternative investments across Luxembourg, Monaco, Hong Kong, and Lisbon, building deep expertise in hedge funds, private equity, real estate, and litigation funding.
          </p>
          <p className="leading-relaxed mb-6">
            My journey has been one of cultivating relationships and understanding the nuanced needs of sophisticated investors. Through hands-on experience managing complex portfolios and strategic partnerships, I've developed both the breadth of network and strategic skill set essential for navigating today's investment landscape.
          </p>
          <p className="leading-relaxed mb-6">
            What sets ALMARA apart is not just technical expertise, but the warmth and personal attention that comes from treating each client relationship as a trusted stewardship. I believe in fostering conversations that feel genuine and collaborative, where your goals become our shared mission.
          </p>
          <p className="leading-relaxed">
            This isn't just about managing wealth—it's about being your trusted partner in building something meaningful and enduring. Every decision is made with intention, every strategy crafted with both wisdom and care.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;