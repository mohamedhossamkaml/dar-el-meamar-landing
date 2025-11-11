import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  logoImage: string;          // Path to the logo image file
  size?: string;              // CSS class for size (e.g., "h-20")
  animation?: any;            // Framer Motion animation variants
  className?: string;         // Additional CSS classes
}

const Logo: React.FC<LogoProps> = ({ logoImage, size = "h-20", animation, className }) => {
  return (
    <Link to="/" className="select-none">
      <motion.img
        src={logoImage}
        alt="Dar El-Meamar Logo select-none pointer-events-none"
        className={`${size} w-auto cursor-pointer hover:opacity-80 transition-opacity pointer-events-none ${className}`}
        variants={animation}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()} // disable right-click
      />
    </Link>
  );
};

export default Logo;
