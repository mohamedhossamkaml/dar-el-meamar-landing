// src/components/Hero.tsx
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, textVariant, fadeIn } from '../utils/animations';
interface Props {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: Props) => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50"
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Your <span className="text-teal-600">Dreams</span> Into Reality
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dar El-Meamar is your trusted partner in construction excellence. We transform visions into architectural masterpieces.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl flex items-center justify-center">
              <Building2 size={200} className="text-white opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <Building2  size={80} className="mx-auto" />
                  <p className="text-2xl font-bold">Excellence in Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
