import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useTranslation } from "react-i18next";
import BlurText from './Tools/motion/BlurText';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <motion.section
      id="contact"
      key={i18n.language}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
  className="text-center flex flex-col items-center mb-16"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
>
  <BlurText
    text={t("contact.title")}
    delay={360}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
  />

  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
    {t("contact.subtitle")}
  </p>
</motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
          >
            {/* Phone */}
            <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <Phone className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t("contact.info.phoneLabel")}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t("contact.info.phoneValue")}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start space-x-4"
              variants={fadeInUp}>

              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <Mail className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t("contact.info.emailLabel")}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t("contact.info.emailValue")}</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <MapPin className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t("contact.info.addressLabel")}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t("contact.info.addressValue")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form variants={fadeInRight} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">{t("contact.form.name")}</label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">{t("contact.form.email")}</label>
              <input
                type="email"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">{t("contact.form.message")}</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              variants={scaleIn}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium text-lg
                         dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
            >
              {t("contact.form.button")}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
