import { GalleryCategory } from './types';

// نعمل glob لكل الصور في مجلدات المشاريع
const project1Images = import.meta.glob('../../assets/img/projectsImg/project1/**/*.{jpg,png}', { eager: true });
const project2Images = import.meta.glob('../../assets/img/projectsImg/project2/**/*.{jpg,png}', { eager: true });
const project3Images = import.meta.glob('../../assets/img/projectsImg/project3/**/*.{jpg,png}', { eager: true });
const project4Images = import.meta.glob('../../assets/img/projectsImg/project4/**/*.{jpg,png}', { eager: true });

// helper: يحول object بتاع glob لمصفوفة paths
const toArray = (globResult: Record<string, any>): string[] =>
  Object.values(globResult).map((mod: any) => mod.default);

// (exterior, entrance, sales)
export const PROJECTS: Record<number, GalleryCategory> = {
  1: {
    exterior: toArray(import.meta.glob(project1Images, '/2- exterior shots/*.{jpg,png}')),
    entrance: toArray(import.meta.glob(project1Images, '/3- entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob(project1Images, '/4- sales plans/*.{jpg,png}', { eager: true })),
  },
  2: {
    exterior: toArray(import.meta.glob(project2Images, '/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob(project2Images, '/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob(project2Images, '/Sales plans/*.{jpg,png}', { eager: true })),
  },
  3: {
    exterior: toArray(import.meta.glob(project3Images, '/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob(project3Images, '/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob(project3Images, '/Sales plans/*.{jpg,png}', { eager: true })),
  },
  4: {
    exterior: toArray(import.meta.glob(project4Images, '/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob(project4Images, '/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob(project4Images, '/Sales plans/*.{jpg,png}', { eager: true })),
  },
};

export default PROJECTS;
