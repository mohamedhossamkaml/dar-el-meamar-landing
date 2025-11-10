import { motion } from 'framer-motion';
import SeeMoreButton from './Buttons/SeeMoreButton';
import {
  fadeInUp,

  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import StatsGrid from './StatsGrid';

const Works = () => {
  const { t } = useLanguage();

  // Fetch stats from translation file
  const stats = [
    { value: t.works.stats.projects, label: t.works.labels.projects, suffix: t.works.suffix.projects },
    { value: t.works.stats.experience, label: t.works.labels.experience, suffix: t.works.suffix.experience },
    { value: t.works.stats.clients, label: t.works.labels.clients, suffix: t.works.suffix.clients },
    // { value: t.works.stats.awards, label: t.works.labels.awards,suffix:t.works.suffix.awards },
    { value: t.works.stats.Satisfaction, label: t.works.labels.Satisfaction, suffix: t.works.suffix.Satisfaction },
  ];


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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/65 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-teal-300">
            {t.works.title}
          </h2>
          <p className="text-xl text-teal-100 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.works.subtitle}
          </p>
          <SeeMoreButton to="/works" label={t.common.seeMore} />

        </motion.div>

        {/* Stats Grid */}
        <StatsGrid stats={stats} />

      </div>
    </motion.section>
  );
};

export default Works;
