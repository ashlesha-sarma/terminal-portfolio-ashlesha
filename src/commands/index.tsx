import { ReactNode } from 'react'
import { CommandRegistry } from '../types/terminal'
import { AboutOutput } from './about'
import { ProjectsOutput } from './projects'
import { SkillsOutput } from './skills'
import { ContactOutput } from './contact'
import { SudoOutput } from './sudo'

const commandDescriptions: Record<string, string> = {
  about: 'Who I am · background · interests',
  projects: 'Things I have built',
  skills: 'Tech stack · languages · tools',
  contact: 'Email · GitHub · LinkedIn',
  help: 'Show this help message',
  clear: 'Clear the terminal',
  'sudo hire me': '👀',
}

function HelpOutput(): ReactNode {
  return (
    <div className="animate-fade-in mt-2 space-y-1.5">
      <p className="text-terminal-muted text-xs mb-3">
        Type a command and press <kbd className="text-terminal-green bg-terminal-border px-1 rounded text-xs">Enter</kbd>.
        Use <kbd className="text-terminal-green bg-terminal-border px-1 rounded text-xs">Tab</kbd> to autocomplete,
        <kbd className="text-terminal-green bg-terminal-border px-1 rounded text-xs ml-1">↑↓</kbd> for history.
      </p>
      {Object.entries(commandDescriptions).map(([cmd, desc]) => (
        <div key={cmd} className="flex gap-4 items-baseline">
          <span className="text-terminal-purple font-mono w-28 shrink-0 text-sm">{cmd}</span>
          <span className="text-gray-400 text-xs">{desc}</span>
        </div>
      ))}
    </div>
  )
}

export const commands: CommandRegistry = {
  about: () => <AboutOutput />,
  projects: () => <ProjectsOutput />,
  skills: () => <SkillsOutput />,
  contact: () => <ContactOutput />,
  help: () => <HelpOutput />,
  clear: () => '__CLEAR__',
  'sudo hire me': () => <SudoOutput />,
}

export const commandNames = Object.keys(commands).filter((k) => k !== 'sudo hire me')
export { commandDescriptions }
