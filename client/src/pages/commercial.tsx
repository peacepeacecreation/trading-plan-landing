import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Commercial() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-8 sm:py-20 min-h-screen">
      <div className="text-center max-w-4xl sm:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4 sm:mb-8 text-white px-4 sm:px-0">
          Professional Trading<br/>
          <span className="text-[var(--primary-blue)]">Solutions</span>
        </h2>
        
        <p className="text-lg sm:text-2xl text-gray-300 mb-6 sm:mb-16 leading-6 sm:leading-8 max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-0">
          Join thousands of professional traders who trust TradingPlan for their daily operations. 
          From individual traders to institutional hedge funds, our platform scales with your ambitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-16 px-4 sm:px-0">
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 sm:p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-xl sm:text-3xl font-black text-[var(--primary-blue)] mb-1 sm:mb-2">$2.1B+</div>
            <div className="text-xs sm:text-sm text-gray-400">Assets Under Management</div>
          </div>
          
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 sm:p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-xl sm:text-3xl font-black text-[var(--primary-blue)] mb-1 sm:mb-2">15,000+</div>
            <div className="text-xs sm:text-sm text-gray-400">Active Traders</div>
          </div>
          
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 sm:p-8 hover:from-[var(--primary-blue)]/20 hover:to-[var(--primary-blue)]/10 transition-all duration-500">
            <div className="text-xl sm:text-3xl font-black text-[var(--primary-blue)] mb-1 sm:mb-2">99.9%</div>
            <div className="text-xs sm:text-sm text-gray-400">Uptime Guarantee</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[var(--primary-blue)]/20 to-blue-600/20 border border-[var(--primary-blue)]/30 p-6 sm:p-12 mb-6 sm:mb-12 mx-4 sm:mx-0">
          <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 text-white">Ready to Transform Your Trading?</h3>
          <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto leading-4 sm:leading-6">
            Start with our 30-day free trial. No credit card required. Cancel anytime. 
            Experience the power of professional-grade trading tools and AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Button
              variant="primary"
              className="px-6 sm:px-10 py-2 sm:py-4 text-sm sm:text-lg font-bold"
            >
              START FREE TRIAL
            </Button>
            <Button
              variant="outline"
              className="border-[var(--primary-blue)] text-[var(--primary-blue)] px-6 sm:px-10 py-2 sm:py-4 text-sm sm:text-lg font-bold hover:bg-[var(--primary-blue)] hover:text-white"
            >
              VIEW PRICING
            </Button>
          </div>
        </div>

        <Link href="/">
          <Button variant="outline" className="text-white mx-auto">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
