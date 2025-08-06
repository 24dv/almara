export const HeroSection = () => {
  return <section className="relative h-screen flex items-center justify-center almara-gradient-bg">
      {/* Background Circle */}
      <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] min-w-[320px] min-h-[320px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Inside Circle - Logo perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* ALMARA Logo - Perfectly centered */}
        <div className="flex items-center justify-center">
          <img src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" alt="ALMARA" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-90" />
        </div>
        
        {/* Subtitle - Below the logo */}
        <div className="mt-6">
          <h2 className="font-long-cang text-[32px] sm:text-[36px] md:text-[40px] text-almara-subtitle-text tracking-[0em] opacity-90 font-thin">
            A SEA OF OPPORTUNITY
          </h2>
        </div>
      </div>
    </section>;
};