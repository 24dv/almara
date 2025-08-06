import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About">
      <div className="min-h-screen flex flex-col">
        {/* Main Content Section */}
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="max-w-2xl text-center space-y-12">
            {/* Main Tagline */}
            <h1 className="font-long-cang text-[32px] sm:text-[36px] md:text-[40px] text-almara-subtitle-text tracking-[0.05em] opacity-90 font-thin leading-tight">
              IN A SEA OF OPPORTUNITIES,<br />
              DISCERNMENT IS THE TRUE COMPASS.
            </h1>
            
            {/* Description Text */}
            <div className="space-y-6 text-almara-dark-text/80 font-helvetica-now">
              <p className="text-base leading-relaxed">
                At ALMARA, we guide passionate investors through the world of 
                alternative assets: from hedge funds and private equity to real 
                estate, litigation finance and art.
              </p>
              <p className="text-base leading-relaxed">
                Blending deep market expertise with a creative spark, we build 
                strategies as unique as you are. With our network of specialist 
                partners and top-tier advisors, we uncover distinct opportunities 
                and drive lasting portfolio value.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-almara-dark-text/5 py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/3f98f6a2-7c73-465b-89c1-9ffd619f5b8f.png" 
                    alt="Tom Meganck - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-long-cang text-[28px] text-almara-subtitle-text mb-2">
                    Tom Meganck
                  </h2>
                  <p className="text-almara-dark-text/60 font-helvetica-now text-sm uppercase tracking-wider">
                    FOUNDER
                  </p>
                </div>
                
                <div className="space-y-6 text-almara-dark-text/80 font-helvetica-now">
                  <p className="text-base leading-relaxed">
                    With a career spanning over two decades, Tom 
                    Meganck has guided ultra-high-net-worth 
                    families, entrepreneurs, and institutions across 
                    complex financial landscapes. His expertise 
                    blends private banking, alternative investments, 
                    and multi-jurisdictional structuring with a uniquely 
                    personal approach.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <p>Background info 01</p>
                    <p>Background info 02</p>
                    <p>Background info 03</p>
                    <p>Background info 04</p>
                  </div>
                  
                  <p className="text-base leading-relaxed">
                    His expertise blends private banking, alternative 
                    investments, and multi-jurisdictional structuring 
                    with a uniquely personal approach.
                  </p>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <button className="bg-almara-dark-text/20 hover:bg-almara-dark-text/30 text-almara-dark-text px-8 py-3 rounded font-helvetica-now text-sm uppercase tracking-wider transition-colors duration-300">
                    request a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;