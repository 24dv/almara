export const HeroSection = () => {
  return <section className="relative h-screen flex items-center justify-center almara-gradient-bg">
      {/* Background Circle */}
      <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] min-w-[320px] min-h-[320px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Inside Circle */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* ALMARA Logo - Perfectly centered */}
        <div className="flex items-center justify-center mb-6">
          <img src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" alt="ALMARA" className="h-10 sm:h-14 md:h-20 lg:h-22 opacity-90" />
        </div>
        
        {/* Subtitle - Below the logo */}
        <h2 className="font-long-cang text-[32px] text-almara-cream tracking-[0em] opacity-90 my-0 py-0 font-thin text-center">
          A SEA OF OPPORTUNITY
        </h2>
      </div>
    </section>;
};