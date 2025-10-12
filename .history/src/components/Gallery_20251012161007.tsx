import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  // جلب المشاريع من ملف الترجمة
  const projects = t("gallery.projects", { returnObjects: true }) as string[];

  return (
    <motion.section
      id="gallery"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                  ? scaleIn
                  : fadeInRight
              }
              initial="hidden"
              whileInView="visible"
              animate="rest"
              viewport={{ once: true, amount: 0.2 }}
              className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200
                         dark:from-gray-800 dark:to-gray-700
                         rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-teal-600 cursor-pointer transition-all hover:-translate-y-1
                         flex items-center justify-center overflow-hidden group"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center text-teal-700 dark:text-teal-400 group-hover:scale-110 transition-transform"
              >
                <Building2 size={64} className="mx-auto mb-4 text-teal-700 dark:text-teal-400" />
                <p className="font-semibold text-lg">{project}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
