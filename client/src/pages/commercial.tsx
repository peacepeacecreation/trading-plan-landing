import { Link } from "wouter";

export default function Commercial() {
  return (
    <div className="flex items-center justify-center px-6 py-20 min-h-screen">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white">
          Professional Trading<br/>
          <span className="text-[var(--primary-blue)]">Solutions</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
          Join thousands of professional traders who trust TradingPlan for their daily operations. 
          From individual traders to institutional hedge funds, our platform scales with your ambitions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-xl p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-3xl font-black text-[var(--primary-blue)] mb-2">$2.1B+</div>
            <div className="text-sm text-gray-400">Assets Under Management</div>
          </div>
          
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-xl p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-3xl font-black text-[var(--primary-blue)] mb-2">15,000+</div>
            <div className="text-sm text-gray-400">Active Traders</div>
          </div>
          
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-xl p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-3xl font-black text-[var(--primary-blue)] mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime Guarantee</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[var(--primary-blue)]/20 to-blue-600/20 border border-[var(--primary-blue)]/30 rounded-2xl p-12 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Trading?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with our 30-day free trial. No credit card required. Cancel anytime. 
            Experience the power of professional-grade trading tools and AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[var(--primary-blue)] text-white px-10 py-4 text-lg font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              START FREE TRIAL
            </button>
            <button className="border border-[var(--primary-blue)] text-[var(--primary-blue)] px-10 py-4 text-lg font-bold rounded-lg hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300">
              VIEW PRICING
            </button>
          </div>
        </div>

        <Link href="/">
          <button className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
