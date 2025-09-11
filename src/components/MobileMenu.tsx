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
    <header className="xl:hidden absolute top-0 left-0 right-0 z-[60]">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
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
    </header>
  );
};
