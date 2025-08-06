import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="px-8 py-6 bg-background">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side - Lorem Ipsum */}
        <div className="flex-1">
          <p className="text-xs text-almara-dark-text/70 max-w-sm leading-relaxed font-helvetica-now">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
        
        {/* Center - Request a Call Button */}
        <div className="flex-shrink-0 mx-8">
          <Button 
            variant="secondary"
            className="almara-button-shadow bg-almara-light-blue/80 hover:bg-almara-light-blue text-almara-dark-text border-0 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 font-helvetica-now font-bold"
          >
            request a call
          </Button>
        </div>
        
        {/* Right Side - Privacy Link */}
        <div className="flex-1 flex justify-end">
          <a 
            href="#privacy" 
            className="text-xs text-almara-dark-text/70 hover:text-almara-dark-text transition-colors duration-300 font-helvetica-now"
          >
            privacy
          </a>
        </div>
      </div>
    </footer>
  );
};