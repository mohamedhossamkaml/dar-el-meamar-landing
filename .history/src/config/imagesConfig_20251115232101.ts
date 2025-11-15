import { PROJECTS } from '.././gallery/projectsConfig';

export const HERO_IMAGES = [
  ...PROJECTS[1].exterior,
  ...PROJECTS[2].exterior,
  ...PROJECTS[3].exterior,
  ...PROJECTS[4].exterior,
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?...',
  'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
];

export const GALLERY_IMAGES = HERO_IMAGES.slice(0, 4); // أول صورة من كل مشروع
