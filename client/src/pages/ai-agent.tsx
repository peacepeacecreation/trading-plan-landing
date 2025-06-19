import { Link } from "wouter";

export default function AIAgent() {
  return (
    <div className="flex items-center justify-center px-6 py-20 min-h-screen">
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-[var(--primary-blue)] rounded-full animate-pulse"></div>
            <span className="text-[var(--primary-blue)] font-semibold">AI Agent Connected</span>
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white">
          AI-Powered Trading<br/>
          <span className="text-[var(--primary-blue)]">Intelligence</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Our advanced AI Agent analyzes market patterns, executes trades with precision, and adapts to market volatility in real-time. 
          Experience the future of algorithmic trading with intelligent risk management and automated portfolio optimization.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Real-Time Analysis</h3>
            <p className="text-gray-400">Process millions of data points per second to identify profitable opportunities before they disappear.</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Risk Management</h3>
            <p className="text-gray-400">Automated stop-loss, position sizing, and portfolio balancing to protect your capital in volatile markets.</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[var(--primary-blue)]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Lightning Execution</h3>
            <p className="text-gray-400">Execute trades in microseconds with direct market access and low-latency infrastructure.</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
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
        </div>
      </div>
    </div>
  );
}
