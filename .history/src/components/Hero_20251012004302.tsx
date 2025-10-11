import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import VantaBackground from './Tools/VantaBackground';
import { useTheme } from 'next-themes';


import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  textVariant,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  hoverGlow,
} from '../utils/animations';

interface Props {
  scrollToSection: (id: string) => void;
  withVanta?: boolean;
}

const Hero = ({ scrollToSection, withVanta }: Props) => {
const { theme } = useTheme();

  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Vanta.js Background */}
      {withVanta && (
      <VantaBackground
        enabled={true}
        color={theme === 'dark' ? 0x14b8a6 : 0xff6f61}
        backgroundColor={theme === 'dark' ? 0x0f172a : 0xfefefe}
      />
      )}


      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50
                      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Text Content */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                variants={textVariant}
                className="text-5xl md:text-6xl font-bold
                           text-gray-900 dark:text-white leading-tight"
              >
                Building Your <span className="text-teal-600 dark:text-teal-400">Dreams</span> Into Reality
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Dar El-Meamar is your trusted partner in construction excellence.
                We transform visions into architectural masterpieces.
              </motion.p>
            </div>

            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg
                           hover:bg-teal-700 transition-all hover:shadow-lg
                           font-medium text-lg
                           dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('works')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg
                           hover:bg-teal-50 transition-all font-medium text-lg
                           dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div variants={fadeInRight} className="relative">
            <motion.div
              variants={hoverGlow}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="aspect-square rounded-2xl
                         bg-gradient-to-br from-teal-500 to-teal-700
                         shadow-2xl flex items-center justify-center
                         dark:from-teal-600 dark:to-teal-800"
            >
              <Building2 size={200} className="text-white opacity-20" />
              <motion.div
                variants={fadeInUp}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white space-y-4">
                  <motion.div variants={scaleIn}>
                    <Building2 size={80} className="mx-auto text-white dark:text-teal-300" />
                  </motion.div>
                  <motion.p
                    variants={fadeIn}
                    className="text-2xl font-bold text-white dark:text-teal-100"
                  >
                    Excellence in Construction
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
