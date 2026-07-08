import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quality from './pages/Quality';
import About from './pages/About';
import Contact from './pages/Contact';
import AutoEV from './pages/AutoEV';
import PIHeaters from './pages/PIHeaters';
import ColdStart from './pages/ColdStart';
import Faq from './pages/Faq';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auto-ev" element={<AutoEV />} />
            <Route path="/pi-heaters" element={<PIHeaters />} />
            <Route path="/cold-start" element={<ColdStart />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
