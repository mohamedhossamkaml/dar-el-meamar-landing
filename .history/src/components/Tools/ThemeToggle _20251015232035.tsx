import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.button
      variants={fadeInUp}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </motion.button>
  );
};

export default ThemeToggle;
