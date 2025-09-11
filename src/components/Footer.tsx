import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 py-4 sm:py-6 border-t border-[#F4EADA] almara-footer-gradient-bg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto relative z-10 space-y-4 lg:space-y-0">
        {/* Mobile: Stacked layout, Desktop: Original layout */}
        
        {/* Top/Left Side - Lorem Ipsum */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs sm:text-sm text-[#363636] font-helvetica-now max-w-sm leading-relaxed mx-auto lg:mx-0">
            For informational purposes only. Not financial advice.
          </p>
        </div>
        
        {/* Center - Request a Call Button */}
        <div className="flex-shrink-0 text-center lg:mx-8">
          <a 
            href="mailto:tom@almara.capital" 
            className="inline-block bg-[hsl(var(--almara-dark-blue))] text-[hsl(var(--almara-light-text))] px-4 py-2 rounded-lg text-xs sm:text-sm font-helvetica-now transition-colors hover:bg-[hsl(var(--almara-dark-blue))]/90"
          >
            request a call
          </a>
        </div>
        
        {/* Bottom/Right Side - Privacy and Legal Notice Links */}
        <div className="flex-1 flex justify-center lg:justify-end space-x-4 sm:space-x-6">
          <Link 
            to="/privacy" 
            className="text-xs sm:text-sm text-[#363636] hover:text-[#363636]/70 transition-colors duration-300 font-helvetica-now"
          >
            privacy
          </Link>
          <Link 
            to="/legal-notice" 
            className="text-xs sm:text-sm text-[#363636] hover:text-[#363636]/70 transition-colors duration-300 font-helvetica-now"
          >
            legal notice
          </Link>
        </div>
      </div>
    </footer>
  );
};