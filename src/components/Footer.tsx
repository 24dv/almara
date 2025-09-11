import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 border-t border-[#F4EADA] almara-footer-gradient-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Mobile Layout (stacked) */}
        <div className="lg:hidden flex flex-col items-center space-y-6 text-center">
          {/* Request a Call Button - Top on mobile */}
          <div>
            <Button 
              variant="call-footer" 
              size="call"
              className="text-sm px-6 py-3 min-h-[44px] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              request a call
            </Button>
          </div>
          
          {/* Disclaimer text */}
          <div>
            <p className="text-sm text-[#363636] font-helvetica-now leading-relaxed max-w-xs">
              For informational purposes only. Not financial advice.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-8">
            <Link 
              to="/privacy" 
              className="text-sm text-[#363636] hover:text-[#363636]/70 transition-all duration-300 font-helvetica-now min-h-[44px] flex items-center px-2 hover:scale-105 active:scale-95"
            >
              privacy
            </Link>
            <Link 
              to="/legal-notice" 
              className="text-sm text-[#363636] hover:text-[#363636]/70 transition-all duration-300 font-helvetica-now min-h-[44px] flex items-center px-2 hover:scale-105 active:scale-95"
            >
              legal notice
            </Link>
          </div>
        </div>

        {/* Desktop Layout (horizontal) */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Side - Disclaimer */}
          <div className="flex-1">
            <p className="text-xs text-[#363636] font-helvetica-now max-w-sm leading-relaxed">
              For informational purposes only. Not financial advice.
            </p>
          </div>
          
          {/* Center - Request a Call Button */}
          <div className="flex-shrink-0 mx-8">
            <Button variant="call-footer" size="call">request a call</Button>
          </div>
          
          {/* Right Side - Privacy and Legal Notice Links */}
          <div className="flex-1 flex justify-end space-x-6">
            <Link 
              to="/privacy" 
              className="text-xs text-[#363636] hover:text-[#363636]/70 transition-colors duration-300 font-helvetica-now"
            >
              privacy
            </Link>
            <Link 
              to="/legal-notice" 
              className="text-xs text-[#363636] hover:text-[#363636]/70 transition-colors duration-300 font-helvetica-now"
            >
              legal notice
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};