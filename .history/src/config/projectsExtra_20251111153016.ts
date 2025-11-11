// config/projectsExtra.ts
import GALLERY_IMAGES from './galleryImages';
import GALLERY_IMAGES_DETAILS from './galleryImagesDetails';


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
  export const PROJECTS_EXTRA = Object.fromEntries(
    GALLERY_IMAGES.map((img, index) => [
      index + 1, // starts from 1 instead of 0
    {
      main: img,
      details: GALLERY_IMAGES_DETAILS[index], // returns an object containing exterior/entrance/sales
      color: PROJECT_COLORS[index] || 'from-gray-400 to-gray-600',
    },
  ])
);
