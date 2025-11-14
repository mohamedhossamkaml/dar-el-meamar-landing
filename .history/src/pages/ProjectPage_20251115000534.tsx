// src/components/gallery/GalleryProjects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAllProjects } from '../../hooks/useGalleryData';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '../../utils/animations';

const GalleryProjects: React.FC = () => {
  const projects = useAllProjects();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={idx % 3 === 0 ? fadeInLeft : idx % 3 === 1 ? scaleIn : fadeInRight}
              className="group relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div
                className="relative h-64 bg-center bg-cover"
                style={{ backgroundImage: `url(${project.mainImage})` }}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="mt-4 px-4 py-2 bg-teal-600 text-white rounded"
                >
                  View project
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
