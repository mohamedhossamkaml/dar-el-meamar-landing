import { PROJECTS } from './gallery/projectsConfig';

// Hero images (mix of project exteriors + stock)
export const HERO_IMAGES: string[] = [
  ...PROJECTS[1].exterior,
  ...PROJECTS[2].exterior,
  ...PROJECTS[3].exterior,
  ...PROJECTS[4].exterior,
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
  'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/10/27/08/17/villa-4581027_1280.jpg',
];

// Gallery images (first exterior image from each project)
export const GALLERY_IMAGES: string[] = [
  PROJECTS[1].exterior[0],
  PROJECTS[2].exterior[0],
  PROJECTS[3].exterior[0],
  PROJECTS[4].exterior[0],
];
// Stack images (mix of project exteriors + stock)
export const STACK_IMAGES: string[] = [
  PROJECTS[1].exterior[0],
  PROJECTS[2].exterior[0],
  PROJECTS[3].exterior[0],
  PROJECTS[4].exterior[0],
];