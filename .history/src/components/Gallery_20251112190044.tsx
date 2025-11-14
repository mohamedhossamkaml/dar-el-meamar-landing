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
          className="grid text-white  md:grid-cols-3 gap-6"
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
              className="aspect-square relative rounded-xl shadow-lg overflow-hidden
             hover:shadow-2xl hover:text-teal-900  transition-all hover:-translate-y-1 hover:scale-105 dark:hover:shadow-teal-500/50 cursor-pointer group"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/5 transition-colors"></div>

              {/* Text */}
              <motion.div
                variants={fadeInUp}
                className="relative z-10 text-center  group-hover:scale-110 transition-transform"
              >
                {/* Title */}
                <div className="text-3xl hover:bg-teal-700/50 font-bold mb-2">
                  {t.galleryPage.projects.map((project, pIdx) =>
                    pIdx === idx && (
                      <p className="font-semibold text-lg">{project.title}</p>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
