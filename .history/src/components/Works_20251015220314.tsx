import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import myImage from "../assets/bg.png"; // Ensure the path is correct
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';

const Works = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="works"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 text-white
                 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 transition-colors duration-300"

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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-teal-300">
            {t.works.title}
          </h2>
          <p className="text-xl text-teal-100 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.works.subtitle}
          </p>
          <Link to="/works">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-teal-500 text-teal-600 dark:text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-teal-50 dark:hover:bg-teal-600 transition-all shadow-lg"
            >
              {t.common.seeMore}
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
        >
          {[
            { value: t.works.stats.projects, label: t.works.labels.projects },
            { value: t.works.stats.experience, label: t.works.labels.experience },
            { value: t.works.stats.clients, label: t.works.labels.clients },
            { value: t.works.stats.awards, label: t.works.labels.awards },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={
                idx === 0
                  ? fadeInLeft
                  : idx === 1
                  ? scaleIn
                  : idx === 2
                  ? fadeInUp
                  : fadeInRight
              }
              className="space-y-2"
            >
              <motion.p
                variants={scaleIn}
                className="text-5xl font-bold text-white dark:text-teal-400"
              >
                {stat.value}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-teal-100 dark:text-gray-400 text-lg"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
