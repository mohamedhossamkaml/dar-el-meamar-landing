import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SeeMoreButton from './Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  textVariant,
  cardVariants,
  fadeInLeft,
  fadeInRight,
} from '../utils/animations';
import BlueprintAnimation from './Tools/BlueprintAnimation';
import ConstructionBackground from './Tools/ConstructionBackground';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [svgVisible, setSvgVisible] = useState(false);

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.about.title}
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.about.subtitle}
          </p>
          <SeeMoreButton to="/about" label={t.common.seeMore} />
        </motion.div>

        {/* Info Cards Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.about.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              animate="rest"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900
                          p-8 rounded-xl shadow-lg transition-all"
            >
              <motion.div
                variants={scaleIn}
                className="bg-teal-600 dark:bg-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              >
                <Building2 size={32} className="text-white dark:text-gray-900" />
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {card.title}
              </motion.h3>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Blueprint Animation Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeInLeft}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t.about.precision.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.about.precision.description}
            </p>
            <div className="space-y-3">
              {t.about.precision.points.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* NOTE: The div above is the main centered container for the About section */}
          <motion.div
            variants={fadeInRight}
            className="relative w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900
                      rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_8px_30px_rgba(20,184,166,0.3)]
                      transition-shadow duration-300 ease-in-out"
            // when the parent animation completes, reveal the SVG
            onAnimationComplete={() => setSvgVisible(true)}
          >
            <div className="">
            {/* mount the background SVG only after parent animation completes */}
            {svgVisible && (
              <div className="absolute w-full h-full inset-0 flex items-center justify-center pointer-events-none ">
                <ConstructionBackground />
              </div>
            )}
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
