import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Social from './pages/Social';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

import { Instagram } from 'lucide-react';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="app-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/social" element={<Social />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="app-footer">
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <p className="copyright" style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Sonic Sensory Lab. All Rights Reserved.</p>
          <a
            href="https://www.instagram.com/sonic_sensory_lab/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: 'white' }}
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
