import WorksHero from '../components/works/WorksHero';
import WorksAchievements from '../components/works/WorksAchievements';
import WorksCapabilities from '../components/works/WorksCapabilities';
import WorksAwards from '../components/works/WorksAwards';
import WorksCertifications from '../components/works/WorksCertifications';
import WorksTestimonials from '../components/works/WorksTestimonials';

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <WorksHero />
      <WorksAchievements />
      <WorksCapabilities />
      <WorksAwards />
      <WorksCertifications />
      <WorksTestimonials />
    </div>
  );
};

export default WorksPage;
