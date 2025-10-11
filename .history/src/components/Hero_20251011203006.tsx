import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  textVariant,
  fadeIn,
  fadeInLeft,
  fadeInRight,
} from '../utils/animations';

interface Props {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: Props) => {
  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Text Content */}
          <motion.div
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                variants={textVariant}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Building Your <span className="text-teal-600">Dreams</span> Into Reality
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Dar El-Meamar is your trusted partner in construction excellence.
                We transform visions into architectural masterpieces.
              </motion.p>
            </div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium text-lg"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-all font-medium text-lg"
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl flex items-center justify-center">

              <Building2 size={200} className="text-white opacity-20" />


              <motion.div
                variants={fadeInUp}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white space-y-4">
                  <motion.div variants={scaleIn}>
                    <Building2 size={80} className="mx-auto" />
                  </motion.div>
                  <motion.p
                    variants={fadeIn}
                    className="text-2xl font-bold"
                  >
                    Excellence in Construction
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
