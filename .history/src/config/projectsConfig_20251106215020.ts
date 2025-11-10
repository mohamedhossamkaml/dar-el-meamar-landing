import GALLERY_IMAGES from './galleryImages';

export const PROJECTS_CONFIG = [
  {
    id: 1,
    titleKey: "galleryPage.projects[0].title", // مفتاح الترجمة
    descriptionKey: "galleryPage.projects[0].description",
    categoryKey: "galleryPage.projects[0].category",
    locationKey: "galleryPage.projects[0].location",
    year: "2022",
    images: [GALLERY_IMAGES[0], GALLERY_IMAGES[1], GALLERY_IMAGES[2]],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    titleKey: "galleryPage.projects[1].title",
    descriptionKey: "galleryPage.projects[1].description",
    categoryKey: "galleryPage.projects[1].category",
    locationKey: "galleryPage.projects[1].location",
    year: "2023",
    images: [GALLERY_IMAGES[3], GALLERY_IMAGES[4], GALLERY_IMAGES[5]],
    color: "from-teal-400 to-teal-600",
  },

];
export default PROJECTS_CONFIG;