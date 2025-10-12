import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import VantaBackground from './Tools/VantaBackground';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useTranslation } from "react-i18next";

interface Props {
  withVanta?: boolean;
}

const Services = ({ withVanta }: Props) => {
  const { t, i18n } = useTranslation();


  const services = t("services.cards", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  return (
    <motion.section
      key={i18n.language}
      id="services"
      className="relative min-h-screen py-20 flex items-center
                 bg-gradient-to-br from-slate-50 to-white
                 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {withVanta && <VantaBackground enabled={true} />}

      {/* Background Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br
                      from-teal-300 via-white to-teal-500
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
                      opacity-90 pointer-events-none"></div>

      { /* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            {t("services.title")}
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              transition={{ delay: idx * 0.15 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg
                         hover:shadow-2xl dark:hover:shadow-teal-900
                         transition-all hover:-translate-y-1
                         border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                variants={scaleIn}
                className="bg-teal-100 dark:bg-teal-900 w-14 h-14 rounded-lg
                           flex items-center justify-center mb-6"
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
