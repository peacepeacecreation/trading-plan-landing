import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 min-h-screen relative">
      <div
        className="absolute top-1/3 transform -translate-y-1/3 pointer-events-none z-0"
        style={{
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="/chart.svg"
          alt=""
          className="w-[100vw] h-full object-contain"
        />
      </div>

      {/* Planet SVG - Center with continuous rotation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 planet-rotate">
        <img src="/planet-2d.svg" alt="" className="w-[50vh] sm:w-[70vh] h-[50vh] sm:h-[70vh]" />
      </div>

      {/* Chart SVG - Left */}
      {/* <div
        className="absolute top-1/2 transform -translate-y-1/2 pointer-events-none z-0"
        style={{
          transform: `translateY(calc(-50% + ${mouseY * 0.05}px))`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="/chart.svg"
          alt=""
          className="w-full h-full object-contain scale-x-[-1]"
        />
      </div> */}

      {/* Chart SVG - Right */}
      {/* <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none z-0"
        style={{
          transform: `translateY(calc(-50% - ${mouseY * 0.05}px))`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img src="/chart.svg" alt="" className="w-full h-full object-contain" />
      </div> */}

      <div className="text-center max-w-4xl sm:max-w-7xl mx-auto relative z-10">
        <div
          className="relative mb-6 sm:mb-8 flex justify-center w-full"
          style={{ height: "80px" }}
        >
          <img
            src="/logo-shadow.svg"
            alt=""
            className="absolute mt-[2px] sm:mt-[4px] mr-[-5px] sm:mr-[-10px] w-full sm:w-auto max-w-[300px] sm:max-w-none"
          />
          <img
            src="/logo-text.svg"
            alt="TradingPlan"
            className="absolute w-full sm:w-auto max-w-[300px] sm:max-w-none"
          />
        </div>
        <p
          className="text-lg sm:text-2xl text-white mb-8 sm:mb-12 leading-6 sm:leading-8 max-w-4xl sm:max-w-6xl mx-auto px-4 sm:px-0"
          style={{ fontFamily: "Ubuntu Mono, monospace" }}
        >
          Every click without a{" "}
          <span className="text-[var(--primary-blue)] font-normal">plan</span>{" "}
          is another nail in your financial coffin. The market does not forgive
          fools. It will eat you up and not even notice. You are either predator
          or prey.{" "}
          <span className="text-[var(--primary-blue)] font-normal">
            Decide.
          </span>
        </p>
      </div>

      {/* Centered button for mobile, fixed positioned for desktop */}
      <div className="fixed sm:fixed bottom-20 sm:bottom-24 left-1/2 sm:right-4 sm:left-auto transform -translate-x-1/2 sm:transform-none z-50">
        <Link href="/ai-agent">
          <div className="relative">
            {/* Shadow element */}
            <div className="absolute inset-0 bg-black border-[#6281BB] border-2 translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-out"></div>
            {/* Main button */}
            <button className="relative bg-white text-black font-tektur font-semibold text-[14px] sm:text-[20px] leading-[18px] sm:leading-[26px] text-center uppercase py-3 sm:py-4 px-6 sm:px-[45px] transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group">
              <span className="inline-block">
                START MANAGING YOUR TRADE{" "}
                <span className="relative inline-block">
                  <span className="group-hover:opacity-0 group-hover:scale-110 group-hover:text-red-500 group-hover:duration-150 duration-0">
                    NOW
                  </span>
                  <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2  group-hover:text-black font-bold font-italic group-hover:translate-y-0 duration-0 group-hover:duration-150 ease-out">
                    →
                  </span>
                </span>
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
