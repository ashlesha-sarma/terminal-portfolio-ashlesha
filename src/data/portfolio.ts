import { Project, ContactLink } from '../types/terminal'

export const portfolioData = {
  name: "Ashlesha Sarma",
  title: "CS Engineering and Data Science & AI Student",
  university: "Tezpur University",
  secondDegree: "BSc Data Science & AI · IIT Guwahati",
  bio: "CS Engineering and Data Science & AI student with hands-on experience building and deploying full-stack web applications end-to-end. I enjoy combining solid backend work with polished frontends — and occasionally training ML models in between.",
  interests: ["Full-Stack Development", "Machine Learning", "Frontend Engineering"],
  location: "Guwahati, Assam",
}

export const projects: Project[] = [
  {
    name: "CampusPaws",
    desc: "Animal welfare & adoption platform with role-based auth, admin panel, and Razorpay payment integration",
    tech: ["React 18", "Vite", "Node.js", "Express.js", "SQLite", "Razorpay", "Tailwind CSS"],
    url: "https://github.com/ashlesha-sarma/CampusPaws",
    live: "https://campuspaws.vercel.app",
  },
  {
    name: "FloodSense Assam",
    desc: "Real-time flood risk prediction dashboard for 33 Assam districts using ensemble ML on hydrological data",
    tech: ["Python", "Flask", "Scikit-learn", "Leaflet.js", "GeoJSON", "Render"],
    url: "https://github.com/ashlesha-sarma/FloodSense-Assam",
    live: "https://floodsense-assam.onrender.com",
  },
  {
    name: "SkillMap",
    desc: "Graph-based learning roadmap generator with topological sorting and TF-IDF keyword search",
    tech: ["FastAPI", "Next.js 14", "TypeScript", "SQLite", "React Flow", "Docker"],
    url: "https://github.com/ashlesha-sarma/SkillMap",
    live: "https://skillmap.vercel.app",
  },
  {
    name: "AlgoQuest",
    desc: "Gamified DSA learning platform with 5 interactive mini-games, XP system, and persistent leaderboard",
    tech: ["Next.js 14", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS"],
    url: "https://github.com/ashlesha-sarma/AlgoQuest-DSA-game",
    live: "https://algoquest-dsa.vercel.app",
  },
]

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js 14", "Tailwind CSS", "React Flow", "Leaflet.js", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    category: "ML / Data",
    items: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "TF-IDF"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Gunicorn", "VS Code"],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: "email",
    href: "mailto:ashleshasarma.contact@gmail.com",
    display: "ashleshasarma.contact@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/ashlesha-sarma",
    display: "github.com/ashlesha-sarma",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/ashlesha-sarma",
    display: "linkedin.com/in/ashlesha-sarma",
  },
  {
    label: "portfolio",
    href: "https://ashlesha-sarma-portfolio.vercel.app",
    display: "ashlesha-sarma-portfolio.vercel.app",
  },
]
