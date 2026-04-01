import { Project, ContactLink } from '../types/terminal'

export const portfolioData = {
  name: 'Ashlesha Sarma',
  title: '2nd Year CSE Student',
  university: 'Tezpur University',
  secondDegree: 'BSc Data Science & AI · IIT Guwahati',
  bio: 'I build things for the web and occasionally break them on purpose to understand them better. Passionate about elegant code, ML experiments, and open source contributions.',
  interests: ['Machine Learning', 'Frontend Engineering', 'Open Source'],
  location: 'Guwahati, Assam',
}

export const projects: Project[] = [
  {
    name: 'StudyDeck',
    desc: 'Spaced repetition flashcard app with SM-2 algorithm',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    url: 'https://github.com/ashlesha/studydeck',
    live: 'https://studydeck.vercel.app',
  },
  {
    name: 'NoteForge',
    desc: 'Markdown note-taking app with real-time preview',
    tech: ['React', 'TypeScript', 'CodeMirror', 'Zustand'],
    url: 'https://github.com/ashlesha/noteforge',
  },
  {
    name: 'WeatherPulse',
    desc: 'Minimalist weather dashboard with animated charts',
    tech: ['React', 'Vite', 'Chart.js', 'OpenWeather API'],
    url: 'https://github.com/ashlesha/weatherpulse',
    live: 'https://weatherpulse.vercel.app',
  },
  {
    name: 'TermFolio',
    desc: 'This portfolio — a terminal-style React/TS portfolio',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://github.com/ashlesha/termfolio',
    live: '#',
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'VS Code', 'Docker'],
  },
  {
    category: 'AI / APIs',
    items: ['Gemini API', 'OpenAI', 'Anthropic', 'HuggingFace'],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'email',
    href: 'mailto:ashlesha@example.com',
    display: 'ashlesha@example.com',
  },
  {
    label: 'github',
    href: 'https://github.com/ashlesha',
    display: 'github.com/ashlesha',
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/ashlesha',
    display: 'linkedin.com/in/ashlesha',
  },
  {
    label: 'twitter',
    href: 'https://twitter.com/ashlesha_dev',
    display: '@ashlesha_dev',
  },
]
