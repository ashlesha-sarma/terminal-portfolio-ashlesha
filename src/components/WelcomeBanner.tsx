import { portfolioData } from '../data/portfolio'

export function WelcomeBanner() {
  return (
    <div className="mb-4 space-y-3">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 pb-3 border-b border-terminal-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-terminal-muted text-xs ml-2 font-mono">
          ashlesha@portfolio — bash — 80×24
        </span>
      </div>

      {/* Welcome text */}
      <div className="space-y-1 text-sm">
        <p>
          <span className="text-terminal-green">Welcome to</span>{' '}
          <span className="text-white font-bold glow-green">TermFolio</span>
          <span className="text-terminal-muted"> v1.0</span>
        </p>
        <p className="text-gray-400">
          Interactive portfolio of{' '}
          <span className="text-terminal-purple">{portfolioData.name}</span>
          {' '}·{' '}
          <span className="text-terminal-muted">{portfolioData.title}</span>
        </p>
        <p className="text-terminal-muted text-xs">
          Type <span className="text-terminal-green">help</span> to see available commands.
          {' '}Use <span className="text-terminal-green">Tab</span> to autocomplete.
        </p>
      </div>

      {/* Quick command hints */}
      <div className="flex flex-wrap gap-2 pt-1">
        {['about', 'projects', 'skills', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              // Dispatch a custom event that Terminal.tsx listens for
              window.dispatchEvent(new CustomEvent('termfolio:run', { detail: cmd }))
            }}
            className="text-xs text-terminal-green/70 border border-terminal-border hover:border-terminal-green/50 hover:text-terminal-green px-2 py-0.5 rounded transition-colors cursor-pointer font-mono"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}
