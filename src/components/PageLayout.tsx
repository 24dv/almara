import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
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

      {/* Mobile Header/Menu */}
      <MobileMenu />
      
      {/* Header with Logo (desktop only) */}
      <header className="relative z-10 hidden lg:flex items-center justify-center pt-8 pb-4">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png" alt="ALMARA" className="h-7 sm:h-8 md:h-9 opacity-90" loading="eager" fetchPriority="high" />
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