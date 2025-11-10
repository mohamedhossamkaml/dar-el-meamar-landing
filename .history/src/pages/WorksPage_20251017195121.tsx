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
    // content will be filled from translations; icon/color preserved locally below
  ];

  const certifications = [
    // sourced from translations
  ];

  const testimonials = [
    // sourced from translations
  ];

  const awards = [
    // sourced from translations
  ];

  const capabilities = [
    // icons kept local; titles/descriptions come from translations below
  ];

  // Map translations into the local arrays while preserving icons/colors
  const achievementColors = ['from-yellow-400 to-yellow-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-purple-400 to-purple-600'];
  const achievementIcons = [Award, Building2, Users, Globe];
  const achievementsFromT = (t.worksPage?.achievements || []).map((a, i) => ({
    icon: achievementIcons[i] || Award,
    title: a.title,
    count: a.count,
    description: a.description,
    color: achievementColors[i] || 'from-blue-400 to-blue-600',
  }));

  const capabilitiesIcons = [Target, Users, TrendingUp, ThumbsUp];
  const capabilitiesFromT = (t.worksPage?.capabilities || []).map((c, i) => ({
    icon: capabilitiesIcons[i] || Target,
    title: c.title,
    description: c.description,
  }));

  const awardsFromT = t.worksPage?.awards || [];
  const certificationsFromT = t.worksPage?.certifications || [];
  const testimonialsFromT = t.worksPage?.testimonials || [];

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
            {t.works.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t.worksPage?.hero?.subtitle || t.works.subtitle}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.achievementsSection?.title || t.works.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.worksPage?.achievementsSection?.subtitle || t.works.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {achievementsFromT.map((achievement, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.capabilitiesSection?.title || 'Our Capabilities'}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.worksPage?.capabilitiesSection?.subtitle || 'What makes us industry leaders'}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilitiesFromT.map((capability, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.awardsSection?.title || 'Awards & Recognition'}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.worksPage?.awardsSection?.subtitle || 'Celebrating our industry accolades'}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {awardsFromT.map((award, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.certificationsSection?.title || 'Certifications'}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.worksPage?.certificationsSection?.subtitle || 'Internationally recognized standards we uphold'}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificationsFromT.map((cert, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.worksPage?.testimonialsSection?.title || 'Client Testimonials'}</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              {t.worksPage?.testimonialsSection?.subtitle || 'What our clients say about working with us'}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonialsFromT.map((testimonial, index) => (
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
