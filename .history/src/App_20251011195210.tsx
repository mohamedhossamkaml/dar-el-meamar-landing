import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/Tools/ScrollToTopButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero scrollToSection={scrollToSection} />
      <Navbar scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Gallery />
      <Works />
      <Contact />
      <Footer />

      <ScrollToTopButton />
    </div>
  );
}
export default App;
