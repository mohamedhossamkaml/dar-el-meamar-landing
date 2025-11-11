// config/gallery/project1.ts
import { GalleryCategory } from './types';

import entrance_0_1 from '../../assets/img/projectsImg/project1/entrance/entrance_0_1.jpg';
import entrance_0_2 from '../../assets/img/projectsImg/project1/entrance/entrance_0_2.jpg';
import entrance_0_3 from '../../assets/img/projectsImg/project1/entrance/entrance_0_3.jpg';

import exterior0_1 from '../../assets/img/projectsImg/project1/exterior shots/P.p Shot 4 Villa 3.jpg';
import exterior0_2 from '../../assets/img/projectsImg/project1/exterior shots/P.p Shot 5 Villa 3.jpg';
import exterior0_3 from '../../assets/img/projectsImg/project1/exterior shots/P.p Shot 6 Villa 3.jpg';

import sales0_1 from '../../assets/img/projectsImg/project1/sales plans/10-Ground App. Right.jpg';
import sales0_2 from '../../assets/img/projectsImg/project1/sales plans/11- Lower Ground App. Left.jpg';
import sales0_3 from '../../assets/img/projectsImg/project1/sales plans/12- Lower Ground App. Right.jpg';
import sales0_4 from '../../assets/img/projectsImg/project1/sales plans/13-Ground Duplex Left.jpg';
import sales0_5 from '../../assets/img/projectsImg/project1/sales plans/14- Lower Ground Duplex Left.jpg';

const project1: GalleryCategory = {
  exterior: [exterior0_1, exterior0_2, exterior0_3],
  entrance: [entrance_0_1, entrance_0_2, entrance_0_3],
  sales: [sales0_1, sales0_2, sales0_3, sales0_4, sales0_5],
};

export default project1;
