import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';

const Gallery = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <motion.section
      id="gallery"
      className="py-20 bg-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* العنوان والوصف */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our finest construction achievements
          </p>
        </motion.div>

        {/* المشاريع */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {projects.map((item, idx) => (
            <motion.div
              key={item}
              variants={
                idx % 3 === 0
                  ? fadeInLeft
                  : idx % 3 === 1
                  ? scaleIn
                  : fadeInRight
              }
              className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center overflow-hidden group"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center text-teal-700 group-hover:scale-110 transition-transform"
              >
                <Building2 size={64} className="mx-auto mb-4" />
                <p className="font-semibold text-lg">Project {item}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
