// components/Buttons/PrimaryButton.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PrimaryButtonProps {
  to: string;
  label: string;
  ariaLabel?: string;
}

const PrimaryButton = ({ to, label, ariaLabel }: PrimaryButtonProps) => (
  <Link to={to}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel || label}
      className="bg-teal-600 text-white px-8 py-4 rounded-lg
                 hover:bg-teal-700 transition-all hover:shadow-lg
                 font-medium text-lg
                 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
    >
      {label}
    </motion.button>
  </Link>
);

export default PrimaryButton;
