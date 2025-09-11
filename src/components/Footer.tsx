import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-[#F4EADA] almara-footer-gradient-bg">
      <div className="flex items-center justify-between max-w-7xl mx-auto relative z-10">
        {/* Left Side - Lorem Ipsum */}
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
    </footer>
  );
};