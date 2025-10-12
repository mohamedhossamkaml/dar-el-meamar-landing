import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import darImg from '../assets/darImg.png';
import {
  fadeInUp,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import LanguageSwitcher from './Tools/LanguageSwitcher';
import { useTranslation } from "react-i18next";
import ThemeToggle from './Tools/ThemeToggle';

interface Props {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ["home", "about", "services", "gallery", "works"];

  return (
    <motion.nav
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md dark:bg-gray-900'
          : 'bg-white/95 backdrop-blur-sm dark:bg-gray-900/95'
      }`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.img
            src={darImg}
            alt="Dar El-Meamar"
            className="h-14 md:h-20 w-auto cursor-pointer"
            variants={scaleIn}
            onClick={() => scrollToSection("home")}
          />

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8 rtl:space-x-reverse"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize
                           dark:text-gray-200 dark:hover:text-teal-400"
                variants={fadeInUp}
              >
                {t(`navbar.${section}`)}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium
                         dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
              variants={fadeInUp}
            >
              {t("navbar.contact")}
            </motion.button>
            <LanguageSwitcher />
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={fadeInRight}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t dark:bg-gray-900 dark:border-gray-700"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium capitalize
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t(`navbar.${section}`)}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium mt-2
                           dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
                variants={scaleIn}
              >
                {t("navbar.contact")}
              </motion.button>

              {/* Language & Theme Switchers */}
              <div className="mt-4 flex items-center justify-between">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
