import { motion } from 'framer-motion';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench, HardHat, Shield, Clock, Award } from 'lucide-react';
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

const ServicesPage = () => {
  const { t } = useLanguage();

  const detailedServices = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from office complexes to retail spaces.',
      features: ['Office Buildings', 'Shopping Centers', 'Hotels & Resorts', 'Mixed-Use Developments'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Creating beautiful and functional living spaces for families and communities.',
      features: ['Luxury Villas', 'Apartment Complexes', 'Gated Communities', 'Townhouses'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Factory,
      title: 'Industrial Construction',
      description: 'Specialized facilities designed for manufacturing and logistics operations.',
      features: ['Warehouses', 'Manufacturing Plants', 'Distribution Centers', 'Industrial Parks'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      features: ['Interior Renovations', 'Facade Upgrades', 'Space Optimization', 'Historic Restoration'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: PaintBucket,
      title: 'Interior Design & Finishing',
      description: 'Premium finishing services that bring your vision to life with attention to detail.',
      features: ['Custom Interiors', 'Luxury Finishes', 'Smart Home Integration', 'Sustainable Materials'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support services to keep your property in perfect condition.',
      features: ['Regular Inspections', 'Preventive Maintenance', '24/7 Emergency Support', 'Facility Management'],
      color: 'from-green-500 to-green-600',
    },
  ];

  const whyChooseUs = [
    {
      icon: HardHat,
      title: 'Expert Team',
      description: 'Highly skilled professionals with decades of combined experience',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict safety protocols and compliance with international standards',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Proven track record of completing projects on schedule',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage of construction',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
    { number: '02', title: 'Planning', description: 'Detailed project planning and design development' },
    { number: '03', title: 'Approval', description: 'Obtaining necessary permits and approvals' },
    { number: '04', title: 'Construction', description: 'Executing the project with precision and care' },
    { number: '05', title: 'Quality Check', description: 'Thorough inspection and quality assurance' },
    { number: '06', title: 'Handover', description: 'Final delivery and client satisfaction' },
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

        <div className="absolute inset-0 bg-black opacity-20" />
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
            Comprehensive Construction Solutions for Every Need
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
                src="/types-of-building-construction-types.png"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              What sets us apart in the construction industry
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              A streamlined approach to bringing your project to life
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
