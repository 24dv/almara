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
  return <nav className="absolute left-8 top-3/4 -translate-y-1/2 z-50">
      <ul className="space-y-8">
        {navigationItems.map(item => <li key={item.label}>
            <a href={item.href} className={cn("flex items-center group transition-all duration-300 font-helvetica-now", "hover:scale-105")}>
              <div className="w-8 h-8 rounded-full bg-transparent mr-4 transition-all duration-300 group-hover:bg-[hsl(var(--carmine-red))]" 
                   style={{
                     boxShadow: 'inset 8px 8px 20px rgba(0, 0, 0, 0.3), inset -8px -8px 20px rgba(255, 255, 255, 0.6)'
                   }} />
              <span className="text-almara-dark-text font-normal tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-base">
                {item.label}
              </span>
            </a>
          </li>)}
      </ul>
    </nav>;
};