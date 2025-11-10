import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesTypesImage from '../components/services/ServicesTypesImage';
import ServicesWhy from '../components/services/ServicesWhy';
import ServicesProcess from '../components/services/ServicesProcess';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ServicesHero />
      <ServicesList />
      <ServicesTypesImage />
      <ServicesWhy />
      <ServicesProcess />
    </div>
  );
};

export default ServicesPage;
