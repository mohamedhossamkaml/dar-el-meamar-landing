import React from 'react';
import { motion } from 'framer-motion';
import BlueprintAnimation from '../Tools/BlueprintAnimation';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const AboutCompany: React.FC = () => {
  const { t } = useLanguage();

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
          <motion.div
            variants={fadeInRight}
            className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <BlueprintAnimation />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
