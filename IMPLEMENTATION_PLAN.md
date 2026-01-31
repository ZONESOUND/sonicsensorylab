# Sonic Sensory Lab - Re-architecture Plan

## 1. Goal
Refactor the current static website into a modern, dynamic web application that allows easy content updates via **Markdown (.md)** files.

## 2. Technology Stack
*   **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
    *   Fast, modern, and allows for "rich aesthetics" and interactive elements.
*   **Content Management:** Markdown (`.md`)
    *   Articles/Cases will live in a `src/content` folder.
    *   Frontmatter (metadata like title, date, image) will be parsed automatically.
*   **Styling:** Vanilla CSS (Modern CSS Variables, Flexbox/Grid)
    *   Focus on "Glassmorphism", "Dark Mode", and "Micro-animations" as per Sonic Sensory Lab's identity.
*   **Deployment:** GitHub Actions
    *   Auto-deploy to GitHub Pages whenever a new `.md` file is pushed.

## 3. Architecture
### File Structure
```
/
├── .github/workflows/   # Auto-deployment scripts
├── src/
│   ├── assets/          # Images, Fonts
│   ├── components/      # Reusable UI (Navbar, Footer, Card)
│   ├── content/         # YOUR MARKDOWN FILES (e.g., project-1.md)
│   ├── pages/           # Home, About, Article Detail
│   ├── styles/          # Global CSS, Variables
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

### Workflow for User
1.  Create a new file: `src/content/new-project.md`
2.  Write content + metadata.
3.  Git Commit & Push.
4.  Website updates automatically.

## 4. Migration Steps
1.  **Backup:** Move current files (`index.html`, `assets/`, etc.) to `_legacy_site/`.
2.  **Initialize:** Create new Vite + React project.
3.  **Setup:** Install Markdown parsers (`front-matter`, `react-markdown`).
4.  **Develop:** Build the layout and "Rich Aesthetic" design.
5.  **Deploy:** Configure GitHub Actions.
