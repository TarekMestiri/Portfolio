import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import  Footer  from './components/Footer';
export default function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/home" 
          element={<Home projectsRef={projectsRef} />} 
        />
        <Route path="/about" element={<About />} />
        <Route 
          path="/projects" 
          element={<Projects ref={projectsRef} />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home projectsRef={projectsRef} />} />
      </Routes>
      <Footer />
    </Router>
  );
}