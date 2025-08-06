import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const PageLayout = ({
  title,
  children
}: PageLayoutProps) => {
  return <div className="relative w-full min-h-screen almara-gradient-bg">
      {/* Navigation - fixed positioned at same height as home page */}
      <Navigation positioning="fixed" />
      
      {/* Header with Logo */}
      <header className="relative z-10 flex items-center justify-center pt-8 pb-4">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-5 sm:h-6 md:h-7 opacity-90" />
        </Link>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>;
};