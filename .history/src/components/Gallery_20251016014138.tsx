import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SeeMoreButton from './Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <motion.section
      id="gallery"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.gallery.subtitle}
          </p>
          <Link to="/gallery">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 dark:bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-teal-700 dark:hover:bg-teal-600 transition-all shadow-lg"
            >
              {t.common.seeMore}
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {projects.map((item, idx) => (
            <motion.div
              key={item}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                  ? scaleIn
                  : fadeInRight
              }
              className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200
                         dark:from-gray-800 dark:to-gray-700
                         rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1
                         flex items-center justify-center overflow-hidden group"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center text-teal-700 dark:text-teal-400 group-hover:scale-110 transition-transform"
              >
                <Building2 size={64} className="mx-auto mb-4 text-teal-700 dark:text-teal-400" />
                <p className="font-semibold text-lg">Project {item}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
