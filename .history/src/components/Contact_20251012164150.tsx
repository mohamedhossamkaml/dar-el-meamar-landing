import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from '../utils/animations';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      key={i18n.language}
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={fadeInLeft}>
            {/* Phone */}
            <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <Phone className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {t("contact.info.phoneLabel")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.info.phoneValue")}
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <Mail className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {t("contact.info.emailLabel")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.info.emailValue")}
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                <MapPin className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {t("contact.info.addressLabel")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.info.addressValue")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
            variants={fadeInRight}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700
                         dark:bg-teal-500 dark:hover:bg-teal-400 transition-colors font-bold"
            >
              {t("contact.form.button")}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
