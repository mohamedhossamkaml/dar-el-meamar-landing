import { motion } from 'framer-motion';
import SeeMoreButton from './Tools/Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import GALLERY_IMAGES from '../config/galleryImages';

const Gallery = () => {
  const { t } = useLanguage();

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

        {/* title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.gallery.subtitle}
          </p>
          <SeeMoreButton to="/gallery" label={t.common.seeMore} />
        </motion.div>

        {/* images */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                  ? scaleIn
                  : fadeInRight
              }
              className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200
                         dark:from-gray-800 dark:to-gray-700 dark:hover:shadow-teal-600 cursor-pointer
                         rounded-xl shadow-lg hover:shadow-teal-600 transition-all hover:-translate-y-1
                         flex items-center justify-center overflow-hidden group"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center group-hover:scale-110 transition-transform"
              >
                <img
                  src={src}
                  alt={`Project ${idx + 1}`}
                  className=" w-full h-full object-cover rounded-md"
                />
                <p className="font-semibold text-lg text-gray-900 dark:text-white">
                  Project {idx + 1}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
