import { motion } from 'framer-motion';
import { Building2, Users, Award, Target, Eye, Heart, CheckCircle } from 'lucide-react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import BlueprintAnimation from '../components/Tools/BlueprintAnimation';
import VantaBackground from '../components/Tools/VantaBackground';

const AboutPage = () => {
  const { t } = useLanguage();

  // teamMembers moved to translations; keep icons mapping locally
  const memberIcons = [Building2, Target, Users, Award];

  // milestones moved to translations

  // values moved to translations; icons kept locally
  const valueIcons = [CheckCircle, Users, Heart, Target, Award, Eye];

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
        <VantaBackground enabled={true}  />


        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-5" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {t.aboutPage.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t.aboutPage.company.title}</h2>
              {t.aboutPage.company.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
            >
              <BlueprintAnimation />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.about.cards.map((card, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <Building2 className="text-teal-600 dark:text-teal-400 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.aboutPage.coreValues.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.aboutPage.coreValues.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.aboutPage.values.map((value, index) => {
              const Icon = valueIcons[index] || CheckCircle;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon className="text-teal-600 dark:text-teal-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.aboutPage.timeline.title}</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">{t.aboutPage.timeline.subtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-300 dark:bg-teal-700" />
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {t.aboutPage.timeline.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-white dark:bg-teal-400 rounded-full border-4 border-teal-300 dark:border-teal-600" />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.aboutPage.team.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.aboutPage.team.subtitle}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.aboutPage.team.members.map((member, index) => {
              const Icon = memberIcons[index] || Building2;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div className="bg-teal-100 dark:bg-teal-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-teal-600 dark:text-teal-400" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
