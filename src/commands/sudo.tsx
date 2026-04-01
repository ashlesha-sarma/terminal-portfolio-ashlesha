import { useState, useEffect } from 'react'
import { TextScramble } from '../components/ui/TextScramble'

const steps = [
  { text: '[sudo] password for recruiter: ••••••••', delay: 0 },
  { text: 'Authenticating...', delay: 900 },
  { text: '✓ Identity verified', delay: 1500 },
  { text: '✓ Resume approved', delay: 2000 },
  { text: '✓ Portfolio score: 98/100', delay: 2500 },
  { text: '✓ Vibe check: passed', delay: 3000 },
]

export function SudoOutput() {
  const [visible, setVisible] = useState(0)
  const [showFinal, setShowFinal] = useState(false)

  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => setVisible(i + 1), steps[i].delay)
    })
    setTimeout(() => setShowFinal(true), 3600)
  }, [])

  return (
    <div className="space-y-1 text-sm animate-fade-in mt-2">
      {steps.slice(0, visible).map((s, i) => (
        <p key={i} className={`${i === 0 ? 'text-terminal-muted' : 'text-green-300'} animate-slide-in`}>
          {s.text}
        </p>
      ))}
      {showFinal && (
        <div className="mt-3 border border-terminal-green/30 rounded p-3 bg-terminal-green/5 animate-slide-in">
          <p className="text-terminal-green font-bold text-base">
            <TextScramble text="ACCESS GRANTED." speed={35} />
          </p>
          <div className="mt-2 space-y-1 text-xs text-gray-300">
            <p>→ Hire request submitted to HR.</p>
            <p>→ Offer letter ETA: 2 business days.</p>
            <p>→ Welcome to the team, Ashlesha. 🎉</p>
          </div>
        </div>
      )}
    </div>
  )
}
