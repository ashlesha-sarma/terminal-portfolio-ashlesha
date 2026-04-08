import { Project, ContactLink } from '../types/terminal'

export const portfolioData = {
  name: "Ashlesha Sarma",
  title: "CS Engineering and Data Science & AI Student",
  primaryDegree: 'B.Tech, Computer Science & Engineering · Tezpur University',
  secondDegree: 'B.Sc. (Hons), Data Science & AI · IIT Guwahati (Online)',
  bio: "CS Engineering and Data Science & AI student with hands-on experience building and deploying full-stack web applications end-to-end. I enjoy combining solid backend work with polished frontends — and occasionally training ML models in between.",
  interests: ["Full-Stack Development", "Machine Learning", "Frontend Engineering"],
  location: "Guwahati, Assam",
}

export const projects: Project[] = [
  {
    name: "FloodSense Assam",
    desc: "Real-time flood risk prediction dashboard for all 33 Assam districts using an ensemble of ExtraTreesClassifier and RandomForestRegressor trained on CWC hydrological data. Serves district-level risk scores via Flask REST API and visualizes them on an interactive Leaflet.js map with GeoJSON overlays.",
    tech: ["Python", "Flask", "Scikit-learn", "Leaflet.js", "GeoJSON", "Gunicorn", "Render"],
    url: "https://github.com/ashlesha-sarma/flood-dashboard-assam",
    live: "https://flood-dashboard-assam.onrender.com",
  },
  {
    name: "Mushroom Toxicity Analysis",
    desc: "ML pipeline to classify 61,069 mushroom samples across 173 species as edible or poisonous. Includes data preprocessing, feature engineering with Pandas/NumPy, and a Flask web app for real-time predictions.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    url: "https://github.com/ashlesha-sarma/mushroom-toxicity-analysis",
    live: "https://mushrom-toxicity-analysis.onrender.com",
  },
  {
    name: "SkillMap",
    desc: "Graph-based learning roadmap generator using topological sorting to auto-order topics and identify prerequisites. TF-IDF cosine similarity search (no external ML libs) matches queries to roadmap nodes. FastAPI backend + Next.js 14 frontend with React Flow, fully containerized with Docker.",
    tech: ["FastAPI", "Next.js 14", "TypeScript", "SQLite", "React Flow", "Docker"],
    url: "https://github.com/ashlesha-sarma/skillmap",
    live: "https://skillmap-eight.vercel.app",
  },
  {
    name: "AlgoQuest",
    desc: "Gamified DSA learning platform with 5 interactive browser-playable mini-games (BFS, Linked List, Stack, Sorting, Sliding Window). Features XP rewards, difficulty levels, and a persistent cross-session leaderboard backed by PostgreSQL.",
    tech: ["Next.js 14", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS", "bcryptjs"],
    url: "https://github.com/ashlesha-sarma/AlgoQuest-DSA-game",
    live: "https://algo-quest-dsa-game.vercel.app",
  },
  {
    name: "CampusPaws",
    desc: "Full-stack animal welfare and adoption platform with role-based auth (user + admin), a protected admin panel for managing animals and adoption requests, Razorpay payment gateway with HMAC verification, and a REST API across 5 route modules backed by SQLite.",
    tech: ["React 18", "Vite", "Node.js", "Express.js", "SQLite", "Razorpay", "Tailwind CSS"],
    url: "https://github.com/ashlesha-sarma/campus-paws",
    live: "https://campus-paws.vercel.app",
  },
  {
    name: "TermFolio",
    desc: "This portfolio — a terminal-style interactive React/TypeScript portfolio with command autocomplete, history navigation, animated outputs, and a secret sudo easter egg for recruiters.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    url: "https://github.com/ashlesha-sarma/terminal-portfolio-ashlesha",
    live: "https://terminal-portfolio-ashlesha.vercel.app",
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
