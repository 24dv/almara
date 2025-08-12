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
    <header className="lg:hidden fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-3 mt-3 rounded-xl border border-border bg-background/60 backdrop-blur-xl shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" aria-label="ALMARA home" className="transition-opacity hover:opacity-80">
            <img
              src="/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png"
              alt="ALMARA logo"
              className="h-7 sm:h-8 opacity-90"
            />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="hover-scale"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88%] sm:w-[420px] bg-background/80 backdrop-blur-2xl border-border"
            >
              <nav className="mt-8">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.href} className="animate-fade-in">
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "block px-2 py-3 text-2xl sm:text-3xl font-helvetica-now tracking-wide text-foreground/90 transition-colors story-link",
                            location.pathname === item.href && "text-foreground"
                          )}
                          aria-current={location.pathname === item.href ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8">
                <SheetClose asChild>
                  <Button
                    variant="call"
                    size="call"
                    className="w-full font-helvetica-now almara-call-btn"
                  >
                    request a call
                  </Button>
                </SheetClose>
              </div>

              <div className="mt-10 text-sm text-foreground/70">
                <p className="px-2">A sea of opportunity</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
