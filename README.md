# TermFolio
**An immersive, interactive developer portfolio disguised as a Unix terminal.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Overview
TermFolio is a highly interactive, CLI-driven developer portfolio that mirrors a real terminal environment. It goes beyond static web pages by forcing active engagement, allowing recruiters and engineering managers to intuitively discover professional experience through standard Unix-style commands.

## Live Demo
**[Experience the Terminal →](https://terminal-portfolio-ashlesha.vercel.app)**

## Tech Stack
- **Frontend Core**: React 18, TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Animations**: reactbits.dev
- **Deployment**: Vercel


## Features
- **Simulated Command Parser**: Executes and renders dedicated outputs for custom commands (`about`, `projects`, `skills`, `contact`, `sudo`).
- **Stateful History Navigation**: Cycles through previously executed commands using the `↑` and `↓` arrow keys, mirroring standard Unix bash behavior.
- **Intelligent Autocomplete**: Accelerates command input with functional `Tab` key completion.
- **Authentic Micro-Animations**: Integrates typewriter and text-scrambling effects to faithfully emulate vintage CRT monitors and hardware rendering.
- **Full Keyboard Accessibility**: Supports universal hotkeys (e.g., `Ctrl+L` to clear screen) and programmatic focus management for an unbroken user experience.

## Architecture Flow
```text
User Keyboard Input → Event Listener → Input Buffer → Command Parser → History Stack Update → React View Re-render
```

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/ashlesha-sarma/terminal-portfolio-ashlesha.git

# Navigate into the project directory
cd terminal-portfolio-ashlesha

# Install dependencies
npm install

# Start the development server
npm run dev
```
## Author
**Ashlesha Sarma**
- [GitHub](https://github.com/ashlesha-sarma)
- [Live Portfolio](https://terminal-portfolio-ashlesha.vercel.app)
