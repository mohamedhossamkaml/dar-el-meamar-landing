// src/pages/ProjectPage.tsx
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_EXTRA } from '../config/projectsExtra';
import SeeMoreButton from '../components/Tools/Buttons/SeeMoreButton';
import { motion } from 'framer-motion';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const project = useMemo(() => {
    const idx = Number(id);
    const projFromT = t.galleryPage?.projects?.find((p: any) => Number(p.id) === idx) ?? t.galleryPage?.projects?.[idx] ?? null;
    if (!projFromT) return null;
    const extra = PROJECTS_EXTRA[projFromT.id] || {};
    return {
      id: projFromT.id ?? idx,
      title: projFromT.title ?? `Project ${idx + 1}`,
      description: projFromT.description ?? '',
      mainImage: extra.main || projFromT.image || '',
      images: extra.details || [],
      category: projFromT.category || '',
    };
  }, [id, t]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <p>Project not found</p>
          <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-gray-200 rounded">Go back</button>
        </div>
      </div>
    );
  }

  return (
    <motion.main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="mb-6 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800">
          Back
        </button>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>

        {/* Main image */}
        {project.mainImage && (
          <div className="mb-6 rounded overflow-hidden shadow-lg">
            <img src={project.mainImage} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Details gallery */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((src: string, i: number) => (
              <div key={i} className="rounded overflow-hidden shadow">
                <img src={src} alt={`${project.title}-${i}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Optional: CTA */}
        <div className="mt-8">
          <SeeMoreButton to="/contact" label={t.common.contactUs || 'Contact'} />
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectPage;
