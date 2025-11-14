// src/pages/ProjectPage.tsx
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import GALLERY_IMAGES_DETAILS from '../config/gallery';
import { PROJECTS_EXTRA } from '../config/projectsExtra';
import SeeMoreButton from '../components/Tools/Buttons/SeeMoreButton';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const projectData = useMemo(() => {
    const idx = Number(id);
    if (Number.isNaN(idx)) return null;

    // احصل على المشروع من الترجمة حسب id أو كـ fallback باستخدام الفهرس
    const projFromT =
      (t.galleryPage?.projects ?? []).find((p: any) => Number(p.id) === idx) ??
      (t.galleryPage?.projects ?? [])[idx] ??
      null;

    // تفاصيل الصور المصنفة من config/gallery (مفهرس 0-based)
    const detailsByCategory = GALLERY_IMAGES_DETAILS[idx] ?? null;

    // PROJECTS_EXTRA مكون بـ keys = index + 1 في كودك، فلو عايز تستخدمه لازم تطلب idx + 1
    const extra = PROJECTS_EXTRA?.[idx + 1];

    // دالة مساعدة لاختيار أول صورة من فئة
    const firstFromCategory = (arr?: string[]) => (arr && arr.length ? arr[0] : '');

    // اختر mainImage بأولوية ذكية:
    // 1. exterior[0] من detailsByCategory
    // 2. أول صورة متاحة في أي فئة داخل detailsByCategory
    // 3. extra.main من PROJECTS_EXTRA (استخدم idx+1 كما في بناء المشروع)
    // 4. fallback: '' (لا تعتمد على projFromT.image لأنه غير معرّف في typing)
    const mainImage =
      firstFromCategory(detailsByCategory?.exterior) ||
      (detailsByCategory ? Object.values(detailsByCategory).flatMap((a: string[]) => a)[0] : '') ||
      extra?.main ||
      '';

    // تجميع الصور مصنفة للعرض
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
          <p className="mb-4">Project not found.</p>
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-200 rounded">
            Go back
          </button>
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

        <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
        {projectData.category && (
          <div className="inline-block mb-4 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">
            {projectData.category}
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-400 mb-6">{projectData.description}</p>

        {/* Main image */}
        {projectData.mainImage ? (
          <div className="mb-6 rounded overflow-hidden shadow-lg">
            <img src={projectData.mainImage} alt={projectData.title} className="w-full h-auto object-cover" />
          </div>
        ) : null}

        {/* Detailed images */}
        {projectData.grouped.length > 0 ? (
          projectData.grouped.map(section => (
            <section key={section.category} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 capitalize">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.imgs.map((src: string, i: number) => (
                  <div key={i} className="rounded overflow-hidden shadow-lg">
                    <img src={src} alt={`${projectData.title}-${section.category}-${i}`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-gray-500">No detailed images available.</p>
        )}

        <div className="mt-8">
          <SeeMoreButton to="/contact" label={t.galleryPage?.cta?.button ?? 'Contact'} />
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectPage;
