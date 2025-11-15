import { HERO_IMAGES } from './imagesConfig';
import { PROJECTS } from './gallery/projectsConfig';
import { ProjectExtra } from './types';

const PROJECT_COLORS = [
  'from-blue-400 to-blue-600',
  'from-teal-400 to-teal-600',
  'from-purple-400 to-purple-600',
  'from-orange-400 to-orange-600',
];

export const PROJECTS_EXTRA: Record<number, ProjectExtra> = HERO_IMAGES.reduce(
  (acc, img, index) => {
    const key = index + 1;
    acc[key] = {
      main: img,
      details: PROJECTS[key],
      color: PROJECT_COLORS[index] || 'from-gray-400 to-gray-600',
    };
    return acc;
  },
  {} as Record<number, ProjectExtra>
);
