import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      desc: 'Building dream homes with precision and care',
    },
    {
      title: 'Commercial Projects',
      desc: 'Creating functional and impressive business spaces',
    },
    {
      title: 'Renovations & Remodeling',
      desc: 'Transforming existing spaces into modern masterpieces',
    },
    {
      title: 'Project Management',
      desc: 'End-to-end construction project oversight',
    },
    {
      title: 'Architectural Design',
      desc: 'Innovative designs that bring visions to life',
    },
    {
      title: 'Consultation Services',
      desc: 'Expert guidance for your construction journey',
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                  ? scaleIn
                  : fadeInRight
              }
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                variants={scaleIn}
                className="bg-teal-100 dark:bg-teal-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6"
              >
                <Building2 size={28} className="text-teal-600 dark:text-teal-400" />
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
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
      </div>
    </motion.section>
  );
};

export default Services;
