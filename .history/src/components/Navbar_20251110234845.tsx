import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './Tools/ThemeToggle ';
import LanguageToggle from './Tools/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import logoImage from '../assets/darImg.png';
import {
  fadeInUp,
  fadeInRight,
  scaleIn,
  staggerContainer,
  fadeInLeft
} from '../utils/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // background opacity (0..1) controlled by scroll position
  const [bgOpacity, setBgOpacity] = useState(0.95);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > 50);

      // compute opacity from scroll: keep a minimum, grow with scroll up to max
      const min = 0.2;
      const max = 0.90;
      // change factor: how quickly opacity increases (pixels)
      const factor = 300;
      let o = Math.min(max, Math.max(min, y / factor));
      setBgOpacity(Number(o.toFixed(2)));
    };
    window.addEventListener('scroll', handleScroll);
    // track dark mode class on root (Tailwind 'dark' class)
    const darkObserver = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    darkObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isDark
          ? isScrolled
            ? `rgba(15,23,42,${bgOpacity})`
            : `rgba(15,23,42,${Math.min(bgOpacity, 0.8)})`
          : isScrolled
            ? `rgba(255,255,255,${bgOpacity})`
            : `rgba(255,255,255,${Math.min(bgOpacity, 0.8)})`,
        boxShadow: isScrolled
          ? isDark
            ? '0 8px 30px rgba(255,255,255,0.08)'
            : '0 8px 30px rgba(0,0,0,0.12)'
          : 'none'
      }}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex justify-between items-center h-32" >
          {/* Logo */}
          <Link to="/">
            <motion.img
              src={logoImage}
              alt="Dar El-Meamar select-none pointer-events-none "
              className="h-28 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              variants={fadeInLeft}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8 rtl:space-x-reverse"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Link to="/">
              <motion.span
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium
                           dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
                variants={fadeInUp}
              >
                {t.nav.home}
              </motion.span>
            </Link>
            <Link to="/about">
              <motion.span
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium
                           dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
                variants={fadeInUp}
              >
                {t.nav.about}
              </motion.span>
            </Link>
            <Link to="/services">
              <motion.span
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium
                           dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
                variants={fadeInUp}
              >
                {t.nav.services}
              </motion.span>
            </Link>
            <Link to="/gallery">
              <motion.span
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium
                           dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
                variants={fadeInUp}
              >
                {t.nav.gallery}
              </motion.span>
            </Link>
            <Link to="/works">
              <motion.span
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium
                           dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
                variants={fadeInUp}
              >
                {t.nav.works}
              </motion.span>
            </Link>
            <Link to="/contact">
              <motion.button
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium
                           dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
                variants={fadeInUp}
              >
                {t.nav.contact}
              </motion.button>
            </Link>
            <LanguageToggle />
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
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t dark:border-gray-700"
            style={{
              backgroundColor: isDark
                ? `rgba(15,23,42,${Math.min(bgOpacity, 0.9)})`
                : `rgba(255,255,255,${Math.min(bgOpacity, 0.9)})`,
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  className="block w-full text-left rtl:text-right py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t.nav.home}
                </motion.div>
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  className="block w-full text-left rtl:text-right py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t.nav.about}
                </motion.div>
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  className="block w-full text-left rtl:text-right py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t.nav.services}
                </motion.div>
              </Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  className="block w-full text-left rtl:text-right py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t.nav.gallery}
                </motion.div>
              </Link>
              <Link to="/works" onClick={() => setIsMenuOpen(false)}>
                <motion.div
                  className="block w-full text-left rtl:text-right py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium
                             dark:text-gray-200 dark:hover:text-teal-400"
                  variants={fadeInUp}
                >
                  {t.nav.works}
                </motion.div>
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  className="block w-full text-left rtl:text-right py-2 bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium mt-2
                             dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
                  variants={scaleIn}
                >
                  {t.nav.contact}
                </motion.button>
              </Link>

              {/* Language & Theme Toggle for Mobile */}
              <motion.div
                className="flex justify-center gap-3 pt-2"
                variants={fadeInUp}
              >
                <LanguageToggle />
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
