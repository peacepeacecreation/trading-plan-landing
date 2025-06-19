import { useLocation } from "wouter";
import { Link } from "wouter";

const navigationSections = [
  {
    id: "01",
    title: "Trading Plan Introduction",
    path: "/",
    enabled: true
  },
  {
    id: "02", 
    title: "Immersion and functionality",
    path: "/ai-agent",
    enabled: true
  },
  {
    id: "03",
    title: "Synchronization and automation", 
    path: "/commercial",
    enabled: true
  },
  {
    id: "04",
    title: "Strategy and additional tools",
    path: "#",
    enabled: false
  },
  {
    id: "05",
    title: "More about Trading Plan",
    path: "#", 
    enabled: false
  }
];

export default function BottomNavigation() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location === path) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--bg-dark)]/90 backdrop-blur-sm border-t border-white/10 p-6 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-8 text-sm">
          {navigationSections.map((section) => {
            if (section.enabled) {
              return (
                <Link
                  key={section.id}
                  href={section.path}
                  className={`nav-section transition-all duration-300 cursor-pointer hover:text-[var(--primary-blue)] ${
                    isActive(section.path) 
                      ? 'text-[var(--primary-blue)] border-b-2 border-[var(--primary-blue)]' 
                      : 'text-white'
                  }`}
                >
                  <div className="font-semibold mb-1">{section.id}</div>
                  <div className="text-gray-400">{section.title}</div>
                </Link>
              );
            }
            
            return (
              <div
                key={section.id}
                className="nav-section opacity-50 cursor-not-allowed"
              >
                <div className="font-semibold mb-1">{section.id}</div>
                <div className="text-gray-400">{section.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
