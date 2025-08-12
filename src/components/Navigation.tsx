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
    "left-8 -translate-y-1/2 z-50 hidden xl:block",
    positioning === "absolute" ? "absolute top-[65%]" : "fixed top-[75vh]"
  )}>
      <ul className="space-y-4">
        {navigationItems.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.label}>
              <Link to={item.href} className={cn("flex items-center group transition-all duration-300 font-helvetica-now")}>
                <div 
                  className="mr-4 cursor-pointer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'hsl(var(--almara-carmine))' : 'transparent',
                    boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                    transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-out',
                    transform: 'scale(1)'
                  }} 
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'hsl(var(--almara-carmine))';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
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