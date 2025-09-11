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
          <a href="mailto:tom@almara.capital" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent text-[#f4eada] lowercase rounded-[1px] almara-call-btn relative z-[100] transition-all px-[3rem] py-[0.85rem] font-helvetica-now tracking-wider font-bold h-auto text-xs sm:text-sm">
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