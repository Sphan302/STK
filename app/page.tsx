export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-xl font-semibold tracking-tight">STK</span>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors bg-white text-black px-4 py-1.5 rounded-full font-medium">
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-28 pb-20">
        <div className="text-xs font-medium tracking-widest uppercase text-white/40 mb-6">
          Built for serious traders
        </div>
        <h1 className="text-6xl font-semibold tracking-tight max-w-3xl leading-tight mb-6">
          Backtest. Journal. <span className="text-emerald-400">Improve.</span>
        </h1>
        <p className="text-lg text-white/50 max-w-xl leading-relaxed mb-10">
          STK gives traders a verified feedback loop — backtest strategies against
          20 years of data, log trades with AI coaching, and share with a community
          that actually shows receipts.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-emerald-300 transition-colors">
            Start for free
          </button>
          <button className="border border-white/20 text-white/70 px-6 py-3 rounded-full hover:border-white/40 hover:text-white transition-colors">
            See how it works
          </button>
        </div>
      </section>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-16 py-10 border-y border-white/10 text-center">
        <div>
          <div className="text-3xl font-semibold text-emerald-400">20yr</div>
          <div className="text-sm text-white/40 mt-1">Historical data</div>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <div className="text-3xl font-semibold text-emerald-400">2s</div>
          <div className="text-sm text-white/40 mt-1">Avg backtest time</div>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <div className="text-3xl font-semibold text-emerald-400">AI</div>
          <div className="text-sm text-white/40 mt-1">Journal coaching</div>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <div className="text-3xl font-semibold text-emerald-400">Free</div>
          <div className="text-sm text-white/40 mt-1">To get started</div>
        </div>
      </div>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-8 py-24 grid grid-cols-3 gap-6">
        {[
          {
            title: "Backtesting engine",
            desc: "Run any strategy against decades of real market data. Get Sharpe ratio, max drawdown, win rate, and CAGR in seconds.",
            tag: "Core",
          },
          {
            title: "AI trade journal",
            desc: "Log your trades and get AI-powered pattern analysis. Discover what's actually hurting your performance.",
            tag: "AI",
          },
          {
            title: "Strategy marketplace",
            desc: "Publish strategies with verified performance stats. Subscribe to top performers. Fork and customize anything.",
            tag: "Community",
          },
          {
            title: "Community feed",
            desc: "Share trades backed by real data — not self-reported screenshots. The only trading community where stats are verified.",
            tag: "Social",
          },
          {
            title: "Paper trading",
            desc: "Simulate trades on live market data in real time. See how your backtest holds up against actual conditions.",
            tag: "Live",
          },
          {
            title: "Performance dashboard",
            desc: "Equity curves, drawdown charts, monthly return heatmaps. Every metric a serious trader needs in one place.",
            tag: "Analytics",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="text-xs font-medium text-emerald-400 mb-3">{f.tag}</div>
            <div className="text-base font-semibold mb-2">{f.title}</div>
            <div className="text-sm text-white/50 leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Ready to trade with an edge?
        </h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Join traders who use data, not gut feelings.
        </p>
        <button className="bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-emerald-300 transition-colors">
          Create your free account
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/10 text-xs text-white/30">
        STK is for educational purposes only and does not constitute financial advice. © 2025 STK
      </footer>

    </main>
  )
}