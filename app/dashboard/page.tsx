export default function Dashboard() {
  const sidebarItems = [
    { label: "Overview", active: true },
    { label: "Backtest", active: false },
    { label: "Journal", active: false },
    { label: "Marketplace", active: false },
    { label: "Paper Trade", active: false },
    { label: "Settings", active: false },
  ]

  const statCards = [
    { label: "Portfolio return", value: "+24.3%", sub: "vs. S&P +18.1%", positive: true },
    { label: "Win rate", value: "64%", sub: "Last 90 days", positive: true },
    { label: "Max drawdown", value: "-8.2%", sub: "All time", positive: false },
    { label: "Sharpe ratio", value: "1.84", sub: "Annualized", positive: true },
  ]

  const backtests = [
    { name: "Momentum breakout", ret: "+31.2%", sharpe: "2.1", status: "green" },
    { name: "Mean reversion", ret: "+14.8%", sharpe: "1.4", status: "green" },
    { name: "RSI divergence", ret: "-3.1%", sharpe: "0.6", status: "red" },
    { name: "MACD crossover", ret: "+22.4%", sharpe: "1.9", status: "green" },
  ]

  const insights = [
    { text: "You exit winning trades 40% earlier than your backtest target on Mondays.", type: "warning" },
    { text: "Your win rate improves to 71% when you wait for volume confirmation.", type: "positive" },
    { text: "You have overtraded on 6 of the last 8 high-volatility news days.", type: "warning" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <span className="text-lg font-semibold tracking-tight">STK</span>
        <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-xs font-semibold">
          JD
        </div>
      </nav>
      <div className="flex">
        <aside className="w-56 min-h-screen border-r border-white/10 px-4 py-6 flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={item.active ? "px-3 py-2 rounded-lg text-sm bg-white/10 text-white font-medium" : "px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/5"}
            >
              {item.label}
            </a>
          ))}
        </aside>
        <div className="flex-1 px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">Good morning, Jay</h1>
            <p className="text-white/40 text-sm mt-1">Here is how your strategies are performing.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {statCards.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-white/40 mb-2">{stat.label}</div>
                <div className={stat.positive ? "text-2xl font-semibold text-emerald-400" : "text-2xl font-semibold text-red-400"}>
                  {stat.value}
                </div>
                <div className="text-xs text-white/30 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <div className="text-sm font-medium mb-1">Equity curve</div>
            <div className="text-xs text-white/40 mb-6">Momentum strategy — Last 12 months</div>
            <svg viewBox="0 0 600 160" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 120 C40 115 60 100 100 95 S160 80 200 70 S280 50 320 45 S380 30 420 35 S480 20 520 15 L560 10 L560 160 L0 160 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0 120 C40 115 60 100 100 95 S160 80 200 70 S280 50 320 45 S380 30 420 35 S480 20 520 15 L560 10"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-sm font-medium mb-4">Recent backtests</div>
              <div className="flex flex-col gap-3">
                {backtests.map((bt) => (
                  <div key={bt.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-sm text-white/80">{bt.name}</div>
                      <div className="text-xs text-white/30 mt-0.5">Sharpe {bt.sharpe}</div>
                    </div>
                    <div className={bt.status === "green" ? "text-sm font-medium text-emerald-400" : "text-sm font-medium text-red-400"}>
                      {bt.ret}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium">AI journal insights</div>
                <div className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">3 new</div>
              </div>
              <div className="flex flex-col gap-3">
                {insights.map((item, i) => (
                  <div key={i} className={item.type === "positive" ? "rounded-xl p-3 text-xs leading-relaxed bg-emerald-400/10 text-emerald-300" : "rounded-xl p-3 text-xs leading-relaxed bg-amber-400/10 text-amber-300"}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
