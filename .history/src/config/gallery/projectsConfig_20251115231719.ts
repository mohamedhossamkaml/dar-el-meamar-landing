import { GalleryCategory } from './types';

// Helper function to import images dynamically
const importImages = (paths: string[]): string[] => paths.map((p) => require(`../../assets/img/${p}`));

export const PROJECTS: Record<number, GalleryCategory> = {
  1: {
    exterior: importImages([
      'projectsImg/project1/2- exterior shots/P.p Shot 4 Villa 3.jpg',
      'projectsImg/project1/2- exterior shots/P.p Shot 5 Villa 3.jpg',
      'projectsImg/project1/2- exterior shots/P.p Shot 6 Villa 3.jpg',
    ]),
    entrance: importImages([
      'projectsImg/project1/3- entrance/Villa 3 entrance2 Shot 1.jpg',
      'projectsImg/project1/3- entrance/Villa 3 entrance2 Shot 2.jpg',
      'projectsImg/project1/3- entrance/Villa 3 entrance2 Shot 3.jpg',
    ]),
    sales: importImages([
      'projectsImg/project1/4- sales plans/10-Ground App. Right.jpg',
      'projectsImg/project1/4- sales plans/11- Lower Ground App. Left.jpg',
      'projectsImg/project1/4- sales plans/12- Lower Ground App. Right.jpg',
      'projectsImg/project1/4- sales plans/13-Ground Duplex Left.jpg',
      'projectsImg/project1/4- sales plans/14- Lower Ground Duplex Left.jpg',
    ]),
  },
  2: {
    exterior: importImages([
      'projectsImg/project2/Exterior shots/P.P Shot 1.jpg',
      'projectsImg/project2/Exterior shots/P.P Shot 2.jpg',
      'projectsImg/project2/Exterior shots/P.P Shot 3.jpg',
      'projectsImg/project2/Exterior shots/P.P Shot 4.jpg',
    ]),
    entrance: importImages([
      'projectsImg/project2/Entrance/Lift Lobby Shot 1 P.p.jpg',
      'projectsImg/project2/Entrance/Lift Lobby Shot 2 -3.jpg',
      'projectsImg/project2/Entrance/Lift Lobby Shot 3-3.jpg',
    ]),
    sales: [],
  },
};
