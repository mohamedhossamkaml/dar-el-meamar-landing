import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import StatsGrid from '../StatsGrid';

const GalleryStats: React.FC = () => {
  const { t } = useLanguage();
  const stats = [...t.galleryPage.stats];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {stats.map((stat: any, index: number) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        {/* Stats Grid */}
        <StatsGrid stats={stats} />
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryStats;
