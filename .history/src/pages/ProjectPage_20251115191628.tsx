// src/pages/ProjectPage.tsx
import React, { useMemo, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import GALLERY_IMAGES_DETAILS from '../config/gallery';
import { PROJECTS_EXTRA } from '../config/projectsExtra';
import SeeMoreButton from '../components/Tools/Buttons/SeeMoreButton';
import ImageLightbox from '../components/ui/ImageLightbox';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [currentSectionImgs, setCurrentSectionImgs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = useCallback((src: string, sectionImgs: string[] = []) => {
    setLightboxSrc(src);
    setCurrentSectionImgs(sectionImgs.length ? sectionImgs : [src]);
    setCurrentIndex(sectionImgs.length ? sectionImgs.indexOf(src) : 0);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxSrc(null);
    setCurrentSectionImgs([]);
    setCurrentIndex(0);
  }, []);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => {
      const next = (i - 1 + currentSectionImgs.length) % currentSectionImgs.length;
      setLightboxSrc(currentSectionImgs[next]);
      return next;
    });
  }, [currentSectionImgs]);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => {
      const next = (i + 1) % currentSectionImgs.length;
      setLightboxSrc(currentSectionImgs[next]);
      return next;
    });
  }, [currentSectionImgs]);

  const projectData = useMemo(() => {
    const idx = Number(id);
    if (Number.isNaN(idx)) return null;

    const projFromT =
      (t.galleryPage?.projects ?? []).find((p: any) => Number(p.id) === idx) ??
      (t.galleryPage?.projects ?? [])[idx] ??
      null;

    const detailsByCategory = GALLERY_IMAGES_DETAILS[idx] ?? null;
    const extra = PROJECTS_EXTRA?.[idx + 1];

    const firstFromCategory = (arr?: string[]) => (arr && arr.length ? arr[0] : '');

    const mainImage =
      firstFromCategory(detailsByCategory?.exterior) ||
      (detailsByCategory ? Object.values(detailsByCategory).flatMap((a: string[]) => a)[0] : '') ||
      extra?.main ||
      '';

    const grouped =
      detailsByCategory != null
        ? Object.entries(detailsByCategory).map(([category, imgs]) => ({ category, imgs }))
        : [];

    return {
      id: projFromT?.id ?? idx,
      title: projFromT?.title ?? `Project ${idx + 1}`,
      description: projFromT?.description ?? '',
      category: projFromT?.category ?? '',
      mainImage,
      grouped,
      raw: projFromT ?? null,
    };
  }, [id, t]);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">{t.projectPage?.projectNotFound || 'Project not found'}</p>
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-200 rounded">
            {t.projectPage?.backToGallery || 'Back to Gallery'}
          </button>
        </div>
      </div>
    );
  }

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
          {projectData.mainImage ? (
            <div className="mb-6 rounded overflow-hidden shadow-lg cursor-zoom-in" onClick={() => openLightbox(projectData.mainImage)}>
              <img
                src={projectData.mainImage}
                alt={projectData.title}
                loading="lazy"
                className="w-full h-screen object-cover"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ) : null}

          {/* Detailed images */}
          {projectData.grouped.length > 0 ? (
            projectData.grouped.map((section) => (
              <section key={section.category} className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold capitalize">{section.category} sfsafa</h2>
                  <div className="text-sm text-gray-500">{section.imgs.length} images</div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {section.imgs.map((src: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(src, section.imgs)}
                      className="block w-full h-40 overflow-hidden rounded-md group bg-gray-100"
                      aria-label={`Open ${projectData.title} ${section.category} image ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${projectData.title}-${section.category}-${i}`}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </button>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <p className="text-gray-500">{t.projectPage?.noImages || 'No images available'}</p>
          )}

          <div className="mt-8">
            <SeeMoreButton to="/contact" label={t.galleryPage?.cta?.button ?? 'Contact'} />
          </div>
        </div>
      </motion.main>

      <ImageLightbox
        open={lightboxOpen}
        src={lightboxSrc}
        alt={projectData.title}
        onClose={closeLightbox}
        onPrev={currentSectionImgs.length > 1 ? showPrev : undefined}
        onNext={currentSectionImgs.length > 1 ? showNext : undefined}
        showArrows={currentSectionImgs.length > 1}
        key={projectData.id}
      />
    </>
  );
};

export default ProjectPage;
