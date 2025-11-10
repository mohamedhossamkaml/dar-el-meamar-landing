// config/projectsConfig.ts
import GALLERY_IMAGES from './galleryImages';

export const PROJECTS_EXTRA: Record<number, { images: string[]; color: string }> = {
  1: { images: [GALLERY_IMAGES[0], GALLERY_IMAGES[1]], color: 'from-blue-400 to-blue-600' },
  2: { images: [GALLERY_IMAGES[2], GALLERY_IMAGES[3]], color: 'from-teal-400 to-teal-600' },
  3: { images: [GALLERY_IMAGES[4]], color: 'from-purple-400 to-purple-600' },
  4: { images: [GALLERY_IMAGES[5]], color: 'from-orange-400 to-orange-600' },
  5: { images: [GALLERY_IMAGES[0], GALLERY_IMAGES[2]], color: 'from-green-400 to-green-600' },
  6: { images: [GALLERY_IMAGES[1]], color: 'from-pink-400 to-pink-600' },
  7: { images: [GALLERY_IMAGES[3]], color: 'from-indigo-400 to-indigo-600' },
  8: { images: [GALLERY_IMAGES[4], GALLERY_IMAGES[5]], color: 'from-cyan-400 to-cyan-600' },
  9: { images: [GALLERY_IMAGES[0]], color: 'from-emerald-400 to-emerald-600' },
};
