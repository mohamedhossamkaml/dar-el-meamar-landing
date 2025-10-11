import { motion } from 'framer-motion';

interface HeroButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const HeroButton = ({ label, onClick, primary = false }: HeroButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-lg font-medium text-lg transition-all ${
        primary
          ? "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
          : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
      }`}
    >
      {label}
    </motion.button>
  );
};
