import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
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
}

const Hero = ({ scrollToSection }: Props) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x62a8d1,// teal
  points: 13.00,
  maxDistance: 26.00,
  spacing: 12.00,

          backgroundColor: 0x0f172a, // dark background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // ✅ يشتغل مرة واحدة بس

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
      <div ref={vantaRef} className="absolute inset-0"></div>

      {/* Overlay Gradient فوق Vanta */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50
                      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-90"></div>

      {/* المحتوى */}
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
