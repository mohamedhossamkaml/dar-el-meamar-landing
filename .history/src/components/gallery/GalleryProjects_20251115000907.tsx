// src/components/gallery/GalleryProjects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_EXTRA } from '../../config/projectsExtra';

const GalleryProjects: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const projects = t.galleryPage.projects.map((proj: any) => ({
    ...proj,
    image: PROJECTS_EXTRA[proj.id]?.main || '',
    images: PROJECTS_EXTRA[proj.id]?.details || [],
    color: PROJECTS_EXTRA[proj.id]?.color || 'from-gray-400 to-gray-600',
  }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              variants={index % 3 === 0 ? fadeInLeft : index % 3 === 1 ? scaleIn : fadeInRight}
              whileHover={{ y: -4, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full select-none object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              <div className="p-6">
                <div className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                {/* Navigate to project page */}
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  {t.galleryPage.detailsButton}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryProjects;
