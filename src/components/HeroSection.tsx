export const HeroSection = () => {
  return <section className="relative h-screen flex flex-col items-center justify-center animate-fade-in px-4 sm:px-6">
      {/* Background Circle */}
      <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[85vw] h-[85vw] sm:w-[75vw] sm:h-[75vw] md:w-[70vw] md:h-[70vw] max-w-[800px] max-h-[800px] min-w-[280px] min-h-[280px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] reveal-fade" style={{ animationDelay: '0.1s', animationFillMode: 'both' }} loading="eager" fetchPriority="high" />
      
      {/* Logo - Perfectly centered in the circle */}
      <div className="relative z-10 flex items-center justify-center reveal-fade" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <img src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" alt="ALMARA" className="h-6 xs:h-7 sm:h-10 md:h-14 lg:h-20 opacity-90" loading="eager" fetchPriority="high" />
      </div>
      
      {/* Text - Positioned below the circle */}
      <div className="relative z-10 flex items-center justify-center mt-4 sm:mt-6 md:mt-8 reveal-up px-2" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <h1 className="font-long-cang text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-almara-subtitle-text tracking-[0em] opacity-90 font-thin text-center leading-tight">
          A SEA OF OPPORTUNITY
        </h1>
      </div>
    </section>;
};