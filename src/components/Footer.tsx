import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-[#F4EADA] almara-footer-gradient-bg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side - Lorem Ipsum */}
        <div className="flex-1">
          <p className="text-xs text-almara-dark-text/70 max-w-sm leading-relaxed font-helvetica-now">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
        
        {/* Center - Request a Call Button */}
        <div className="flex-shrink-0 mx-8">
          <Button variant="call" className="font-helvetica-now">request a call</Button>
        </div>
        
        {/* Right Side - Privacy Link */}
        <div className="flex-1 flex justify-end">
          <Link 
            to="/privacy" 
            className="text-xs text-almara-dark-text/70 hover:text-almara-dark-text transition-colors duration-300 font-helvetica-now"
          >
            privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};