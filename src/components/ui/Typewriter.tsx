import { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  onDone?: () => void
}

export function Typewriter({ text, speed = 18, className = '', onDone }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    // Skip animation if reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(text)
      setDone(true)
      onDone?.()
      return
    }
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setDone(true)
        onDone?.()
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed, onDone])

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="inline-block w-1.5 h-3.5 bg-green-400 animate-cursor-blink align-text-bottom ml-px" />
      )}
    </span>
  )
}
