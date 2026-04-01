import { useState, useEffect } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&'

interface TextScrambleProps {
  text: string
  speed?: number
  className?: string
}

export function TextScramble({ text, speed = 40, className = '' }: TextScrambleProps) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutput(text)
      return
    }

    let frame = 0
    let queue: { from: string; to: string; start: number; end: number; char?: string }[] = []

    for (let i = 0; i < text.length; i++) {
      const from = CHARS[Math.floor(Math.random() * CHARS.length)]
      const start = Math.floor(Math.random() * 10)
      const end = start + Math.floor(Math.random() * 10)
      queue.push({ from, to: text[i], start, end })
    }

    const update = () => {
      let output = ''
      let complete = 0

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end, char } = queue[i]
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = CHARS[Math.floor(Math.random() * CHARS.length)]
          }
          output += `<span style="color:#6b7280">${queue[i].char}</span>`
        } else {
          output += from
        }
      }

      setOutput(output)
      if (complete !== queue.length) {
        frame++
        setTimeout(update, speed)
      }
    }

    update()
  }, [text, speed])

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: output }}
    />
  )
}
