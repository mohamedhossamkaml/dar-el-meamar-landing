import { motion } from 'framer-motion';
import CountUp from './Tools/motion/CountUp'
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t, i18n } = useTranslation();


  const stats = t("works.stats", { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  return (
    <motion.section
      key={i18n.language}
      id="works"
      className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white
                  dark:from-slate-900 dark:to-slate-950 dark:text-gray-100 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-teal-300">
            {t("works.title")}
          </h2>
          <p className="text-xl text-teal-100 dark:text-gray-400 max-w-3xl mx-auto">
            {t("works.subtitle")}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              transition={{ delay: idx * 0.2 }}
              className="space-y-2"
            >
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              <motion.p
                variants={scaleIn}
                className="text-5xl font-bold text-white dark:text-teal-400"
              >
                {stat.value}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-teal-100 dark:text-gray-400 text-lg"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
