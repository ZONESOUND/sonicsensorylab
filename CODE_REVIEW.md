# Codebase Review: Sonic Sensory Lab

## 1. Project Overview
**Type:** SPA (Single Page Application)
**Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
**State:** Active Development / Production Ready
**Content Strategy:** Markdown-driven

The repository has been successfully re-architected from a generated static site (Publii) to a modern React-based application. This allows for component reuse, dynamic routing, and ease of content management via Markdown files.

## 2. Key Observations
### A. Architecture
- **Source-Driven:** The core business logic lives in `src/`, with entry points at `main.jsx` and `App.jsx`.
- **Markdown Content:**
    - **Projects:** Stored in `src/content/projects/*.md`.
    - **Pages:** Stored in `src/content/pages/*.md` (e.g., `about.md`).
    - This allows non-technical updates by simply editing text files.
- **Routing:** Uses `react-router-dom` with `framer-motion` for smooth page transitions.
- **Build System:** Vite handles bundling, ensuring fast hot-module replacement (HMR) during development and optimized production builds.

### B. Deployment status
- **GitHub Actions:** A `deploy.yml` workflow is set up to automatically build and deploy to the `gh-pages` branch on every push to `main`.
- **SPA Routing Fix:** The build script includes a post-build step (`cp dist/index.html dist/404.html`) to handle client-side routing on GitHub Pages. This prevents 404 errors when refreshing on deep links (e.g., `/about`).

### C. Design & Aesthetics
- **Core Style:** Custom CSS variables for a consistent "Sonic Sensory" theme (Dark mode, minimal, high-contrast).
- **Icons:** Integrated `lucide-react` for scalable SVG icons (e.g., Instagram, Menu).
- **Responsive:** The `Navbar` and layouts adapt to mobile and desktop screens.

## 3. Maintenance Guide
### Adding a Project
1. Create a new `.md` file in `src/content/projects/`.
2. Add frontmatter (title, date, tags, coverImage).
3. Push to `main`.

### Editing Static Pages (About)
1. Edit `src/content/pages/about.md`.
2. Push to `main`.

### Updating Code
- **React Components:** Located in `src/components/` (Navbar, etc.) and `src/pages/`.
- **Styles:** Global styles in `src/styles/global.css` or component-specific CSS.
