import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, Target, Globe, Star, ThumbsUp } from 'lucide-react';
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

const WorksPage = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: 'Industry Awards',
      count: '15+',
      description: 'Recognition for excellence in construction and design',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Building2,
      title: 'Completed Projects',
      count: '500+',
      description: 'Successfully delivered across various sectors',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'Happy Clients',
      count: '1000+',
      description: 'Satisfied customers who trust our services',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Globe,
      title: 'International Projects',
      count: '50+',
      description: 'Expanding our reach across borders',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { name: 'LEED Certified', description: 'Green Building Certification' },
    { name: 'PMP Certified', description: 'Project Management Professional' },
    { name: 'Energy Star', description: 'Energy Efficiency Standards' },
  ];

  const testimonials = [
    {
      name: 'Mohamed Ahmed',
      role: 'CEO, Tech Corp',
      quote: 'Dar El-Meamar exceeded our expectations with their professionalism and quality of work. Our new headquarters is a masterpiece.',
      rating: 5,
    },
    {
      name: 'Sarah Hassan',
      role: 'Real Estate Developer',
      quote: 'Working with this team was seamless. They delivered our residential project on time and within budget. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Ali Ibrahim',
      role: 'Factory Owner',
      quote: 'The industrial facility they built for us is state-of-the-art. Their attention to detail and safety protocols is outstanding.',
      rating: 5,
    },
  ];

  const awards = [
    { year: '2024', title: 'Best Construction Company', organization: 'Regional Excellence Awards' },
    { year: '2023', title: 'Innovation in Design', organization: 'Architecture & Construction Forum' },
    { year: '2023', title: 'Sustainability Leadership', organization: 'Green Building Council' },
    { year: '2022', title: 'Project of the Year', organization: 'Construction Industry Awards' },
    { year: '2021', title: 'Safety Excellence', organization: 'Occupational Safety Association' },
    { year: '2020', title: 'Customer Satisfaction', organization: 'Client Choice Awards' },
  ];

  const capabilities = [
    {
      icon: Target,
      title: 'Project Management',
      description: 'Expert coordination from conception to completion',
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: '500+ trained professionals and craftsmen',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Technology',
      description: 'BIM, 3D modeling, and cutting-edge construction tech',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection protocols',
    },
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
            {t.works.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Proven Track Record of Excellence and Innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color}`} />
                <div className="relative p-8 text-white">
                  <achievement.icon size={48} className="mb-4" />
                  <div className="text-5xl font-bold mb-2">{achievement.count}</div>
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-white/90">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              What makes us industry leaders
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
              >
                <capability.icon className="text-teal-600 dark:text-teal-400 mx-auto mb-4" size={56} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{capability.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Celebrating our industry accolades
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-teal-500 dark:border-teal-400"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                    <Award className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-teal-600 dark:text-teal-400 font-semibold mb-1">{award.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Internationally recognized standards we uphold
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-teal-600 dark:text-teal-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
