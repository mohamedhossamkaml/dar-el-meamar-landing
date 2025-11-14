import GALLERY_IMAGES from './galleryImages'; // Record<number,string>
import GALLERY_IMAGES_DETAILS from './gallery';
import { ProjectExtra } from './types';

const imagesArray = Object.keys(GALLERY_IMAGES)
  .map(k => Number(k))
  .filter(n => !Number.isNaN(n))
  .sort((a, b) => a - b)
  .map(k => GALLERY_IMAGES[k]);

export const PROJECTS_EXTRA: Record<number, ProjectExtra> = imagesArray.reduce(
  (acc: Record<number, ProjectExtra>, img: string, index: number) => {
    const key = index + 1; // حافظنا على 1-based لمطابقة GALLERY_IMAGES_DETAILS
    acc[key] = {
      main: img,
      details: GALLERY_IMAGES_DETAILS[key] ?? {},
      color: PROJECT_COLORS[index] ?? 'from-gray-400 to-gray-600',
    };
    return acc;
  },
  {} as Record<number, ProjectExtra>
);
