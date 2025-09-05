import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
const About = () => {
  return <PageLayout title="About">
      {/* Main Content Section - Full Height */}
      <section className="h-screen flex items-center justify-center px-12 py-20">
        <div className="max-w-3xl text-center space-y-16 reveal-up" style={{
        animationDelay: '0.2s',
        animationFillMode: 'both'
      }}>
          {/* Main Tagline */}
          <h1 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">
            IN A SEA OF OPPORTUNITIES,<br />
            DISCERNMENT IS THE TRUE COMPASS
          </h1>
          
          {/* Description Text */}
          <div className="space-y-8 text-almara-dark-text/80 font-helvetica-now max-w-2xl mx-auto px-[40px]">
            <p className="leading-relaxed px-0 text-[#f4eada] text-base">
              At ALMARA, we guide passionate investors through the world of 
              alternative assets: from hedge funds and private equity to real 
              estate, litigation finance and art.
            </p>
            <p className="leading-relaxed text-base px-0 text-[#f4eada]">
              Blending deep market expertise with a creative spark, we build 
              strategies as unique as you are. With our network of specialist 
              partners and top-tier advisors, we uncover distinct opportunities 
              and drive lasting portfolio value.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section - Full Height */}
      <section className="h-screen bg-almara-light-text/20 flex items-center justify-center px-12 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-md relative z-0">
                <img src="/lovable-uploads/3f98f6a2-7c73-465b-89c1-9ffd619f5b8f.png" alt="Tom Meganck - Founder" className="w-full h-auto rounded-lg shadow-lg relative z-0" />
              </div>
            </div>
            
            {/* Founder Info */}
            <div className="space-y-8 max-w-xl">
              <div className="space-y-2">
                <h2 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#363636]">
                  Tom Meganck
                </h2>
                <h3 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">founder</h3>
              </div>
              
              <div className="space-y-6 text-almara-dark-text/80 font-helvetica-now">
                <p className="leading-relaxed text-base text-[#363636]">With a career spanning over two decades, Tom Meganck has guided ultra-high-net-worth families, entrepreneurs, and institutions across complex financial landscapes. His expertise blends private banking, alternative investments, and multi-jurisdictional structuring with a uniquely personal approach.

              </p>
                
                <div className="space-y-3 text-base opacity-75">
                  <p className="text-[#f4eada]">Background info 01</p>
                  <p className="text-[#f4eada]">Background info 02</p>
                  <p className="text-[#f4eada]">Background info 03</p>
                  <p className="text-[#f4eada]">Background info 04</p>
                </div>
                
                <p className="leading-relaxed text-base text-[#363636]">Tom has lived and worked in Brussels, Luxembourg, Monaco, London, Hong Kong, and Lisbon, cultivating a global network and local fluency in the world’s key financial and cultural hubs. Almara reflects his belief in discreet, holistic advisory, where trust, excellence, and long-term perspective drive every decision.</p>
              </div>
              
              {/* Call to Action */}
              <div className="pt-6">
                <Button variant="call" size="call" className="font-helvetica-now">request a call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default About;