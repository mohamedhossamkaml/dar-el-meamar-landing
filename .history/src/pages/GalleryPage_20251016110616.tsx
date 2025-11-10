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
    { name: 'All Projects', icon: Building2, count: 24 },
    { name: 'Residential', icon: Home, count: 10 },
    { name: 'Commercial', icon: Building, count: 8 },
    { name: 'Industrial', icon: Factory, count: 4 },
    { name: 'Hotels', icon: Hotel, count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Residence Complex',
      category: 'Residential',
      location: 'New Cairo, Egypt',
      year: '2024',
      description: 'Modern luxury apartments with premium amenities',
      icon: Home,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Downtown Office Tower',
      category: 'Commercial',
      location: 'Business District, Cairo',
      year: '2023',
      description: 'State-of-the-art commercial building with smart technology',
      icon: Building,
      color: 'from-teal-400 to-teal-600',
    },
    {
      id: 3,
      title: 'Industrial Manufacturing Facility',
      category: 'Industrial',
      location: '10th of Ramadan City',
      year: '2023',
      description: 'Advanced manufacturing plant with automated systems',
      icon: Factory,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 4,
      title: 'Boutique Hotel & Resort',
      category: 'Hotels',
      location: 'Sharm El Sheikh',
      year: '2024',
      description: 'Luxury resort with world-class facilities',
      icon: Hotel,
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 5,
      title: 'Modern Villa Community',
      category: 'Residential',
      location: 'Sheikh Zayed, Giza',
      year: '2024',
      description: 'Exclusive gated community with contemporary design',
      icon: Home,
      color: 'from-green-400 to-green-600',
    },
    {
      id: 6,
      title: 'Shopping Mall Complex',
      category: 'Commercial',
      location: 'Alexandria',
      year: '2023',
      description: 'Multi-level retail and entertainment center',
      icon: Building,
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 7,
      title: 'Logistics Warehouse',
      category: 'Industrial',
      location: 'Port Said',
      year: '2022',
      description: 'Modern storage and distribution facility',
      icon: Warehouse,
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 8,
      title: 'Residential Towers',
      category: 'Residential',
      location: 'Nasr City, Cairo',
      year: '2023',
      description: 'Twin high-rise residential buildings',
      icon: Home,
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      id: 9,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      location: 'Smart Village, Giza',
      year: '2024',
      description: 'Sustainable corporate campus',
      icon: Building,
      color: 'from-emerald-400 to-emerald-600',
    },
  ];

  const stats = [
    { number: '500+', label: 'Completed Projects' },
    { number: '25+', label: 'Years of Experience' },
    { number: '100+', label: 'Active Projects' },
    { number: '1000+', label: 'Happy Clients' },
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
            Explore Our Portfolio of Exceptional Projects
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
                    <h4 className="text-2xl font-bold mb-2">View Project</h4>
                    <p className="text-teal-100">Click to see more details</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's bring your vision to life with our expertise and dedication
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-teal-500 text-teal-600 dark:text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
