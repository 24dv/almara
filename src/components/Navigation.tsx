import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
  return <nav className={cn(
    "left-8 -translate-y-1/2 z-50",
    positioning === "absolute" ? "absolute top-[65%]" : "fixed top-[60vh]"
  )}>
      <ul className="space-y-4">
        {navigationItems.map(item => <li key={item.label}>
            <Link to={item.href} className={cn("flex items-center group transition-all duration-300 font-helvetica-now")}>
              <div className="mr-4 group-hover:bg-[#A60047] cursor-pointer"
                   style={{
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                     background: 'transparent',
                     boxShadow: 'inset -4px -4px 8px rgba(255,255,255,0.0), inset 2px 2px 4px rgba(0,0,0,0.7)',
                     transition: 'background-color 0.3s ease'
                   }} />
              <span className="text-almara-dark-text font-normal tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-base">
                {item.label}
              </span>
            </Link>
          </li>)}
      </ul>
    </nav>;
};