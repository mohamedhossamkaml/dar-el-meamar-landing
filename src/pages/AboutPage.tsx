import AboutHero from '../components/about/AboutHero';
import AboutCompany from '../components/about/AboutCompany';
import AboutCards from '../components/about/AboutCards';
import AboutValues from '../components/about/AboutValues';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutTeam from '../components/about/AboutTeam';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AboutHero />
      <AboutCompany />
      <AboutCards />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;
