import { PageLayout } from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LegalNotice = () => {
  // Scroll reveal animations
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1, 100);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1, 200);

  return (
    <PageLayout title="Legal Notice">
      <section className="min-h-screen flex items-start justify-center px-12 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight text-center mb-12">
              Legal Notice
            </h1>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className={`space-y-6 text-[#363636] font-helvetica-now leading-relaxed text-base transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              The information provided on this website is for general informational purposes only. Almara Capital does not provide personalized financial, investment, tax, legal, or other professional advice through this site. Any reliance you place on the information presented here is strictly at your own risk.
            </p>
            
            <p>
              Almara Capital makes no representation or warranty as to the accuracy, completeness, or reliability of any information contained on this website. Market conditions and financial circumstances can change rapidly, and past performance is not indicative of future results.
            </p>
            
            <p>
              This website may contain links to third-party websites for convenience and informational purposes only. Almara Capital does not endorse or guarantee the accuracy or reliability of any content on these external sites and assumes no responsibility for any damages or losses that may arise from your use of them.
            </p>
            
            <p>
              Users are encouraged to seek independent, professional advice tailored to their own specific financial situation before making any financial decisions.
            </p>
            
            <p>
              By using this website, you acknowledge and agree that Almara Capital shall not be liable for any direct, indirect, incidental, consequential, or any other damages resulting from your use of or reliance on information provided on this site.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalNotice;