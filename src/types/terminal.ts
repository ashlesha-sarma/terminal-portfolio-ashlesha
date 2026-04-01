import { ReactNode } from 'react'

export type CommandHandler = (args: string[]) => ReactNode

export type CommandRegistry = Record<string, CommandHandler>

export interface HistoryEntry {
  id: string
  input: string
  output: ReactNode
  timestamp: Date
}

export interface Project {
  name: string
  desc: string
  tech: string[]
  url: string
  live?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ContactLink {
  label: string
  href: string
  display: string
}

export interface AutocompleteHint {
  match: string
  prefix: string
}
