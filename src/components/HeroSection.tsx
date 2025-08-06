export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center almara-gradient-bg">
      {/* Background Circle */}
      <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="absolute w-[1000px] h-[1000px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Inside Circle */}
      <div className="relative z-10 text-center">
        {/* ALMARA Logo */}
        <div className="mb-8">
          <img src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" alt="ALMARA" className="h-20 mx-auto opacity-90" />
        </div>
        
        {/* Subtitle */}
        <h2 className="font-long-cang text-3xl text-almara-cream tracking-[0.2em] opacity-90">
          A SEA OF OPPORTUNITY
        </h2>
      </div>
    </section>;
};