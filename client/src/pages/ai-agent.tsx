import { Link } from "wouter";

export default function AIAgent() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-8 sm:py-20 pb-20 sm:pb-40 min-h-screen">
      <div className="text-center max-w-4xl sm:max-w-5xl mx-auto">
        {/* AI Agent Icon */}
        <div className="mb-2 flex justify-center">
          <div className="relative">
            {/* Shadow element */}
            <img
              src="/ai-agent-icon.svg"
              alt=""
              className="absolute mt-[2px] sm:mt-[4px] ml-[2px] sm:ml-[4px] opacity-30 w-16 sm:w-24 h-16 sm:h-24"
            />
            <img
              src="/ai-agent-icon.svg"
              alt=""
              className="absolute mt-[-1px] sm:mt-[-2px] ml-[-1px] sm:ml-[-2px] opacity-20 animate-pulse w-16 sm:w-24 h-16 sm:h-24"
              style={{ animationDuration: '50ms', '--ai-icon-color': 'red'} as React.CSSProperties}
            />
            {/* Main icon */}
            <img
              src="/ai-agent-icon.svg"
              alt="AI Agent Icon"
              className="relative w-16 sm:w-24 h-16 sm:h-24 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        <h2
          className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 sm:mb-8 text-white font-ubuntu-mono px-4 sm:px-0"
        >
          AI-Powered Trading <span className="text-[var(--primary-blue)]">Intelligence</span>
        </h2>

        <p
          className="text-lg sm:text-2xl text-white mb-6 sm:mb-12 leading-6 sm:leading-8 max-w-4xl sm:max-w-6xl mx-auto px-4 sm:px-0"
          style={{ fontFamily: "Ubuntu Mono, monospace" }}
        >
          Our advanced AI Agent analyzes market patterns, executes trades with{" "}
          <span className="text-[var(--primary-blue)] font-normal">precision</span>, and adapts to market volatility in real-time. 
          Experience the future of algorithmic trading with intelligent{" "}
          <span className="text-[var(--primary-blue)] font-normal">risk management</span> and automated{" "}
          <span className="text-[var(--primary-blue)] font-normal">portfolio optimization</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-12 px-4 sm:px-0">
          <div className="bg-white/5 border border-white/10 p-3 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <h3 
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Real-Time <span className="text-[var(--primary-blue)] font-normal">Analysis</span>
            </h3>
            <p 
              className="text-sm sm:text-base text-gray-400 leading-4 sm:leading-6"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Process millions of data points per second to identify{" "}
              <span className="text-[var(--primary-blue)] font-normal">profitable opportunities</span> before they disappear.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-3 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <h3 
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              <span className="text-[var(--primary-blue)] font-normal">Risk</span> Management
            </h3>
            <p 
              className="text-sm sm:text-base text-gray-400 leading-4 sm:leading-6"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Automated stop-loss, position sizing, and portfolio balancing to{" "}
              <span className="text-[var(--primary-blue)] font-normal">protect your capital</span> in volatile markets.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-3 sm:p-6 hover:bg-white/10 transition-all duration-300">
            <h3 
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Lightning <span className="text-[var(--primary-blue)] font-normal">Execution</span>
            </h3>
            <p 
              className="text-sm sm:text-base text-gray-400 leading-4 sm:leading-6"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Execute trades in{" "}
              <span className="text-[var(--primary-blue)] font-normal">microseconds</span> with direct market access and low-latency infrastructure.
            </p>
          </div>
        </div>

        {/* Centered button for mobile, fixed positioned for desktop */}
        <div className="fixed sm:fixed bottom-16 sm:bottom-20 left-1/2 sm:right-[32px] sm:left-auto transform -translate-x-1/2 sm:transform-none z-50">
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
    </div>
  );
}
