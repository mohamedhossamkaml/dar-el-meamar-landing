// config/galleryImagesDetails.ts
// Sub-gallery images grouped by project ID and category

// Importing local images for project 1 entrance category
import  entrance_0_1  from '../assets/img/projectsImg/project1/entrance/entrance_0_1.jpg';
import  entrance_0_2  from '../assets/img/projectsImg/project1/entrance/entrance_0_2.jpg';
import entrance_0_3 from '../assets/img/projectsImg/project1/entrance/entrance_0_3.jpg';

import exterior0_1 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 4 Villa 3.jpg';
import exterior0_2 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 5 Villa 3.jpg';
import exterior0_3 from '../assets/img/projectsImg/project1/exterior shots/P.p Shot 6 Villa 3.jpg';

import sales0_1 from '../assets/img/projectsImg/project1/sales plans/9-Ground App. Left.jpg';
import sales0_2 from '../assets/img/projectsImg/project1/sales plans/8-Typical Right.jpg';
import sales0_3 from '../assets/img/projectsImg/project1/sales plans/7-Typical left.jpg';
import sales0_4 from '../assets/img/projectsImg/project1/sales plans/10-Ground App. Right.jpg';
import sales0_5 from '../assets/img/projectsImg/project1/sales plans/11- Lower Ground App. Left.jpg';
import sales0_6 from '../assets/img/projectsImg/project1/sales plans/12- Lower Ground App. Right.jpg';
import sales0_7 from '../assets/img/projectsImg/project1/sales plans/13-Ground Duplex Left.jpg';
import sales0_8 from '../assets/img/projectsImg/project1/sales plans/14- Lower Ground Duplex Left.jpg';
import sales0_9 from '../assets/img/projectsImg/project1/sales plans/15-Ground Duplex Right.jpg';
import sales0_10 from '../assets/img/projectsImg/project1/sales plans/16- Lower Ground Duplex Right.jpg';


// Importing local images for project 2 exterior category

import exterior1_1 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 1.jpg';
import exterior1_2 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 2.jpg';
import exterior1_3 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 3.jpg';
import exterior1_4 from '../assets/img/projectsImg/project2/Exterior shots/P.P Shot 4.jpg';

import entrance1_1 from '../assets/img/projectsImg/project2/Entrance/Lift Lobby Shot 1 P.p.jpg';
import entrance1_2 from '../assets/img/projectsImg/project2/Entrance/Lift Lobby Shot 2 -3.jpg';
import entrance1_3 from '../assets/img/projectsImg/project2/entrance/Lift Lobby Shot 3-3.jpg';

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
      sales0_6,
      sales0_7,
      sales0_8,
      sales0_9,
      sales0_10,
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

    ],
  },
  2: {
    exterior: [
      'https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg',
    ],
    entrance: [
      'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg',
    ],
    sales: [
      'https://cdn.pixabay.com/photo/2019/10/27/08/17/villa-4581027_1280.jpg',
      'https://cdn.pixabay.com/photo/2019/10/27/08/17/villa-4581027_1280.jpg',
    ],
  },
  3: {
    exterior: [
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
    ],
    entrance: [
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
    ],
    sales: [
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/12/15/08/53/city-1093864_1280.jpg',
    ],
  },
};

export default GALLERY_IMAGES_DETAILS;
