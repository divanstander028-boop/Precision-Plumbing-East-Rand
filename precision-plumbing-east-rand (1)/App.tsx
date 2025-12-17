import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceAreas } from './pages/ServiceAreas';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => window.location, []);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<ServiceAreas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
  );
};

export default App;