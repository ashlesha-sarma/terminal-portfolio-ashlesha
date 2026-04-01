import { useRef } from 'react'

export function useHistory(onNavigate: (cmd: string) => void) {
  const log = useRef<string[]>([])
  const ptr = useRef<number>(-1)

  const push = (cmd: string) => {
    if (cmd.trim()) {
      log.current = [cmd, ...log.current]
    }
    ptr.current = -1
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      ptr.current = Math.min(ptr.current + 1, log.current.length - 1)
      onNavigate(log.current[ptr.current] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      ptr.current = Math.max(ptr.current - 1, -1)
      onNavigate(ptr.current === -1 ? '' : log.current[ptr.current])
    }
  }

  return { push, onKeyDown }
}
