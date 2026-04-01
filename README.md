# TermFolio

![Deploy](https://img.shields.io/badge/Deployed-Vercel-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18-61DAFB)
![License](https://img.shields.io/badge/License-MIT-green)

> A personal portfolio that looks and feels like a real Unix terminal.

**[Live Demo →](https://termfolio-ashlesha.vercel.app)**

---

## Commands

| Command | Description |
|---|---|
| `about` | Who I am · background · interests |
| `projects` | Things I have built |
| `skills` | Tech stack · languages · tools |
| `contact` | Email · GitHub · LinkedIn |
| `help` | Show all commands |
| `clear` | Clear the terminal |
| `sudo hire me` | 👀 |

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `Enter` | Submit command |
| `Tab` | Autocomplete |
| `↑ / ↓` | Navigate history |
| `Ctrl+L` | Clear terminal |
| Click anywhere | Refocus input |

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Stack

- **React 18** + **Vite** — fast HMR dev experience
- **TypeScript** — command registry typed as `Record<string, CommandHandler>`
- **Tailwind CSS v3** — terminal aesthetic utility classes
- **reactbits.dev** — Typewriter + TextScramble animations

## Adding a New Command

1. Create `src/commands/blog.tsx` and export a `BlogOutput` component
2. In `src/commands/index.tsx`, add one line: `blog: () => <BlogOutput />`

That's it. Zero other changes needed.

## Architecture

```
src/
├── commands/       # Each command = one file + one export
│   ├── index.tsx   # Registry: Record<string, CommandHandler>
│   └── ...
├── components/     # Terminal shell, input, output, lines
├── hooks/          # useTerminal, useHistory, useAutocomplete
├── types/          # All TypeScript types in one place
└── data/           # Your portfolio content (edit this!)
```

## Customisation

All your personal content lives in **`src/data/portfolio.ts`** — edit your name, bio, projects, skills, and contact links there.

---

MIT License
