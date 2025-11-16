// src/pages/ProjectPage.tsx
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import GALLERY_IMAGES_DETAILS from '../config/gallery';
import SeeMoreButton from '../components/Tools/Buttons/SeeMoreButton';
import ImageLightbox from '../components/ui/ImageLightbox';
import NotFoundPage from './NotFoundPage';
import useLightbox from '../hooks/useLightbox';


const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { openLightbox, closeLightbox, showPrev, showNext, lightboxState } = useLightbox();

  const projectData = useMemo(() => {
    const idx = Number(id);
    if (Number.isNaN(idx)) return null;

    const projFromT = (t.galleryPage?.projects ?? []).find((p: any) => Number(p.id) === idx);
    const detailsByCategory = GALLERY_IMAGES_DETAILS[idx];

    if (!projFromT || !detailsByCategory) return null;

    const mainImage =
      detailsByCategory.exterior?.[0] ||
      Object.values(detailsByCategory).flatMap((arr) => arr)[0] ||
      '';

    const grouped = Object.entries(detailsByCategory).map(([category, imgs]) => ({ category, imgs }));

    return { ...projFromT, mainImage, grouped };
  }, [id, t]);

  if (!projectData) return <NotFoundPage />;

  return (
    <>
      <motion.main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <button onClick={() => navigate(-1)} className="mb-6 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800">
            {t.projectPage?.backToGallery || 'Back to Gallery'}
          </button>

          <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
          {projectData.category && (
            <div className="inline-block mb-4 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">
              {projectData.category}
            </div>
          )}
          <p className="text-gray-600 dark:text-gray-400 mb-6">{projectData.description}</p>

          {/* Main image */}
          {projectData.mainImage && (
            <div
              className="mb-6 rounded overflow-hidden shadow-lg cursor-zoom-in"
              onClick={() => openLightbox(projectData.mainImage)}
            >
              <img
                src={projectData.mainImage}
                alt={projectData.title}
                loading="lazy"
                className="w-full h-screen object-cover"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          )}

          {/* Detailed images */}
          {projectData.grouped.length > 0 ? (
            projectData.grouped.map((section) => (
              <ImageSection
                key={section.category}
                section={section}
                projectTitle={projectData.title}
                t={t}
                openLightbox={openLightbox}
              />
            ))
          ) : (
            <p className="text-gray-500">{t.projectPage?.noImages || 'No images available'}</p>
          )}

          <div className="mt-8">
            <SeeMoreButton to="/contact" label={t.galleryPage?.cta?.button ?? 'Contact'} />
          </div>
        </div>
      </motion.main>

      {/* Lightbox */}
      <ImageLightbox
        open={lightboxState.open}
        src={lightboxState.src}
        alt={projectData.title}
        onClose={closeLightbox}
        onPrev={lightboxState.imgs.length > 1 ? showPrev : undefined}
        onNext={lightboxState.imgs.length > 1 ? showNext : undefined}
        showArrows={lightboxState.imgs.length > 1}
        key={projectData.id}
      />
    </>
  );
};

export default ProjectPage;

// 👇 Component صغير لعرض الصور
const ImageSection = ({ section, projectTitle, t, openLightbox }: any) => (
  <section className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold capitalize">
        {t.projectPage?.category?.[section.category as keyof typeof t.projectPage.category] || section.category}
      </h2>
      <div className="text-sm text-gray-500">
        {section.imgs.length} {t.projectPage?.images || 'images'}
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {section.imgs.map((src: string, i: number) => (
        <button
          key={i}
          onClick={() => openLightbox(src, section.imgs)}
          className="block w-full h-40 overflow-hidden rounded-md group bg-gray-100"
        >
          <img
            src={src}
            alt={`${projectTitle}-${section.category}-${i}`}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
            onContextMenu={(e) => e.preventDefault()}
          />
        </button>
      ))}
    </div>
  </section>
);
