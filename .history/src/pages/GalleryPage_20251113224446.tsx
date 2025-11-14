import React, { Suspense } from 'react';

const GalleryHero = React.lazy(() => import('../components/gallery/GalleryHero'));
const GalleryStats = React.lazy(() => import('../components/gallery/GalleryStats'));
const GalleryCategories = React.lazy(() => import('../components/gallery/GalleryCategories'));
const GalleryProjects = React.lazy(() => import('../components/gallery/GalleryProjects'));
const GalleryCTA = React.lazy(() => import('../components/gallery/GalleryCTA'));

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <GalleryHero />
        <GalleryStats />
        {/* <GalleryCategories /> */}
        <GalleryProjects />
        <GalleryCTA />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
