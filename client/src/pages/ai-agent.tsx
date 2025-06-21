import { Link } from "wouter";

export default function AIAgent() {
  return (
    <div className="flex items-center justify-center px-6 py-20 pb-40 min-h-screen">
      <div className="text-center max-w-5xl mx-auto">
        {/* <div className="mb-8">
          <div className="inline-flex items-center space-x-3 bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-[var(--primary-blue)] rounded-full animate-pulse"></div>
            <span className="text-[var(--primary-blue)] font-semibold">AI Agent Connected</span>
          </div>
        </div> */}
        
        {/* AI Agent Icon */}
        <div className="mb-2 flex justify-center">
          <div className="relative">
            {/* Shadow element */}
            <img
              src="/ai-agent-icon.svg"
              alt=""
              className="absolute mt-[4px] ml-[4px] opacity-30"
            />
            <img
              src="/ai-agent-icon.svg"
              alt=""
              className="absolute mt-[-2px] ml-[-2px] opacity-20 animate-pulse"
              style={{ animationDuration: '50ms', '--ai-icon-color': 'red'} as React.CSSProperties}
            />
            {/* Main icon */}
            <img
              src="/ai-agent-icon.svg"
              alt="AI Agent Icon"
              className="relative w-24 h-24 md:w-24 md:h-24 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        <h2
          className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-white font-ubuntu-mono"
        >
          AI-Powered Trading <span className="text-[var(--primary-blue)]">Intelligence</span>
        </h2>

        <p
          className="text-2xl text-white mb-12 leading-8 max-w-6xl mx-auto"
          style={{ fontFamily: "Ubuntu Mono, monospace" }}
        >
          Our advanced AI Agent analyzes market patterns, executes trades with{" "}
          <span className="text-[var(--primary-blue)] font-normal">precision</span>, and adapts to market volatility in real-time. 
          Experience the future of algorithmic trading with intelligent{" "}
          <span className="text-[var(--primary-blue)] font-normal">risk management</span> and automated{" "}
          <span className="text-[var(--primary-blue)] font-normal">portfolio optimization</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-9 h-9 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Real-Time <span className="text-[var(--primary-blue)] font-normal">Analysis</span>
            </h3>
            <p 
              className="text-gray-400"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Process millions of data points per second to identify{" "}
              <span className="text-[var(--primary-blue)] font-normal">profitable opportunities</span> before they disappear.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-9 h-9 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              <span className="text-[var(--primary-blue)] font-normal">Risk</span> Management
            </h3>
            <p 
              className="text-gray-400"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Automated stop-loss, position sizing, and portfolio balancing to{" "}
              <span className="text-[var(--primary-blue)] font-normal">protect your capital</span> in volatile markets.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-9 h-9 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-3 text-white"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Lightning <span className="text-[var(--primary-blue)] font-normal">Execution</span>
            </h3>
            <p 
              className="text-gray-400"
              style={{ fontFamily: "Ubuntu Mono, monospace" }}
            >
              Execute trades in{" "}
              <span className="text-[var(--primary-blue)] font-normal">microseconds</span> with direct market access and low-latency infrastructure.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center space-x-4">
          <Link href="/commercial">
            <button className="bg-[var(--primary-blue)] text-white px-8 py-4 text-lg font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              EXPLORE FEATURES
            </button>
          </Link>
          <Link href="/">
            <button className="border border-white/30 text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-all duration-300">
              BACK TO HOME
            </button>
          </Link>
        </div> */}

        {/* Fixed positioned button at bottom right */}
      <div className="mx-auto fixed bottom-20 right-[32px] z-50">
        <Link href="/ai-agent">
          <div className="relative left-0 top-0">
            {/* Shadow element */}
            <div className="absolute inset-0 bg-black border-[#6281BB] border-2 translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-out"></div>
            {/* Main button */}
            <button className="relative bg-white text-black font-tektur font-semibold text-[20px] leading-[26px] text-center uppercase py-4 px-[45px] transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group">
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
