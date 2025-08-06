export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center almara-gradient-bg">
      {/* Main Circle Container */}
      <div className="relative flex items-center justify-center">
        {/* Background Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" alt="Circle background" className="w-[1000px] h-[1000px] object-contain almara-hero-shadow" />
        </div>
        
        {/* Content Inside Circle */}
        <div className="relative z-10 text-center">
          {/* ALMARA Logo */}
          <div className="mb-8">
            <img src="/lovable-uploads/32eb9fab-3d27-46fd-974b-d0ab5ea47320.png" alt="ALMARA" className="h-80 mx-auto opacity-90" />
          </div>
          
          {/* Subtitle */}
          <h2 className="font-long-cang text-3xl text-almara-cream tracking-[0.2em] opacity-90">
            A SEA OF OPPORTUNITY
          </h2>
        </div>
      </div>
    </section>;
};