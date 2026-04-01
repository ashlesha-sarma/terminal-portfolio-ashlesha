import { commandNames } from '../commands/index'

export function useAutocomplete(
  input: string,
  setInput: (s: string) => void
) {
  const onTab = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return
    e.preventDefault()

    const lower = input.toLowerCase()
    const match = commandNames.find(
      (c) => c.startsWith(lower) && c !== lower
    )
    if (match) setInput(match)
  }

  const hint = (() => {
    if (!input) return ''
    const lower = input.toLowerCase()
    const match = commandNames.find(
      (c) => c.startsWith(lower) && c !== lower
    )
    return match ? match.slice(input.length) : ''
  })()

  return { onTab, hint }
}
