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
import { TranslationProvider } from './context/TranslationContext';
import LanguageSwitcher from './components/Tools/LanguageSwitcher';

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <TranslationProvider>
      <LanguageSwitcher />
      <Navbar scrollToSection={scrollToSection} />
      <Hero  scrollToSection={scrollToSection} withVanta={true} />
      <About />
      <Services  withVanta={true} />
      <Gallery />
      <Works />
      <Contact />
      <Footer />
        <ScrollToTopButton />
        </TranslationProvider>
    </div>
  );
}
export default App;
