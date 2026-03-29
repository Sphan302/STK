"use client"
import { useState } from "react"

const results = {
  return: "+31.2%",
  sharpe: "2.14",
  maxDrawdown: "-8.3%",
  winRate: "64%",
  totalTrades: "847",
  avgWin: "+2.4%",
  avgLoss: "-1.1%",
  profitFactor: "2.8",
}

const trades = [
  { date: "2024-01-03", symbol: "AAPL", side: "Long", entry: "184.32", exit: "189.20", ret: "+2.6%", status: "win" },
  { date: "2024-01-08", symbol: "MSFT", side: "Long", entry: "374.10", exit: "370.50", ret: "-1.0%", status: "loss" },
  { date: "2024-01-12", symbol: "NVDA", side: "Long", entry: "521.80", exit: "547.20", ret: "+4.9%", status: "win" },
  { date: "2024-01-17", symbol: "TSLA", side: "Short", entry: "218.40", exit: "210.10", ret: "+3.8%", status: "win" },
  { date: "2024-01-23", symbol: "AMZN", side: "Long", entry: "153.20", exit: "151.80", ret: "-0.9%", status: "loss" },
  { date: "2024-01-29", symbol: "GOOGL", side: "Long", entry: "140.50", exit: "148.30", ret: "+5.5%", status: "win" },
]

export default function BacktestPage() {
  const [ran, setRan] = useState(false)
  const [loading, setLoading] = useState(false)
  const [strategy, setStrategy] = useState("momentum")
  const [from, setFrom] = useState("2023-01-01")
  const [to, setTo] = useState("2024-01-01")
  const [capital, setCapital] = useState("10000")

  function runBacktest() {
    setLoading(true)
    setRan(false)
    setTimeout(() => {
      setLoading(false)
      setRan(true)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <span className="text-lg font-semibold tracking-tight">STK</span>
        <a href="/dashboard" className="text-sm text-white/40 hover:text-white transition-colors">
          Back to dashboard
        </a>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Backtest a strategy</h1>
          <p className="text-white/40 text-sm mt-1">Run your strategy against historical market data.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-xs text-white/40 mb-2 block">Strategy</label>
              <select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              >
                <option value="momentum">Momentum breakout</option>
                <option value="meanrev">Mean reversion</option>
                <option value="rsi">RSI divergence</option>
                <option value="macd">MACD crossover</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-white/40 mb-2 block">From</label>
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-2 block">To</label>
              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-2 block">Starting capital ($)</label>
              <input
                type="number"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              />
            </div>
          </div>
          <button
            onClick={runBacktest}
            disabled={loading}
            className="bg-emerald-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-emerald-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Running backtest..." : "Run backtest"}
          </button>
        </div>

        {loading && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <div className="text-white/40 text-sm mb-3">Processing 847 trades across 12 months...</div>
            <div className="w-full bg-white/10 rounded-full h-1.5 max-w-sm mx-auto">
              <div className="bg-emerald-400 h-1.5 rounded-full animate-pulse" style={{ width: "60%" }} />
            </div>
          </div>
        )}

        {ran && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total return", value: results.return, positive: true },
                { label: "Sharpe ratio", value: results.sharpe, positive: true },
                { label: "Max drawdown", value: results.maxDrawdown, positive: false },
                { label: "Win rate", value: results.winRate, positive: true },
                { label: "Total trades", value: results.totalTrades, positive: true },
                { label: "Avg win", value: results.avgWin, positive: true },
                { label: "Avg loss", value: results.avgLoss, positive: false },
                { label: "Profit factor", value: results.profitFactor, positive: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                  <div className={stat.positive ? "text-xl font-semibold text-emerald-400" : "text-xl font-semibold text-red-400"}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <div className="text-sm font-medium mb-1">Equity curve</div>
              <div className="text-xs text-white/40 mb-4">Starting capital ${Number(capital).toLocaleString()}</div>
              <svg viewBox="0 0 600 160" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 140 C40 135 60 120 100 110 S160 90 200 75 S280 55 320 45 S380 30 420 35 S480 20 520 15 L560 10 L560 160 L0 160 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0 140 C40 135 60 120 100 110 S160 90 200 75 S280 55 320 45 S380 30 420 35 S480 20 520 15 L560 10"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-sm font-medium mb-4">Trade log</div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-white/30 border-b border-white/10">
                    <th className="text-left pb-3 font-normal">Date</th>
                    <th className="text-left pb-3 font-normal">Symbol</th>
                    <th className="text-left pb-3 font-normal">Side</th>
                    <th className="text-left pb-3 font-normal">Entry</th>
                    <th className="text-left pb-3 font-normal">Exit</th>
                    <th className="text-right pb-3 font-normal">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((trade) => (
                    <tr key={trade.date + trade.symbol} className="border-b border-white/5 last:border-0">
                      <td className="py-3 text-white/50">{trade.date}</td>
                      <td className="py-3 font-medium">{trade.symbol}</td>
                      <td className="py-3 text-white/50">{trade.side}</td>
                      <td className="py-3 text-white/50">${trade.entry}</td>
                      <td className="py-3 text-white/50">${trade.exit}</td>
                      <td className={trade.status === "win" ? "py-3 text-right font-medium text-emerald-400" : "py-3 text-right font-medium text-red-400"}>
                        {trade.ret}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </main>
  )
}