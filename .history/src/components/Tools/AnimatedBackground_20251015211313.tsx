import craneImage from '../../assets/cranesafety.webp';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 20, repeat: Infinity }}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-cover bg-center"
      style={{
        backgroundImage: `url(${craneImage})`,
      }}
    />
  );
};

export default AnimatedBackground;