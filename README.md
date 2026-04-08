# TermFolio

**An immersive, interactive developer portfolio mimicking a Unix terminal environment.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Overview

TermFolio is a highly interactive, CLI-driven web application that reimagines the standard developer portfolio. It forces active engagement, allowing engineering managers to intuitively discover professional experience through a real-time, terminal-like interface.

## Live Demo

**[Experience the Terminal →](https://terminal-portfolio-ashlesha.vercel.app)**

## Tech Stack

- **Frontend Core**: React 18, TypeScript
- **Styling**: Tailwind CSS v3
- **Build System**: Vite
- **Animations**: reactbits.dev
- **Deployment**: Vercel

## Problem

Traditional web portfolios are static, predictable, and fail to effectively demonstrate a developer's engineering capabilities. Hiring managers scan hundreds of identical pages that lack technical depth or proof of core software principles.

## Solution

A browser-based terminal emulator that requires Unix-style command navigation. This instantly signals technical proficiency, familiarity with CLI tooling, and demonstrates the ability to build scalable, stateful web applications. It transforms passive reading into a dynamic, interactive user experience.

## Features

- **Simulated Command Parser**: Executes and renders accurate outputs for custom commands (`help`, `about`, `projects`, `skills`, `contact`).
- **Stateful History Navigation**: Cycles through executed commands using `↑` and `↓` arrow keys, mirroring standard bash behavior.
- **Intelligent Autocomplete**: Accelerates command input with functional `Tab` key completion.
- **Authentic Micro-Animations**: Integrates typewriter and text-scrambling effects to faithfully emulate hardware rendering.
- **Keyboard Accessibility**: Supports global hotkeys (e.g., `Ctrl+L` for screen clear) and programmatic focus management.

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

## Future Improvements

- **Simulated File System**: Enable complex directory navigation directly via `cd`, `ls`, and `cat` commands.
- **Remote Data Fetching**: Pull project data and GitHub commit statistics dynamically via API instead of hardcoded state.
- **Persistent User Sessions**: Save terminal state in `localStorage` to persist history and context across page reloads.
- **Advanced Theming Engine**: Support switching between classic terminal visuals (e.g., Matrix green, Hacker, Monokai).

## Author

**Ashlesha Sarma**  
[GitHub](https://github.com/ashlesha-sarma) • [Live Portfolio](https://terminal-portfolio-ashlesha.vercel.app)
