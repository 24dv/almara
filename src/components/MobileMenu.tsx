import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigationItems = [
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "partners", href: "/partners" },
  { label: "mission", href: "/mission" },
];

export const MobileMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="xl:hidden absolute top-0 left-0 right-0 z-[60]">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="ALMARA home" className={cn(
              "transition-opacity hover:opacity-80",
              location.pathname === "/" && "hidden"
            )}>
              <img
                src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png"
                alt="ALMARA logo"
                className="h-7 sm:h-8 opacity-90"
              />
            </Link>

            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="hover:bg-transparent p-0 w-10 h-10"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div 
                  className="cursor-pointer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'hsl(var(--almara-carmine))' : 'transparent',
                    boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                    transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-out',
                    transform: isOpen ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] almara-gradient-bg">
            <nav className="mt-16 px-4 relative z-10">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-1 py-2 font-helvetica-now tracking-wide text-base text-almara-dark-text opacity-80 hover:opacity-100 transition-opacity duration-300",
                        location.pathname === item.href && "text-almara-dark-text opacity-100"
                      )}
                      aria-current={location.pathname === item.href ? "page" : undefined}
                    >
                      <span className="opacity-90">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};