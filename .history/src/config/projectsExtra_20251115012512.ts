// config/projectsExtra.ts
import GALLERY_IMAGES from './galleryImages';
import GALLERY_IMAGES_DETAILS from './gallery';
import { ProjectExtra } from './types';


// Define gradient colors for projects
const PROJECT_COLORS = [
  'from-blue-400 to-blue-600',
  'from-teal-400 to-teal-600',
  'from-purple-400 to-purple-600',
  'from-orange-400 to-orange-600',
  'from-pink-400 to-pink-600',
  'from-green-400 to-green-600',
  'from-gray-400 to-gray-600',
  'from-gray-400 to-gray-600',
  'from-gray-400 to-gray-600',
];
export const PROJECTS_EXTRA: Record<number, ProjectExtra> = GALLERY_IMAGES.reduce(
  (acc, img, index) => {
    const key = index + 1; // نخلي كل حاجة 1-based
    acc[key] = {
      main: img,
      details: GALLERY_IMAGES_DETAILS[key], // استخدم نفس المفتاح 1..N
      color: PROJECT_COLORS[index] || 'from-gray-400 to-gray-600',
    };
    return acc;
  },
  {} as Record<number, ProjectExtra>
);
