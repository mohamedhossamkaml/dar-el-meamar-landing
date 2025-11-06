import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, X } from 'lucide-react';



interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
  t: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, t }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={24} />
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Building2 size={16} className="mr-2" />
              {project.location}
            </div>
            <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm">
              {project.category}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
