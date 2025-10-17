// components/Buttons/OutlineButton.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface OutlineButtonProps {
  to: string;
  label: string;
  ariaLabel?: string;
}

const OutlineButton = ({ to, label, ariaLabel }: OutlineButtonProps) => (
  <Link to={to}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel || label}
      className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg
                 hover:bg-teal-50 transition-all font-medium text-lg
                 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
    >
      {label}
    </motion.button>
  </Link>
);

export default OutlineButton;
