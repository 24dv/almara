import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [{
  label: "about",
  href: "/about"
}, {
  label: "services",
  href: "/services"
}, {
  label: "partners",
  href: "/partners"
}, {
  label: "mission",
  href: "/mission"
}];

interface NavigationProps {
  positioning?: "absolute" | "fixed";
}

export const Navigation = ({ positioning = "absolute" }: NavigationProps) => {
  const location = useLocation();
  
  return <nav className={cn(
    "left-8 -translate-y-1/2 z-50",
    positioning === "absolute" ? "absolute top-[65%]" : "fixed top-[60vh]"
  )}>
      <ul className="space-y-4">
        {navigationItems.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.label}>
              <Link to={item.href} className={cn("flex items-center group transition-all duration-300 font-helvetica-now")}>
                <div 
                  className="mr-4 cursor-pointer relative overflow-hidden"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isActive 
                      ? 'radial-gradient(circle at center, hsl(var(--almara-carmine)) 0%, hsl(var(--almara-carmine) / 0.9) 70%, hsl(var(--almara-carmine) / 0.7) 100%)'
                      : 'transparent',
                    boxShadow: isActive 
                      ? `0 0 15px hsl(var(--almara-carmine) / 0.6), 0 0 25px hsl(var(--almara-carmine) / 0.3), inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)`
                      : 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                    transition: 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: isActive ? 'glow-expand-retract 1.2s ease-out' : 'none'
                  }} 
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'radial-gradient(circle at center, hsl(var(--almara-carmine)) 0%, hsl(var(--almara-carmine) / 0.9) 70%, hsl(var(--almara-carmine) / 0.7) 100%)';
                      e.currentTarget.style.animation = 'glow-expand-retract 1.2s ease-out';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.animation = 'none';
                      e.currentTarget.style.boxShadow = 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, hsl(var(--almara-carmine) / 0.8) 0%, transparent 60%)',
                      transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: isActive ? 1 : 0
                    }}
                  />
                </div>
                <span className="text-almara-dark-text font-normal tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-base">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>;
};