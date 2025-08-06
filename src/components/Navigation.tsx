import { cn } from "@/lib/utils";
const navigationItems = [{
  label: "about",
  href: "#about"
}, {
  label: "services",
  href: "#services"
}, {
  label: "partners",
  href: "#partners"
}, {
  label: "mission",
  href: "#mission"
}];
export const Navigation = () => {
  return <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-8">
        {navigationItems.map(item => <li key={item.label}>
            <a href={item.href} className={cn("flex items-center group transition-all duration-300 font-helvetica-now", "hover:scale-105")}>
              <div className="w-3 h-3 rounded-full bg-almara-dark-text/30 mr-4 group-hover:bg-almara-dark-text transition-colors duration-300" />
              <span className="text-almara-dark-text text-sm font-normal tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </a>
          </li>)}
      </ul>
    </nav>;
};