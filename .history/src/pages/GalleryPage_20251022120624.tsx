import GalleryHero from '../components/gallery/GalleryHero';
import GalleryStats from '../components/gallery/GalleryStats';
import GalleryCategories from '../components/gallery/GalleryCategories';
import GalleryProjects from '../components/gallery/GalleryProjects';
import GalleryCTA from '../components/gallery/GalleryCTA';

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <GalleryHero />
      <GalleryStats />
      <GalleryCategories />
      <GalleryProjects />
      <GalleryCTA />
    </div>
  );
};

export default GalleryPage;
