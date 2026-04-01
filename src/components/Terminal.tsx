import { useRef, useEffect } from 'react'
import { useTerminal } from '../hooks/useTerminal'
import { TerminalOutput } from './TerminalOutput'
import { TerminalInput } from './TerminalInput'

export function Terminal() {
  const { history, run } = useTerminal()
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Scroll to bottom on new history entry
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Listen for quick-command buttons in WelcomeBanner
  useEffect(() => {
    const handler = (e: Event) => {
      const cmd = (e as CustomEvent).detail as string
      run(cmd)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
    window.addEventListener('termfolio:run', handler)
    return () => window.removeEventListener('termfolio:run', handler)
  }, [run])

  return (
    <div
      className="bg-[#0a0a0a] min-h-screen font-mono text-sm p-4 md:p-6 cursor-text overflow-y-auto scrollbar-hide max-w-4xl mx-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <TerminalOutput history={history} bottomRef={bottomRef} />
      <TerminalInput onSubmit={run} inputRef={inputRef} />
    </div>
  )
}
