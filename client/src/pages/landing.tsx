import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Landing() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex items-center justify-center px-6 py-20 min-h-screen relative">
      {/* Planet SVG - Center */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0"
        style={{
          transform: `translate(-50%, -50%) rotate(${mouseY * 0.02}deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img src="/planet.svg" alt="" className="w-[600px] h-[600px]" />
      </div>

      {/* Chart SVG - Left */}
      <div 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none z-0"
        style={{
          transform: `translateY(calc(-50% + ${mouseY * 0.05}px))`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img src="/chart.svg" alt="" className="w-64 h-full object-contain scale-x-[-1]" />
      </div>

      {/* Chart SVG - Right */}
      <div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none z-0"
        style={{
          transform: `translateY(calc(-50% - ${mouseY * 0.05}px))`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img src="/chart.svg" alt="" className="w-64 h-full object-contain" />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white relative z-10" style={{ textShadow: '3px 3px 0px #1C1D1F, 6px 6px 0px #1C1D1F' }}>
            TradingPlan
          </h1>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white absolute top-0 left-0 w-full text-center" style={{ transform: 'translate(3px, 3px)', zIndex: 5 }}>
            TradingPlan
          </h1>
        </div>
        <p className="text-2xl text-white mb-12 leading-8 max-w-5xl mx-auto" style={{ fontFamily: 'Ubuntu Mono, monospace' }}>
          Every click without a <span className="text-[var(--primary-blue)] font-normal">plan</span> is another nail in your financial coffin. The market does not forgive 
          fools. It will eat you up and not even notice. You are either predator or prey. <span className="text-[var(--primary-blue)] font-normal">Decide.</span>
        </p>
        <Link href="/ai-agent">
          <button className="bg-white text-black px-8 py-4 text-lg font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            START MANAGING YOUR TRADE NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
