import { HistoryEntry } from '../types/terminal'

interface OutputLineProps {
  entry: HistoryEntry
}

export function OutputLine({ entry }: OutputLineProps) {
  return (
    <div className="animate-slide-in">
      {/* Show the prompt + input line (skip for welcome banner which has no input) */}
      {entry.input && (
        <div className="flex items-center gap-2 mb-1">
          <span className="text-terminal-green select-none text-sm glow-green">
            ashlesha@portfolio
          </span>
          <span className="text-terminal-muted text-sm select-none">~</span>
          <span className="text-white text-sm select-none">$</span>
          <span className="text-white text-sm">{entry.input}</span>
        </div>
      )}

      {/* Output */}
      {entry.output && (
        <div className="pl-0 mb-4 text-sm leading-relaxed">
          {entry.output}
        </div>
      )}
    </div>
  )
}
