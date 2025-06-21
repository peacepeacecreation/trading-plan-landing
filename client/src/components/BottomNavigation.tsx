import { Link, useLocation } from "wouter";
import { useLayoutEffect, useRef, useState } from "react";

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
  const [progressWidth, setProgressWidth] = useState(0);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  itemRefs.current = [];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location === path) return true;
    return false;
  };

  const activeSectionIndex = navigationSections.findIndex((section) =>
    isActive(section.path)
  );

  useLayoutEffect(() => {
    if (activeSectionIndex < 0) {
      setProgressWidth(0);
      return;
    }

    const gridEl = navContainerRef.current;
    const activeItemEl = itemRefs.current[activeSectionIndex];

    if (gridEl && activeItemEl) {
      const gridRect = gridEl.getBoundingClientRect();
      const itemRect = activeItemEl.getBoundingClientRect();
      setProgressWidth(itemRect.right - gridRect.left);
    }
  }, [location, activeSectionIndex]);

  return (
  // bg-[var(--bg-dark)]/90 backdrop-blur-sm
    <nav className="fixed bottom-0 left-0 right-0 border-t-2 border-nav-border mx-[38px] z-20 font-mono">
      <div className="max-w-full mx-auto relative pt-4 pb-4">
        <div
          className="absolute top-0 left-0 h-[1px] bg-white transition-all duration-300 ease-in-out"
          style={{ width: `${progressWidth}px` }}
        ></div>
        <div ref={navContainerRef} className="grid grid-cols-5 gap-[47px] text-sm">
          {navigationSections.map((section, index) => {
            const isCurrent = isActive(section.path);
            const alignment =
              index === 0
                ? "justify-start"
                : index === navigationSections.length - 1
                ? "justify-end"
                : "justify-center";

            if (section.enabled) {
              return (
                <Link
                  ref={(el) => (itemRefs.current[index] = el)}
                  key={section.id}
                  href={section.path}
                  className={`nav-section transition-colors duration-300 cursor-pointer ${
                    isCurrent
                      ? "text-nav-text-active"
                      : "text-nav-text-inactive"
                  }`}
                >
                  <div className={`flex items-center gap-2 ${alignment}`}>
                    <span>{section.id}</span>
                    <span>{section.title}</span>
                  </div>
                </Link>
              );
            }

            return (
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                key={section.id}
                className="nav-section opacity-50 cursor-not-allowed text-nav-text-inactive"
              >
                <div className={`flex items-center gap-2 ${alignment}`}>
                  <span>{section.id}</span>
                  <span>{section.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
