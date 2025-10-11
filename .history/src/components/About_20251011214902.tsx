import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';

const About = () => {
  const cards = [
    {
      title: 'Our Vision',
      description:
        'To be the leading construction company, setting new standards in quality, innovation, and customer satisfaction across the region.',
    },
    {
      title: 'Our Mission',
      description:
        'Delivering exceptional construction projects that exceed expectations through expertise, dedication, and attention to every detail.',
    },
    {
      title: 'Our Values',
      description:
        'Integrity, quality craftsmanship, innovation, and building lasting relationships with our clients and community.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Dar El-Meamar
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A legacy of construction excellence and architectural innovation
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer, hoverGlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover="hover"
          animate="rest"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={
                index === 0 ? fadeInLeft : index === 1 ? scaleIn : fadeInRight
              }
              className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900
                         p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                variants={scaleIn}
                className="bg-teal-600 dark:bg-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              >
                <Building2 size={32} className="text-white dark:text-gray-900" />
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {card.title}
              </motion.h3>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
