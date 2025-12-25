
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import OurWork from './pages/OurWork.tsx';
import Team from './pages/Team.tsx';
import JoinUs from './pages/JoinUs.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, just scroll to the top smoothly
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If there is a hash, scroll to that section with an offset for the fixed header
    const scrollToHash = () => {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Small delay to allow the page to render fully, especially on initial load or route change
    const timer = setTimeout(scrollToHash, 150);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
