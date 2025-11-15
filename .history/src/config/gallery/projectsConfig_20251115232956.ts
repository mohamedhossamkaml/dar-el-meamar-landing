import { GalleryCategory } from './types';

// نعمل glob لكل الصور في مجلدات المشاريع
const project1Images = import.meta.glob('../../assets/img/projectsImg/project1/**/*.{jpg,png}', { eager: true });
const project2Images = import.meta.glob('../../assets/img/projectsImg/project2/**/*.{jpg,png}', { eager: true });
const project3Images = import.meta.glob('../../assets/img/projectsImg/project3/**/*.{jpg,png}', { eager: true });
const project4Images = import.meta.glob('../../assets/img/projectsImg/project4/**/*.{jpg,png}', { eager: true });

// helper: يحول object بتاع glob لمصفوفة paths
const toArray = (globResult: Record<string, any>): string[] =>
  Object.values(globResult).map((mod: any) => mod.default);

// هنا بنقسم الصور حسب الفولدرات (exterior, entrance, sales)
export const PROJECTS: Record<number, GalleryCategory> = {
  1: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project1/2- exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/project1/3- entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/project1/4- sales plans/*.{jpg,png}', { eager: true })),
  },
  2: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project2/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/project2/Entrance/*.{jpg,png}', { eager: true })),
    sales: [], // مفيش صور هنا
  },
  3: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project3/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: [],
    sales: [],
  },
  4: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project4/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: [],
    sales: [],
  },
};

export default PROJECTS;
