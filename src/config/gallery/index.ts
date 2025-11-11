// config/gallery/index.ts
import { GalleryCategory } from './types';
import project1 from './project1';
import project2 from './project2';
import project3 from './project3';
import project4 from './project4';

const GALLERY_IMAGES_DETAILS: Record<number, GalleryCategory> = {
  0: project1,
  1: project2,
  2: project3,
  3: project4,
};

export default GALLERY_IMAGES_DETAILS;
