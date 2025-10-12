import { motion } from 'framer-motion';
import darImg from '../assets/darImg.png';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.footer
      key={i18n.language}
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
          {/* Logo */}
          <motion.img
            src={darImg}
            alt="Dar El-Meamar"
            className="h-16 w-auto mx-auto"
            variants={scaleIn}
          />

          {/* Slogan */}
          <motion.p
            className="text-gray-400"
            variants={fadeIn}
          >
            {t("footer.slogan")}
          </motion.p>

          {/* Rights */}
          <motion.p
            className="text-gray-500 text-sm"
            variants={fadeInUp}
          >
            {t("footer.rights")}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
