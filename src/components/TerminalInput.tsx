import { useState, RefObject } from 'react'
import { useHistory } from '../hooks/useHistory'
import { useAutocomplete } from '../hooks/useAutocomplete'

interface TerminalInputProps {
  onSubmit: (input: string) => void
  inputRef: RefObject<HTMLInputElement>
}

export function TerminalInput({ onSubmit, inputRef }: TerminalInputProps) {
  const [value, setValue] = useState('')

  const { push, onKeyDown: histKeyDown } = useHistory(setValue)
  const { onTab, hint } = useAutocomplete(value, setValue)

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit(value)
      push(value)
      setValue('')
      return
    }
    // Ctrl+L = clear
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      onSubmit('clear')
      return
    }
    onTab(e)
    histKeyDown(e)
  }

  return (
    <div className="flex items-center mt-1 group">
      {/* Prompt */}
      <span className="text-terminal-green select-none text-sm glow-green shrink-0">
        ashlesha@portfolio
      </span>
      <span className="text-terminal-muted select-none text-sm mx-1.5">~</span>
      <span className="text-white select-none text-sm mr-2">$</span>

      {/* Input area with ghost autocomplete hint */}
      <div className="relative flex-1 flex items-center">
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          className="bg-transparent text-white outline-none w-full text-sm caret-transparent font-mono z-10 relative"
          aria-label="Terminal input"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        {/* Ghost autocomplete hint & Custom thick cursor */}
        <div className="absolute left-0 top-0 text-sm font-mono pointer-events-none select-none z-0 mt-[1.5px] flex items-center">
          <span className="text-transparent whitespace-pre">{value}</span>
          <span className="w-2 h-4 bg-terminal-green animate-cursor-blink glow-green" />
          {hint && <span className="text-terminal-muted/50 whitespace-pre">{hint}</span>}
        </div>
      </div>
    </div>
  )
}
