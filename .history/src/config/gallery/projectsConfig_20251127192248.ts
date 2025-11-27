import { GalleryCategory } from '../types';

// Helper function to convert glob import results to an array of image URLs
const toArray = (globResult: Record<string, any>): string[] =>
  Object.values(globResult).map((mod: any) => mod.default);

// Projects (exterior, entrance, sales)
export const PROJECTS: Record<number, GalleryCategory> = {
  1: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg//Villa 3/2- exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 3/3- entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 3/4- sales plans/*.{jpg,png}', { eager: true })),
  },
  2: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project2/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/project2/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/project2/Sales plans/*.{jpg,png}', { eager: true })),
  },
  3: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project3/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/project3/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/project3/Sales plans/*.{jpg,png}', { eager: true })),
  },
  4: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/project4/Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/project4/Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/project4/Sales plans/*.{jpg,png}', { eager: true })),
  },
};

export default PROJECTS;
