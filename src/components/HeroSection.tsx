export const HeroSection = () => {
  return <section className="relative h-screen flex flex-col items-center justify-center animate-fade-in">
      {/* Background Circle with Premium Pulsating Effect */}
      <div className="almara-pulse-container">
        <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] min-w-[320px] min-h-[320px] object-cover bg-transparent reveal-fade" style={{ animationDelay: '0.1s', animationFillMode: 'both' }} loading="eager" fetchPriority="high" />
      </div>
      
      {/* Logo - Perfectly centered in the circle */}
      <div className="relative z-10 flex items-center justify-center reveal-fade" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <img src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" alt="ALMARA" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-90" loading="eager" fetchPriority="high" />
      </div>
      
      {/* Text - Positioned below the circle */}
      <div className="relative z-10 flex items-center justify-center mt-8 reveal-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <h1 className="font-long-cang text-[32px] sm:text-[36px] md:text-[40px] text-almara-subtitle-text tracking-[0em] opacity-90 font-thin">
          A SEA OF OPPORTUNITY
        </h1>
      </div>
    </section>;
};