// src/hooks/useGalleryData.ts
import GALLERY_IMAGES_DETAILS from '../config/gallery';
import { PROJECTS_EXTRA } from '../config/projectsExtra'; // لو لازِم
import { useLanguage } from '../context/LanguageContext';
import { useMemo } from 'react';

export function useAllProjects() {
  const { t } = useLanguage();

  return useMemo(() => {
    const rawProjects = t.galleryPage?.projects ?? [];
    return rawProjects.map((proj: any, idx: number) => {
      const details = GALLERY_IMAGES_DETAILS[idx] ?? {};
      // اختَر صورة رئيسية: أول صورة من فئة exterior إن وجدت، وإلا أول صورة بأي فئة، وإلا ''
      const firstFromCategory = (catArr?: string[]) => (catArr && catArr.length ? catArr[0] : '');
      const mainImage =
        firstFromCategory(details.exterior) ||
        Object.values(details).flatMap(arr => arr)[0] ||
        PROJECTS_EXTRA[proj.id]?.main ||
        '';

      // جمع كل الصور في array واحد مع وسم الفئة
      const groupedImages = Object.entries(details).reduce(
        (acc: { category: string; src: string }[], [category, imgs]) => {
          imgs.forEach(src => acc.push({ category, src }));
          return acc;
        },
        []
      );

      return {
        id: proj.id ?? idx,
        title: proj.title ?? `Project ${idx + 1}`,
        description: proj.description ?? '',
        category: proj.category ?? '',
        mainImage,
        groupedImages, // [{ category, src }, ...]
        detailsByCategory: details, // تبقي مرجع لو احتجت تصنيفات
        raw: proj,
      };
    });
  }, [t]);
}

export function useProjectById(id: number | string) {
  const projects = useAllProjects();
  const idx = Number(id);
  return projects.find(p => Number(p.id) === idx) ?? null;
}
