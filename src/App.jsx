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
        <div className="footer-content">
          <p className="footer-location">
            Operating base: <a href="https://tmc.taipei/" target="_blank" rel="noopener noreferrer">Taipei Music Center</a>
            <br />
            <span className="location-cn">基地：臺北流行音樂中心</span>
          </p>
          <p className="copyright">&copy; {new Date().getFullYear()} Sonic Sensory Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
