import ServicesHero from '../components/servicesComponents/ServicesHero';
import ServicesList from '../components/servicesComponents/ServicesList';
import ServicesTypesImage from '../components/servicesComponents/ServicesTypesImage';
import ServicesWhy from '../components/servicesComponents/ServicesWhy';
import ServicesProcess from '../components/servicesComponents/ServicesProcess';

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
