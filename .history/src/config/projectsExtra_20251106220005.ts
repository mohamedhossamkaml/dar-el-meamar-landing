// config/projectsExtra.ts
import GALLERY_IMAGES from './galleryImages';
import GALLERY_IMAGES_DETAILS from './galleryImagesDetails';

export const PROJECTS_EXTRA: Record<number, { main: string; details: string[]; color: string }> = {
  1: {
    main: GALLERY_IMAGES[0],
    details: [GALLERY_IMAGES_DETAILS[0], GALLERY_IMAGES_DETAILS[1]],
    color: 'from-blue-400 to-blue-600'
  },
  2: {
    main: GALLERY_IMAGES[1],
    details: [GALLERY_IMAGES_DETAILS[2], GALLERY_IMAGES_DETAILS[3]],
    color: 'from-teal-400 to-teal-600'
  },
  3: {
    main: GALLERY_IMAGES[2],
    details: [GALLERY_IMAGES_DETAILS[4], GALLERY_IMAGES_DETAILS[5]],
    color: 'from-purple-400 to-purple-600'
  },

};
