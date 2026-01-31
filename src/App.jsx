import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Social from './pages/Social';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
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
      <footer className="py-8 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Sonic Sensory Lab. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
