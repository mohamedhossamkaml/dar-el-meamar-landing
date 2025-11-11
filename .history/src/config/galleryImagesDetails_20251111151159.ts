// config/galleryImagesDetails.ts
// Sub-gallery images grouped by project ID and category

// Importing local images for project 1 entrance category
import entrance_0_1  from '../assets/img/projectsImg/project1/entrance/entrance_0_1.jpg';
import entrance_0_2  from '../assets/img/projectsImg/project1/entrance/entrance_0_2.jpg';
import entrance_0_3 from '../assets/img/projectsImg/project1/entrance/entrance_0_3.jpg';

import exterior0_1 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 4 Villa 3.jpg';
import exterior0_2 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 5 Villa 3.jpg';
import exterior0_3 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 6 Villa 3.jpg';

import sales0_1 from '../assets/img/projectsImg/project1/sales plans/9-Ground App. Left.jpg';
import sales0_2 from '../assets/img/projectsImg/project1/sales plans/8-Typical Right.jpg';
import sales0_3 from '../assets/img/projectsImg/project1/sales plans/7-Typical left.jpg';
import sales0_4 from '../assets/img/projectsImg/project1/sales plans/10-Ground App. Right.jpg';
import sales0_5 from '../assets/img/projectsImg/project1/sales plans/11- Lower Ground App. Left.jpg';

// Importing local images for project 2 exterior category

import exterior1_1 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 1.jpg';
import exterior1_2 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 2.jpg';
import exterior1_3 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 3.jpg';
import exterior1_4 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 4.jpg';

import entrance1_1 from '../assets/img/projectsImg/project2/Entrance/Lift Lobby Shot 1 P.p.jpg';
import entrance1_2 from '../assets/img/projectsImg/project2/Entrance/Lift Lobby Shot 2 -3.jpg';
import entrance1_3 from '../assets/img/projectsImg/project2/entrance/Lift Lobby Shot 3-3.jpg';

import sales1_1 from '../assets/img/projectsImg/project1/sales plans/12- Lower Ground App. Right.jpg';
import sales1_2 from '../assets/img/projectsImg/project1/sales plans/13-Ground Duplex Left.jpg';
import sales1_3 from '../assets/img/projectsImg/project1/sales plans/14- Lower Ground Duplex Left.jpg';
import sales1_4 from '../assets/img/projectsImg/project1/sales plans/15-Ground Duplex Right.jpg';
import sales1_5 from '../assets/img/projectsImg/project1/sales plans/16- Lower Ground Duplex Right.jpg';

// Importing local images for project 3 exterior category
import exterior2_1 from '../assets/img/projectsImg/project3/Exterior shots/p1.jpg';
import exterior2_2 from '../assets/img/projectsImg/project3/Exterior shots/p2.jpg';
import exterior2_3 from '../assets/img/projectsImg/project3/Exterior shots/p3.jpg';
import exterior2_4 from '../assets/img/projectsImg/project3/Exterior shots/p7.jpg';
import exterior2_5 from '../assets/img/projectsImg/project3/Exterior shots/p8.jpg';

import entrance2_1 from '../assets/img/projectsImg/project3/Entrance/V 14 entrance Shot 1.jpg';
import entrance2_2 from '../assets/img/projectsImg/project3/Entrance/V 14 entrance Shot 2.jpg';
import entrance2_3 from '../assets/img/projectsImg/project3/Entrance/V 14 entrance Shot 3.jpg';

import sales2_1 from '../assets/img/projectsImg/project3/Sales plans/11-Typical Right.jpg';
import sales2_2 from '../assets/img/projectsImg/project3/sales plans/12-Typical left.jpg';
import sales2_3 from '../assets/img/projectsImg/project3/sales plans/13- Ground  Right.jpg';
import sales2_4 from '../assets/img/projectsImg/project3/sales plans/14- Ground left.jpg';
import sales2_5 from '../assets/img/projectsImg/project3/sales plans/15-Lower Ground RIGHT.jpg';
import sales2_6 from '../assets/img/projectsImg/project3/sales plans/16-Lower Ground Left.jpg';
import sales2_7 from '../assets/img/projectsImg/project3/sales plans/17-Garage.jpg';


// Importing local images for project 4 exterior category

import exterior3_1 from '../assets/img/projectsImg/project4/';
import exterior3_2 from '../assets/img/projectsImg/project4/Exterior shots/p2.jpg';
import exterior3_3 from '../assets/img/projectsImg/project4/Exterior shots/p3.jpg';
import exterior3_4 from '../assets/img/projectsImg/project4/Exterior shots/p4.jpg';
import exterior3_5 from '../assets/img/projectsImg/project4/Exterior shots/p5.jpg';
import exterior3_6 from '../assets/img/projectsImg/project4/Exterior shots/p6.jpg';


// Defining the structure for gallery categories

interface GalleryCategory {
  exterior: string[];
  entrance: string[];
  sales: string[];
}

const GALLERY_IMAGES_DETAILS: Record<number, GalleryCategory> = {
  0: {
    exterior: [
      exterior0_1,
      exterior0_2,
      exterior0_3,
    ],
    entrance: [
      entrance_0_1,
      entrance_0_2,
      entrance_0_3,
    ],
    sales: [
      sales0_1,
      sales0_2,
      sales0_3,
      sales0_4,
      sales0_5,
    ],
  },
  1: {
    exterior: [
      exterior1_1,
      exterior1_2,
      exterior1_3,
      exterior1_4,
    ],
    entrance: [
      entrance1_1,
      entrance1_2,
      entrance1_3,
    ],
    sales: [
      sales1_1,
      sales1_2,
      sales1_3,
      sales1_4,
      sales1_5,
    ],
  },
  2: {
    exterior: [
      exterior2_1,
      exterior2_2,
      exterior2_3,
      exterior2_4,
      exterior2_5,
    ],
    entrance: [
      entrance2_1,
      entrance2_2,
      entrance2_3,
    ],
    sales: [
      sales2_1,
      sales2_2,
      sales2_3,
      sales2_4,
      sales2_5,
      sales2_6,
      sales2_7
    ],
  },
};

export default GALLERY_IMAGES_DETAILS;
