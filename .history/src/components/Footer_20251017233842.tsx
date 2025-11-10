import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';

import logoImage from '../assets/darImg.png';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <motion.footer
      className="bg-gray-900 dark:bg-gray-800 text-white py-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4"
          variants={fadeInUp}
        >
          {/* Logo Image */}
          <motion.img
            src={logoImage}
            alt="Dar El-Meamar"
            className="h-16 w-auto mx-auto"
            variants={scaleIn}
          />
          <motion.p
            className="text-gray-400"
            variants={fadeIn}
          >
            {t.footer.description}
          </motion.p>
          <motion.p
            className="text-gray-500 text-sm"
            variants={fadeInUp}
          >
            &copy; 2025 Dar El-Meamar. {t.footer.rights}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
