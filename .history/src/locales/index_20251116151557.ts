import * as enCommon from './en/common';
import * as enNav from './en/nav';
import * as enHero from './en/hero';
import * as enAbout from './en/about';
import * as enAboutPage from './en/aboutPage';
import * as enServices from './en/services';
import * as enServicesPage from './en/servicesPage';
import * as enGallery from './en/gallery';
import * as enGalleryPage from './en/galleryPage';
import * as enProjectPage from './en/projectPage';
import * as enWorks from './en/works';
import * as enWorksPage from './en/worksPage';
import * as enContact from './en/contact';
import * as enFooter from './en/footer';

import * as arCommon from './ar/common';
import * as arNav from './ar/nav';
import * as arHero from './ar/hero';
import * as arAbout from './ar/about';
import * as arAboutPage from './ar/aboutPage';
import * as arServices from './ar/services';
import * as arServicesPage from './ar/servicesPage';
import * as arGallery from './ar/gallery';
import * as arGalleryPage from './ar/galleryPage';
import * as arProjectPage from './ar/projectPage';
import * as arWorks from './ar/works';
import * as arWorksPage from './ar/worksPage';
import * as arContact from './ar/contact';
import * as arFooter from './ar/footer';

export const translations = {
  en: {
    common: (enCommon as any).default || enCommon.common,
    nav: (enNav as any).default || enNav.nav,
    hero: (enHero as any).default || enHero.hero,
    about: (enAbout as any).default || enAbout.about,
    aboutPage: (enAboutPage as any).default || enAboutPage.aboutPage,
    services: (enServices as any).default || enServices.services,
    servicesPage: (enServicesPage as any).default || enServicesPage.servicesPage,
    gallery: (enGallery as any).default || enGallery.gallery,
    galleryPage: (enGalleryPage as any).default || enGalleryPage.galleryPage,
    projectPage: (enProjectPage as any).default || enProjectPage.projectPage,
    works: (enWorks as any).default || enWorks.works,
    worksPage: (enWorksPage as any).default || enWorksPage.worksPage,
    contact: (enContact as any).default || enContact.contact,
    footer: (enFooter as any).default || enFooter.footer,
  },
  ar: {
    common: (arCommon as any).default || arCommon.common,
    nav: (arNav as any).default || arNav.nav,
    hero: (arHero as any).default || arHero.hero,
    about: (arAbout as any).default || arAbout.about,
    aboutPage: (arAboutPage as any).default || arAboutPage.aboutPage,
    services: (arServices as any).default || arServices.services,
    servicesPage: (arServicesPage as any).default || arServicesPage.servicesPage,
    gallery: (arGallery as any).default || arGallery.gallery,
    galleryPage: (arGalleryPage as any).default || arGalleryPage.galleryPage,
    projectPage: (arProjectPage as any).default || arProjectPage.projectPage,
    works: (arWorks as any).default || arWorks.works,
    worksPage: (arWorksPage as any).default || arWorksPage.worksPage,
    contact: (arContact as any).default || arContact.contact,
    footer: (arFooter as any).default || arFooter.footer,
  },
} as const;

export type Language = 'en' | 'ar';
export type TranslationKey = typeof translations.en;

export default translations;
