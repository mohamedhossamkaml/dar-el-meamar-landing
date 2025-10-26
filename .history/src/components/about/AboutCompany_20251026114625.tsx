import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import ConstructionBackground from '../Tools/ConstructionBackground';

const AboutCompany: React.FC = () => {
  const { t } = useLanguage();
    const [svgVisible, setSvgVisible] = useState(false);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInLeft} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t.aboutPage.company.title}</h2>
            {t.aboutPage.company.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>
          {/* NOTE: The div above is the main centered container for the About section */}
          <motion.div
            variants={fadeInRight}
            className="relative w-full bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-900
                      rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_8px_30px_rgba(20,184,166,0.3)]
                      transition-shadow duration-300 ease-in-out
                      overflow-hidden min-h-[320px] md:min-h-[420px]"
            // when the parent animation completes, reveal the SVG
            onAnimationComplete={() => setSvgVisible(true)}
          >

            {/* mount the background SVG only after parent animation completes */}
            {svgVisible && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <ConstructionBackground />
                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
