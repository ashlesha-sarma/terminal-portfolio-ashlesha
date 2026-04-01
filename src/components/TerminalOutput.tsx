import { RefObject } from 'react'
import { HistoryEntry } from '../types/terminal'
import { OutputLine } from './OutputLine'

interface TerminalOutputProps {
  history: HistoryEntry[]
  bottomRef: RefObject<HTMLDivElement>
}

export function TerminalOutput({ history, bottomRef }: TerminalOutputProps) {
  return (
    <div
      role="log"
      aria-label="Terminal output"
      aria-live="polite"
      className="min-h-0"
    >
      {history.map((entry) => (
        <OutputLine key={entry.id} entry={entry} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
