import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "partners", href: "/partners" },
  { label: "mission", href: "/mission" },
];

export const MobileMenu = () => {
  const location = useLocation();

  return (
    <header className="xl:hidden fixed top-0 left-0 right-0 z-[60] bg-gradient-to-b from-[hsl(var(--almara-light-text))] to-transparent backdrop-blur-sm">
      <div className="px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="ALMARA home" className="transition-all duration-300 hover:opacity-80 hover:scale-105">
            <img
              src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png"
              alt="ALMARA logo"
              className="h-8 sm:h-9 opacity-90"
            />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="h-11 w-11 rounded-xl transition-all duration-300 hover:bg-[hsl(var(--almara-dark-blue))] hover:text-[hsl(var(--almara-light-text))] hover:scale-105 active:scale-95"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[420px] bg-[hsl(var(--almara-light-text))] border-none backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--almara-light-text))] via-[hsl(var(--almara-light-blue))]/30 to-[hsl(var(--almara-dark-blue))]/10" />
              
              <nav className="relative z-10 mt-20 px-6">
                <ul className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <li key={item.href} style={{ animationDelay: `${(index + 1) * 100}ms` }} className="animate-fade-in">
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "group flex items-center px-4 py-4 text-xl sm:text-2xl font-helvetica-now tracking-wide transition-all duration-300 rounded-xl min-h-[44px]",
                            "hover:bg-[hsl(var(--almara-dark-blue))]/10 hover:translate-x-2 active:scale-95",
                            location.pathname === item.href 
                              ? "text-[hsl(var(--almara-dark-text))] bg-[hsl(var(--almara-dark-blue))]/15" 
                              : "text-[hsl(var(--almara-dark-text))]/80 hover:text-[hsl(var(--almara-dark-text))]"
                          )}
                          aria-current={location.pathname === item.href ? "page" : undefined}
                        >
                          <span
                            className={cn(
                              "mr-4 inline-block h-3 w-3 rounded-full border-2 transition-all duration-300 group-hover:scale-110",
                              location.pathname === item.href 
                                ? "bg-[hsl(var(--almara-carmine))] border-[hsl(var(--almara-carmine))] shadow-md" 
                                : "border-[hsl(var(--almara-dark-blue))]/30 group-hover:border-[hsl(var(--almara-carmine))]/60"
                            )}
                          />
                          <span className={cn(
                            "transition-all duration-300",
                            location.pathname === item.href ? "font-semibold" : "font-normal"
                          )}>
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 px-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--almara-dark-blue))]/20 to-transparent mb-8" />
                  <Button 
                    variant="call" 
                    size="call"
                    className="w-full font-helvetica-now text-base py-4 min-h-[44px] hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    request a call
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
