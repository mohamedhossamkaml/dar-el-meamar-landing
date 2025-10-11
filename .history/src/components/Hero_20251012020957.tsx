import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import VantaBackground from './Tools/VantaBackground';
import HeroButton from './Tools/HeroButton';
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

  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Vanta Background */}
      {withVanta && (
        <VantaBackground
          enabled={true}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-white to-teal-500
                      dark:from-gray-900 dark:via-gray-700 dark:to-gray-950 opacity-90"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                variants={textVariant}
                className="text-5xl md:text-6xl font-bold leading-tight
                           text-gray-900 dark:text-white"
              >
                Building Your <span className="text-teal-600 dark:text-teal-400">Dreams</span> Into Reality
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl leading-relaxed text-gray-600 dark:text-gray-400"
              >
                Dar El-Meamar is your trusted partner in construction excellence.
                We transform visions into architectural masterpieces.
              </motion.p>
            </div>

            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4">
              <HeroButton
                label="Start Your Project"
                onClick={() => scrollToSection('contact')}
                primary
              />
              <HeroButton
                label="View Our Work"
                onClick={() => scrollToSection('works')}
              />
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeInRight} className="relative">
            <motion.div
              variants={hoverGlow}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="aspect-square rounded-2xl shadow-2xl flex items-center justify-center
                         bg-gradient-to-br from-teal-500 to-teal-700
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
