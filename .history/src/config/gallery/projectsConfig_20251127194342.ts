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
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 12/2- Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 12/3- Entrance/*.{jpg,png}', { eager: true })),
    // sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 12/4- Sales plans/*.{jpg,png}', { eager: true })),//sales plans Not available
  },
  3: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 14/2- Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 14/3- Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 14/4- Sales plans/*.{jpg,png}', { eager: true })),
  },
  4: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 138/2- Exterior shots/*.{jpg,png}', { eager: true })),
    // entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 138/3- Entrance/*.{jpg,png}', { eager: true })),//entrance Not available
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 138/3- sales plans *.{jpg,png}', { eager: true })),
  },
  5: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 214/2- Exterior shots/*.{jpg,png}', { eager: true })),
    // entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 214/3- Entrance/*.{jpg,png}', { eager: true })),//entrance Not available
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 214/3- sales plans/*.{jpg,png}', { eager: true })),
  },
  6: {
    exterior: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 395/2- Exterior shots/*.{jpg,png}', { eager: true })),
    entrance: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 395/3- Entrance/*.{jpg,png}', { eager: true })),
    sales: toArray(import.meta.glob('../../assets/img/projectsImg/Villa 395/4- Sales plans/*.{jpg,png}', { eager: true })),
  },
};

export default PROJECTS;
