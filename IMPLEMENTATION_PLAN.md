# Sonic Sensory Lab - Re-architecture Plan

## 1. Goal
Refactor the current static website into a modern, dynamic web application that allows easy content updates via **Markdown (.md)** files.

## 2. Technology Stack
*   **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
*   **Content Management:** Markdown (`.md`)
    *   Articles/Cases will live in a `src/content` folder.
*   **Styling:** Vanilla CSS (Modern CSS Variables, Flexbox/Grid)
*   **Deployment:** GitHub Actions

## 3. Architecture
### File Structure
```
/
├── .agent/              # AI Skills & Workflows
├── .github/workflows/   # Auto-deployment scripts
├── src/
│   ├── assets/          # Images, Fonts
│   ├── components/      # Reusable UI (Navbar, Footer, Card)
│   ├── content/         # MARKDOWN (content/projects/*.md, content/pages/*.md)
│   ├── pages/           # Home, About, Article Detail
│   ├── styles/          # Global CSS, Variables
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

## 4. Migration Status
- [x] **Initialize:** Create new Vite + React project.
- [x] **Setup:** Install Markdown parsers (`front-matter`, `react-markdown`).
- [x] **Develop:** Build the layout and "Rich Aestetics" design.
    - [x] Navbar (Responsive, Glassmorphism)
    - [x] Footer (Simplified, Instagram link)
    - [x] Home Page (Address added)
    - [x] Projects Index (Grid layout)
    - [x] Project Detail (Markdown rendering)
    - [x] About Page (Markdown rendering)
- [x] **Deploy:** Configure GitHub Actions.
    - [x] SPA Fallback (`404.html`)

## 5. Next Steps
- [ ] **Instagram Integration:** Implement dynamic feed using `react-social-media-embed` or Graph API.
- [ ] **Skill System:** Create `.agent/skills` to automate repetitive maintenance tasks.
- [ ] **SEO Optimization:** Detailed meta tags per project.
