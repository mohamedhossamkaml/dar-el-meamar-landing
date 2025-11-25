import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}></Suspense>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Works />
      <Contact />
    </Suspense >
    </>
  );
};

export default HomePage;
