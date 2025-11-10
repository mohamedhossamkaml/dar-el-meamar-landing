import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/Tools/ScrollToTopButton';
import ScrollToTop from './components/Tools/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import WorksPage from './pages/WorksPage';
import Contact from './components/Contact';
import SocialContact from './components/SocialContact/SocialContact';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen  bg-white dark:bg-gray-900  text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <SocialContact position="left" /> {/* Social icons on the left side */}
        <div className="pt-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
