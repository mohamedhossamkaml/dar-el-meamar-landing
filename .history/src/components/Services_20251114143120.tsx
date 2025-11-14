import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SeeMoreButton from './Tools/Buttons/SeeMoreButton';
import HERO_IMAGES from '../config/heroImages';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import VantaBackground from './Tools/VantaBackground';
import CircularGallery from './Tools/motion/CircularGallery';
import Stack from './Tools/motion/Stack';


const Services = () => {
  const { t } = useLanguage();
  const imageUrls: string[] = [
    ...HERO_IMAGES
  ]

  const galleryItems = imageUrls.map((url) => ({
    image: url,
    text: ''
  }));

  const stackItems = imageUrls.map((url, idx) => ({
    id: idx,
    img: url,
  }));

  return (
    <motion.section
      id="services"
      className="relative h-full min-h-screen flex flex-col justify-between py-20  items-center
                 bg-gradient-to-br from-slate-50 to-white
                 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Vanta Background */}
      <VantaBackground enabled={true} />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ">
            {t.services.subtitle}
          </p>
          <SeeMoreButton to="/services" label={t.common.seeMore} />
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {t.services.list.map((service, idx) => (
            <motion.div
              key={idx}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                    ? scaleIn
                    : fadeInRight
              }
              className="  bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
                         hover:shadow-2xl dark:hover:shadow-teal-900 transition-all hover:-translate-y-1
                         border border-gray-100 dark:border-gray-700 "
            >
              <motion.div
                variants={scaleIn}
                className="bg-teal-100 dark:bg-teal-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
              >
                <Building2 size={28} className="text-teal-600 dark:text-teal-400" />
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Construction Types Image */}
        <motion.div
          onContextMenu={(e) => e.preventDefault()}
          className=' m-10 w-auto'
          style={{ height: '600px', }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <CircularGallery bend={0} items={galleryItems} borderRadius={0.07} scrollSpeed={2.3} scrollEase={0.02} /> */}

          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardDimensions={{ width: 900, height: 500 }}
            cardsData={stackItems}
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Services;
