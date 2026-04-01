import { useState, useCallback, ReactNode } from 'react'
import { commands } from '../commands/index'
import { HistoryEntry } from '../types/terminal'
import { WelcomeBanner } from '../components/WelcomeBanner'

export function useTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: crypto.randomUUID(),
      input: '',
      output: <WelcomeBanner />,
      timestamp: new Date(),
    },
  ])

  const run = useCallback((raw: string) => {
    const trimmed = raw.trim().toLowerCase()
    if (!trimmed) return

    const handler = commands[trimmed]
    let output: ReactNode

    if (handler) {
      output = handler(trimmed.split(' ').slice(1))
    } else {
      output = (
        <span className="text-terminal-red text-sm">
          command not found: <span className="text-white">{trimmed}</span>
          {' '}· type <span className="text-terminal-green">help</span> for available commands
        </span>
      )
    }

    if (output === '__CLEAR__') {
      setHistory([])
      return
    }

    setHistory((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        input: raw,
        output,
        timestamp: new Date(),
      },
    ])
  }, [])

  return { history, run }
}
