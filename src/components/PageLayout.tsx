import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="relative w-full min-h-screen almara-gradient-bg">
      {/* Navigation - positioned absolutely like home page */}
      <Navigation />
      
      {/* Header with Logo */}
      <header className="relative z-10 flex items-center justify-center pt-8 pb-4">
        <img 
          src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" 
          alt="ALMARA" 
          className="h-5 sm:h-7 md:h-8 opacity-90" 
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