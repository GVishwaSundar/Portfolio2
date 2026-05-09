# G Vishwa Sundar – "Proof of Work" Portfolio

A premium, single-page React portfolio designed with a distinct "Proof of Work" aesthetic. This project eschews generic templates in favor of a raw, technical, and deliberate design featuring warm dark tones, acid green accents, monospace typography, and advanced micro-interactions.

## 🛠 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (with custom CSS variable mapping)
- **Animations:** Framer Motion (spring physics, layout animations, custom hooks)
- **Icons:** Lucide React

## ✨ Key Features & Creative Enhancements

- **Buttery Smooth Custom Cursor:** Uses Framer Motion's `useMotionValue` to bypass React's render cycle for zero-latency tracking. Features a distinct inner dot and a dragging outer frosted-glass ring that expands on interactive elements.
- **Terminal Typing Animation:** The hero section features a dynamic terminal block that types out commands line-by-line with a blinking cursor.
- **Magnetic Links:** Interactive links and buttons physically pull toward the user's cursor using spring physics when hovered.
- **Scramble / Decode Text Reveal:** Section headers (`// 01 · SELECTED WORK`, etc.) decode themselves from random hacker-style symbols into readable text when scrolled into view.
- **Project Spotlight Effect:** Hovering over a project card subtly blurs and dims the surrounding cards while applying a faint acid-green inner glow to the focused card.
- **Scroll-Tracked Chain Line:** A fixed vertical chain line on the left of the screen tracks the user's scroll progress, lighting up nodes as new sections are reached.
- **Subtle Noise Texture:** A fixed, `3%` opacity SVG fractal noise filter overlays the entire application to give the dark background a premium, tactile matte finish.

## 📂 Project Structure

```text
gvs-portfolio/
├── public/
│   └── favicon.svg            # Custom acid-green dot favicon
├── src/
│   ├── components/
│   │   ├── Certifications.jsx # Proof section
│   │   ├── ChainLine.jsx      # Scroll progress indicator
│   │   ├── Contact.jsx        # Ping section with magnetic links
│   │   ├── Cursor.jsx         # Custom zero-latency cursor
│   │   ├── Experience.jsx     # Path section (Work/Education)
│   │   ├── Footer.jsx         # Simple footer with Lucide icons
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Magnetic.jsx       # Wrapper for magnetic hover physics
│   │   ├── Navbar.jsx         # Fixed top navigation
│   │   ├── Noise.jsx          # SVG texture overlay
│   │   ├── Projects.jsx       # Selected Work section with spotlight
│   │   ├── ScrambleText.jsx   # Text decoding animation component
│   │   ├── Skills.jsx         # Stack section
│   │   └── TerminalTyping.jsx # Dynamic typing effect for Hero
│   ├── data/
│   │   └── portfolio.js       # Centralized static data store
│   ├── animations.js          # Shared Framer Motion variants
│   ├── App.jsx                # Main layout and composition
│   ├── index.css              # Global styles, variables, and Tailwind injection
│   └── main.jsx               # React entry point
├── index.html                 # HTML template and Google Fonts
├── tailwind.config.js         # Theme overrides and custom colors
├── vercel.json                # Vercel deployment configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Local Development Guide

Follow these steps to run the project on your local machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### 1. Installation
If you haven't already, install the project dependencies:
```bash
# Ensure you are in the project directory
cd gvs-portfolio

# Install dependencies
npm install
```

### 2. Start the Development Server
Run Vite's local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`. Any changes made to the code will hot-reload instantly.

### 3. Build for Production
To generate a highly optimized, minified production build:
```bash
npm run build
```
This will create a `dist/` directory containing the static files ready to be deployed.

## 🌐 Deployment

This project includes a `vercel.json` file configured for seamless deployment on Vercel.

1. Initialize a Git repository, commit your code, and push it to GitHub.
2. Log in to Vercel and import your repository.
3. Vercel will automatically detect the Vite framework and configure the build settings (`npm run build` and `dist` output).
4. Click **Deploy**.