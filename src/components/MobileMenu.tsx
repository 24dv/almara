import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
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
              </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[420px] bg-background border-none"
            >
              <nav className="mt-16 px-4">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center px-1 py-2 text-xl sm:text-2xl font-helvetica-now tracking-wide text-foreground/90 transition-opacity hover:opacity-100",
                            location.pathname === item.href && "text-foreground"
                          )}
                          aria-current={location.pathname === item.href ? "page" : undefined}
                        >
                          <span
                            className={cn(
                              "mr-3 inline-block h-2.5 w-2.5 rounded-full border border-foreground/20",
                              location.pathname === item.href && "bg-[hsl(var(--almara-carmine))] border-transparent"
                            )}
                          />
                          <span className="opacity-90">{item.label}</span>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
