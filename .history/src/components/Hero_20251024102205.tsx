import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PrimaryButton from './Tools/Buttons/PrimaryButton';
import OutlineButton from './Tools/Buttons/OutlineButton';
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
import { useLanguage } from '../context/LanguageContext';
import ImageSlider from './Tools/ImageSlider';

type HeroProps = {
  images?: string[];
};

const Hero: React.FC<HeroProps> = ({ images }) => {
  const { t } = useLanguage();

  const defaultImages = images ?? [
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60',
  ];

  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center
                  bg-gradient-to-br from-teal-500 via-white to-teal-200
                  dark:from-gray-950 dark:via-gray-800 dark:to-gray-800
                  relative overflow-hidden"
    >
  {/* Background Image Slider */}
  <ImageSlider images={defaultImages} interval={5000} transitionDuration={1} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
                initial="hidden"
                whileInView="visible"
                className="text-5xl  md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                {t.hero.titleStart}{' '}
                <motion.span
                  className="text-teal-600"
                  animate={{ scale: [1, 1.6, 1], opacity: [1.5, 0.5, 1.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t.hero.titleHighlight}
                </motion.span>{' '}
                {t.hero.titleEnd}
              </motion.h1>


              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton to="/contact" label={t.hero.cta} />
              <OutlineButton to="/works" label={t.hero.learnMore} />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
