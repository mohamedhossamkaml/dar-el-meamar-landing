import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryButtons from './CategoryButtons';
import ImageViewer from './ImageViewer';
import ProjectDetails from './ProjectDetails';
import CloseButton from './CloseButton';

interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
  t: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, t }) => {
  const [category, setCategory] = useState<'exterior' | 'entrance' | 'sales'>('exterior');
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;
  const images = project.images[category] || [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full p-6 relative flex flex-col">
            <div className="flex items-center justify-between gap-4 mt-4">
              <CategoryButtons category={category} setCategory={setCategory} setCurrentIndex={setCurrentIndex} />
              <CloseButton onClose={onClose} label={t.galleryPage.closeButton || 'Close'} />
            </div>
            <ImageViewer images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

            <div className="flex items-center justify-between gap-4 mt-4">
              <ProjectDetails project={project} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
