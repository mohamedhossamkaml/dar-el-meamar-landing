import { motion } from "framer-motion";
import CountUp from "./Tools/motion/CountUp";
import myImage from "../assets/bg.png"; // Ensure the path is correct
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
} from "../utils/animations";
import { useLanguage } from '../context/LanguageContext';
const Works = () => {
  const { t } = useLanguage();



  return (
    <motion.section
      id="works"
      className="relative py-20 text-white overflow-hidden
                dark:text-gray-100 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${myImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/65 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-teal-300">
            {t.works.title}
          </h2>
          <p className="text-xl text-teal-100 dark:text-gray-400 max-w-3xl mx-auto">
            {t.works.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
        >

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
