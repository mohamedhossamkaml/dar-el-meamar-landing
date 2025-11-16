import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-4"
        >
          🚧
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
