import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInUp,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import ThemeToggle from './Tools/ThemeToggle ';

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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <motion.img
            src="/دار المعمار.png"
            alt="Dar El-Meamar"
            className="h-28 w-auto"
            variants={scaleIn}
          />

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {['home', 'about', 'services', 'gallery', 'works'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize"
                variants={fadeInUp}
              >
                {section.replace(/([A-Z])/g, ' $1')}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              variants={fadeInUp}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={fadeInRight}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
                  <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'services', 'gallery', 'works'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize"
                  variants={fadeInUp}
                >
                  {section.replace(/([A-Z])/g, ' $1')}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium mt-2"
                variants={scaleIn}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
