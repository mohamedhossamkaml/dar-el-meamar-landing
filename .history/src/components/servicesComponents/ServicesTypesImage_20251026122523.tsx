import React from 'react';
import { motion } from 'framer-motion';
import typesBuildingImage from '../../assets/types-of-building-construction-types.png';
import { useLanguage } from '../../context/LanguageContext';

const ServicesTypesImage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-100 dark:border-teal-900 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">{t.services.typesTitle}</h2>



          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTypesImage;
