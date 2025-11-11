// config/galleryImagesDetails.ts
// Sub-gallery images grouped by project ID and category

import entrance_0_1  from '../assets/img/projectsImg/project1/entrance/entrance_0_1.jpg';
import  entrance_0_2  from '../assets/img/projectsImg/project1/entrance/entrance_0_2.jpg';
import  entrance_0_3  from '../assets/img/projectsImg/project1/entrance/entrance_0_3.jpg';

interface GalleryCategory {
  exterior: string[];
  entrance: string[];
  sales: string[];
}

const GALLERY_IMAGES_DETAILS: Record<number, GalleryCategory> = {
  0: {
    exterior: [ ],
      entrance: [
        entrance_0_1,
        entrance_0_2,
        entrance_0_3,
    ],
    sales: [
      'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
    ],
  },
  1: {
    exterior: [
      'https://cdn.pixabay.com/photo/2024/03/07/15/57/houses-8618837_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/03/07/15/57/houses-8618837_1280.jpg',
    ],
    entrance: [
      'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
    ],
    sales: [
      'https://cdn.pixabay.com/photo/2019/10/26/11/40/building-4579244_1280.jpg',
      'https://cdn.pixabay.com/photo/2019/10/26/11/40/building-4579244_1280.jpg',
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
