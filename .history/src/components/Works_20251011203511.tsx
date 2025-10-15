import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';

const Works = () => {
  const stats = [
    { value: '250+', label: 'Completed Projects' },
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <motion.section
      id="works"
      className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Delivering excellence across diverse construction projects
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={
                idx === 0
                  ? fadeInLeft
                  : idx === 1
                  ? scaleIn
                  : idx === 2
                  ? fadeInUp
                  : fadeInRight
              }
              className="space-y-2"
            >
              <motion.p
                variants={scaleIn}
                className="text-5xl font-bold"
              >
                {stat.value}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-teal-100 text-lg"
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
