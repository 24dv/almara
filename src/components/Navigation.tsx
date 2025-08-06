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
              <div className="mr-4 group-hover:bg-[hsl(var(--carmine-red))] cursor-pointer" 
                   style={{
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                     background: 'transparent',
                     boxShadow: 'inset 2px 2px 7px rgba(0, 0, 0, 0.9), inset 0px 0px 0px rgba(255, 255, 255, 0.2)',
                     transition: 'background-color 0.3s ease'
                   }} />
              <span className="text-almara-dark-text font-normal tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-base">
                {item.label}
              </span>
            </a>
          </li>)}
      </ul>
    </nav>;
};