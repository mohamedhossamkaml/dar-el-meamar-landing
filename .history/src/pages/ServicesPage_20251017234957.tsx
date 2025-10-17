import { motion } from 'framer-motion';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench, HardHat, Shield, Clock, Award } from 'lucide-react';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import VantaBackground from '../components/Tools/VantaBackground';

import typesBuildingImage from '../assets/types-of-building-construction-types.png';

const ServicesPage = () => {
  const { t } = useLanguage();

  // detailed services content comes from translations; icons and colors remain local
  const serviceIcons = [Building2, Home, Factory, Hammer, PaintBucket, Wrench];
  const serviceColors = [
    'from-blue-500 to-blue-600',
    'from-teal-500 to-teal-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-green-500 to-green-600',
  ];
  const detailedServices = (t.servicesPage.detailedServices || []).map((s, i) => ({
    ...s,
    icon: serviceIcons[i] || Building2,
    color: serviceColors[i] || 'from-teal-500 to-teal-600',
  }));

  const whyIcons = [HardHat, Shield, Clock, Award];
  const whyChooseUs = (t.servicesPage.whyChooseUs || []).map((w, i) => ({
    ...w,
    icon: whyIcons[i] || HardHat,
  }));

  const processSteps = t.servicesPage.processSteps || [];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
                {/* Vanta Background */}
        <VantaBackground enabled={true} />

        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-5" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t.services.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t.servicesPage.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Detailed Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction Types Image */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-100 dark:border-teal-900 p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
                {t.services.typesTitle}
              </h2>
              <motion.img
                src={typesBuildingImage}
                alt="Types of Building Construction"
                className="w-full h-auto rounded-xl shadow-lg mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.servicesPage.sections.achievementsTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.servicesPage.sections.achievementsSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg text-center"
              >
                <item.icon className="text-teal-600 dark:text-teal-400 mx-auto mb-4" size={56} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.servicesPage.sections.processTitle}</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              {t.servicesPage.sections.processSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative"
              >
                <div className="text-6xl font-bold text-teal-100 dark:text-gray-700 absolute top-4 right-4 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
