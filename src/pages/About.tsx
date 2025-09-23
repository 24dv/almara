import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import noise from "@/assets/noise.png";
const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>(0.1, 200);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>(0.1, 500);
  
  // SEO meta tags for About page
  useEffect(() => {
    document.title = "About Tom Meganck | ALMARA Alternative Asset Investment";
    const desc = "Meet Tom Meganck, founder of ALMARA. Over two decades of expertise in alternative investments, family office advisory, and wealth management across global markets.";
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
  return <PageLayout title="About" noGradientOnMobile={true}>
      {/* Main Content Section - Full Height */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="max-w-3xl text-center space-y-8 sm:space-y-12 lg:space-y-16 reveal-up" style={{
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}>
          {/* Main Tagline */}
          <h1 className="font-long-cang text-[28px] xs:text-[32px] sm:text-[36px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-5xl text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin">
            IN A SEA OF OPPORTUNITIES,<br />
            DISCERNMENT IS THE TRUE COMPASS
          </h1>
          
          {/* Description Text */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-almara-dark-text/80 font-helvetica-now max-w-2xl mx-auto px-2 sm:px-4 lg:px-[40px]">
            <p className="leading-relaxed almara-body-mobile lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#f4eada]">
              At ALMARA, we guide passionate investors through the world of 
              alternative assets: from hedge funds and private equity to real 
              estate, litigation finance and art.
            </p>
            <p className="leading-relaxed almara-body-mobile lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#f4eada]">
              Blending deep market expertise with a creative spark, we build 
              strategies as unique as you are. With our network of specialist 
              partners and top-tier advisors, we uncover distinct opportunities 
              and drive lasting portfolio value.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section - Flexible Height for Mobile */}
      <section ref={sectionRef} className="min-h-screen lg:h-screen bg-almara-light-text/20 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center h-full">
            {/* Founder Image */}
            <div ref={imageRef} className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              imageVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-8 opacity-0'
            }`}>
              <div className="max-w-md relative">
                <img src={`${import.meta.env.BASE_URL}lovable-uploads/3f98f6a2-7c73-465b-89c1-9ffd619f5b8f.png`} alt="Tom Meganck - Founder" className="w-full h-auto rounded-lg shadow-lg relative z-0" />
                <div className="absolute inset-0 rounded-lg z-10 pointer-events-none" style={{
                  backgroundImage: `url(${noise})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.6
                }} />
              </div>
            </div>
            
            {/* Founder Info */}
            <div ref={contentRef} className={`space-y-8 max-w-xl transition-all duration-1000 ease-out ${
              contentVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}>
              <div className="space-y-2">
                <h2 className="font-museo-moderno almara-h1-mobile text-[#363636]">
                  Tom Meganck
                </h2>
                <h3 className="font-helvetica-now almara-h3-mobile lg:text-xl tracking-wider font-bold text-[#364b56]">founder</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-almara-dark-text/80 font-helvetica-now">
                <p className="leading-relaxed almara-body-mobile lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#363636]">With a career spanning over two decades, Tom Meganck has guided ultra-high-net-worth families, entrepreneurs, and institutions across complex financial landscapes. His expertise blends private banking, alternative investments, and multi-jurisdictional structuring with a uniquely personal approach.

              </p>
                
                <div className="space-y-2 sm:space-y-3 almara-body-small-mobile lg:text-[14px] xl:text-[15px] 2xl:text-[16px] opacity-75">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-2">
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid #f4eada',
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent'
                      }} />
                    </div>
                    <p className="text-[#f4eada] leading-relaxed lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">Founded and led a corporate services firm in London and Luxembourg.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-2">
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid #f4eada',
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent'
                      }} />
                    </div>
                    <p className="text-[#f4eada] leading-relaxed lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">Established a family office advisory practice in Hong Kong.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-2">
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid #f4eada',
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent'
                      }} />
                    </div>
                    <p className="text-[#f4eada] leading-relaxed lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">2002–2012: Served as Managing Director of a significant Single Family Office spanning New York, Luxembourg, Monaco, and Hong Kong, with a focus on hedge funds, private equity, and litigation funding.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-2">
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '8px solid #f4eada',
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent'
                      }} />
                    </div>
                    <p className="text-[#f4eada] leading-relaxed lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">Began his career in private and merchant banking in Luxembourg and Brussels.</p>
                  </div>
                </div>
                
                <p className="leading-relaxed almara-body-mobile lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#363636]">Tom has lived and worked in Brussels, Luxembourg, Monaco, London, Hong Kong, and Lisbon, cultivating a global network and local fluency in the world's key financial and cultural hubs. Almara reflects his belief in discreet, holistic advisory, where trust, excellence, and long-term perspective drive every decision.</p>
                
                {/* Desktop only button */}
                <div className="hidden lg:block pt-6">
                  <Button variant="call" size="call" className="font-helvetica-now text-xs sm:text-sm" asChild>
                    <a href="mailto:tom@almara.capital">request a call</a>
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default About;