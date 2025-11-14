import { useState } from 'react';
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
import { PROJECTS_EXTRA } from '../config/projectsExtra';
import ProjectModal from './gallery/Modal/ProjectModal';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = GALLERY_IMAGES.map((src, idx) => {
    const projFromT = t.galleryPage?.projects?.[idx] || null;

    const extra = PROJECTS_EXTRA?.[projFromT?.id || idx] || {};
    return {
      id: projFromT?.id ?? idx,
      title: projFromT?.title ?? `Project ${idx + 1}`,
      description: projFromT?.description ?? '',
      src,
      image: extra.main || src,
      images: extra.details || [],
      color: extra.color || 'from-gray-400 to-gray-600',
      category: projFromT?.category ?? '',
      raw: projFromT ?? null,
    };
  });

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
          className="grid text-white md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                    ? scaleIn
                    : fadeInRight
              }
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="aspect-square relative rounded-xl shadow-lg overflow-hidden
                         hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105
                         dark:hover:shadow-teal-500/50 cursor-pointer group"
              style={{
                backgroundImage: `url(${project.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors"></div>

              {/* Title (hidden until hover) */}
              <div className="absolute inset-0 flex items-end justify-center p-6 z-10 pointer-events-none">
                <div
                  className="w-full max-w-[90%] text-center bg-gradient-to-t from-black/70 to-transparent
                             rounded-md px-4 py-3 transform opacity-0 translate-y-4
                             group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        t={t}
      />
    </motion.section>
  );
};

export default Gallery;
