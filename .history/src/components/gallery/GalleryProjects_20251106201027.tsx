import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '../../utils/animations';
import { Building2, Home, Factory, Building, Warehouse, Hotel } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import GALLERY_IMAGES from '../../config/galleryImages';

const GalleryProjects: React.FC = () => {
  const { t } = useLanguage();


  const projects = [
    { ...t.galleryPage.projects[0], image: GALLERY_IMAGES[0], color: 'from-blue-400 to-blue-600' },
    { ...t.galleryPage.projects[1], image: GALLERY_IMAGES[1], color: 'from-teal-400 to-teal-600' },
    { ...t.galleryPage.projects[2], image: GALLERY_IMAGES[2], color: 'from-purple-400 to-purple-600' },
    { ...t.galleryPage.projects[3], image: GALLERY_IMAGES[3], color: 'from-orange-400 to-orange-600' },
    { ...t.galleryPage.projects[4], image: GALLERY_IMAGES[4], color: 'from-green-400 to-green-600' },
    { ...t.galleryPage.projects[5], image: GALLERY_IMAGES[5], color: 'from-pink-400 to-pink-600' },
    { ...t.galleryPage.projects[6], image: "/images/warehouse.jpg", color: 'from-indigo-400 to-indigo-600' },
    { ...t.galleryPage.projects[7], image: "/images/modern-home.jpg", color: 'from-cyan-400 to-cyan-600' },
    { ...t.galleryPage.projects[8], image: "/images/office.jpg", color: 'from-emerald-400 to-emerald-600' },
  ];


  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              variants={
                index % 3 === 0 ? fadeInLeft : index % 3 === 1 ? scaleIn : fadeInRight
              }
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <motion.div className="absolute inset-0 bg-teal-600/90 dark:bg-teal-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{ opacity: 0 }}>
                  <div className="text-white text-center p-6">
                    <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">{t.galleryPage.hover.title}</h4>
                    <p className="text-teal-100">{t.galleryPage.hover.description}</p>
                  </div>
                </motion.div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm mb-3">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <Building2 size={16} className="mr-2" />
                  {project.location}
                </div>
              </div>
              {/* Hover Content */}
              <motion.div className="absolute inset-0 bg-teal-600/90 dark:bg-teal-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{ opacity: 0 }}>
                <div className="text-white text-center p-6">
                  <Building2 size={48} className="mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">{t.galleryPage.hover.title}</h4>
                  <p className="text-teal-100">{t.galleryPage.hover.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryProjects;
