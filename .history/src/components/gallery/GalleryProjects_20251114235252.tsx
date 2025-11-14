import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_EXTRA } from '../../config/projectsExtra';
import ProjectModal from './Modal/ProjectModal';

const GalleryProjects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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

              {/* Image */}
              <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full select-none  object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </section>
  );
};

export default GalleryProjects;
