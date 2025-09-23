import { PageLayout } from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const LegalNotice = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLHeadingElement>(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>(0.1, 200);
  
  // SEO meta tags for Legal Notice page
  useEffect(() => {
    document.title = "Legal Notice | ALMARA Alternative Asset Investment";
    const desc = "Legal notice and terms for ALMARA alternative asset investment services. Important legal information about our financial advisory services.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, []);

  return (
    <PageLayout title="Legal Notice">
      <section className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Title */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-museo-moderno text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight text-center mb-6 sm:mb-8 lg:mb-12">
              Legal Notice
            </h1>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className={`space-y-3 sm:space-y-4 lg:space-y-6 text-[#363636] font-helvetica-now leading-relaxed text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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