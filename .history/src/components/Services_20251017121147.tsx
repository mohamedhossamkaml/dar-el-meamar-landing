import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SeeMoreButton from './Buttons/SeeMoreButton';
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


const Services = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="services"
      className="relative min-h-screen py-20 flex  items-center
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
          className="text-center mb-17"
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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {t.services.subtitle}
          </p>
          <SeeMoreButton to="/services" label={t.common.seeMore} />
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10"
        >
          {/* Types of Building Construction */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900
                        rounded-xl shadow-xl overflow-hidden border border-teal-100 dark:border-teal-900
                        max-w-5xl w-full p-3 sm:p-6 transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                {t.services.typesTitle}
              </h3>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <motion.img
                  src="/types-of-building-construction-types.png"
                  alt="Types of Building Construction"
                  className="w-full h-auto rounded-xl shadow-lg mx-auto"
                  variants={{
                    rest: { scale: 1, rotate: 0, y: 0 },
                    hover: {
                      scale: 1.03,
                      rotate: 1,
                      y: -4,
                      transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      },
                    },
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
