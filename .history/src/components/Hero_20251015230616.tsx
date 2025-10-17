import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  textVariant,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  hoverGlow,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from './Tools/AnimatedBackground';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center
                  bg-gradient-to-br from-teal-500 via-white to-teal-200
                  dark:from-gray-950 dark:via-gray-800 dark:to-gray-800
                  relative overflow-hidden"
    >
      {/* Background Image */}
      <AnimatedBackground />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Text Content */}
          <motion.div
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                className="text-5xl md:text-6xl font-bold
                           text-gray-900 dark:text-white leading-tight"
              >
                {t.hero.title}
              </motion.h1>
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                className="text-5xl  md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
  {t.hero.titleStart}{' '}
  <span className="text-teal-500 dark:text-teal-400">{t.hero.titleHighlight}</span>{' '}
  {t.hero.titleEnd}
</motion.h1>


              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start Your Project"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg
                             hover:bg-teal-700 transition-all hover:shadow-lg
                             font-medium text-lg
                             dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
                >
                  {t.hero.cta}
                </motion.button>
              </Link>
              <Link to="/works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View Our Work"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg
                             hover:bg-teal-50 transition-all font-medium text-lg
                             dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
                >
                  {t.hero.learnMore}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>


          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            className="relative"
          >
            <motion.div
              variants={hoverGlow}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="aspect-square rounded-2xl
                            bg-gradient-to-br from-teal-500 to-teal-700
                            shadow-2xl flex items-center justify-center
                            dark:from-teal-600 dark:to-teal-800"
            >
              <Building2 size={200} className="text-white opacity-20" />
              <motion.div
                variants={fadeInUp}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white space-y-4">
                  <motion.div variants={scaleIn}>
                    <Building2 size={80} className="mx-auto text-white dark:text-teal-300" />
                  </motion.div>
                  <motion.p
                    variants={fadeIn}
                    className="text-2xl font-bold text-white dark:text-teal-100"
                  >
                    Excellence in Construction
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
