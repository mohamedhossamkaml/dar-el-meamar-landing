// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';

interface Props {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <img src="/دار المعمار.png" alt="Dar El-Meamar" className="h-28 w-auto" />

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'gallery', 'works'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize"
              >
                {section.replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['home', 'about', 'services', 'gallery', 'works'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize"
              >
                {section.replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium mt-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
