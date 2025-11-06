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
  4: {
    main: GALLERY_IMAGES[3],
    details: [GALLERY_IMAGES_DETAILS[6], GALLERY_IMAGES_DETAILS[7]],
    color: 'from-orange-400 to-orange-600'
  },
  5: {
    main: GALLERY_IMAGES[4],
    details: [GALLERY_IMAGES_DETAILS[8], GALLERY_IMAGES_DETAILS[9]],
    color: 'from-pink-400 to-pink-600'
  },
  6: {
    main: GALLERY_IMAGES[5],
    details: [GALLERY_IMAGES_DETAILS[10], GALLERY_IMAGES_DETAILS[11]],
    color: 'from-green-400 to-green-600'
  },

};
