import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="flex items-center justify-center px-6 py-20 min-h-screen">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white">
          TradingPlan
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Every click without a <span className="text-[var(--primary-blue)] font-semibold">plan</span> is another nail in your financial coffin. The market does not forgive 
          fools. It will eat you up and not even notice. You are either predator or prey. <span className="text-[var(--primary-blue)] font-semibold">Decide.</span>
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
