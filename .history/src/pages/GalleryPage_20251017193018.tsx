import { motion } from 'framer-motion';
import { Building2, Home, Factory, Building, Warehouse, Hotel } from 'lucide-react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import VantaBackground from '../components/Tools/VantaBackground';

const GalleryPage = () => {
  const { t } = useLanguage();

  const categories = [
    { name: t.galleryPage.categories[0].name, icon: Building2, count: t.galleryPage.categories[0].count },
    { name: t.galleryPage.categories[1].name, icon: Home, count: t.galleryPage.categories[1].count },
    { name: t.galleryPage.categories[2].name, icon: Building, count: t.galleryPage.categories[2].count },
    { name: t.galleryPage.categories[3].name, icon: Factory, count: t.galleryPage.categories[3].count },
    { name: t.galleryPage.categories[4].name, icon: Hotel, count: t.galleryPage.categories[4].count },
  ];

  const projects = [
    {...t.galleryPage.projects[0], icon: Home, color: 'from-blue-400 to-blue-600'},
    {
      ...t.galleryPage.projects[1], icon: Building, color: 'from-teal-400 to-teal-600',
    },
    {
      ...t.galleryPage.projects[2], icon: Factory, color: 'from-purple-400 to-purple-600',
    },
    {
      ...t.galleryPage.projects[3], icon: Hotel, color: 'from-orange-400 to-orange-600',
    },
    {
      ...t.galleryPage.projects[4], icon: Home, color: 'from-green-400 to-green-600',
    },
    {
      ...t.galleryPage.projects[5], icon: Building, color: 'from-pink-400 to-pink-600',
    },
    {
      ...t.galleryPage.projects[6], icon: Warehouse, color: 'from-indigo-400 to-indigo-600',
    },
    {
      ...t.galleryPage.projects[7], icon: Home, color: 'from-cyan-400 to-cyan-600',
    },
    {
      ...t.galleryPage.projects[8], icon: Building, color: 'from-emerald-400 to-emerald-600',
    },
  ];

  const stats = [
    ...t.galleryPage.stats,
  ];

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
            {t.gallery.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t.galleryPage.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-all border-2 border-teal-500 dark:border-teal-400"
              >
                <category.icon className="text-teal-600 dark:text-teal-400" size={20} />
                <span className="font-semibold text-gray-700 dark:text-gray-300">{category.name}</span>
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={
                  index % 3 === 0
                    ? fadeInLeft
                    : index % 3 === 1
                      ? scaleIn
                      : fadeInRight
                }
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Image Placeholder with Icon */}
                <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-white/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon size={120} />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{project.year}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <Building2 size={16} className="mr-2" />
                    {project.location}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-teal-600/90 dark:bg-teal-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                >
                  <div className="text-white text-center p-6">
                    <Building2 size={48} className="mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">{t.galleryPage.hover.title}</h4>
                    <p className="text-teal-100">{t.galleryPage.hover.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.galleryPage.cta.title}
            </h2>
            <p className="text-xl text-teal-100 mb-8">{t.galleryPage.cta.subtitle}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-teal-500 text-teal-600 dark:text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {t.galleryPage.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
