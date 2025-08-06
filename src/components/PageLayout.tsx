import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="relative w-full min-h-screen almara-gradient-bg">
      {/* Background Circle */}
      <img 
        src="/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png" 
        alt="Background texture" 
        className="fixed w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] min-w-[320px] min-h-[320px] object-cover bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] opacity-30" 
      />
      
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      
      {/* Header with Logo */}
      <header className="relative z-10 flex items-center justify-center pt-8 pb-4">
        <img 
          src="/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png" 
          alt="ALMARA" 
          className="h-6 sm:h-8 md:h-10 opacity-90" 
        />
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};