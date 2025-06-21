import { useLocation } from "wouter";

const pages = [
  { path: "/", title: "Trading Plan" },
  { path: "/ai-agent", title: "AI Agent" },
  { path: "/commercial", title: "Commercial" }
];

export default function ScrollIndicator() {
  const [location] = useLocation();
  const currentIndex = pages.findIndex(page => page.path === location);

  return (
    <div className="hidden sm:block fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {pages.map((page, index) => (
          <div
            key={page.path}
            className="relative group"
          >
            <div
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[var(--primary-blue)] border-[var(--primary-blue)] scale-125'
                  : 'border-white/40 hover:border-white/60'
              }`}
            />
            <div className="absolute right-5 sm:right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/80 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded whitespace-nowrap">
                {page.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll hint */}
      <div className="mt-6 sm:mt-8 text-white/60 text-xs text-center">
        <div className="animate-bounce">↕</div>
        <div className="mt-1">Scroll</div>
      </div>
    </div>
  );
}
