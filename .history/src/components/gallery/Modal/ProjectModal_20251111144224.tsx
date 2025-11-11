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

            <div className="mb-2 flex items-center justify-between gap-2">
              {/* Category Buttons*/}
              <CategoryButtons
                category={category}
                setCategory={setCategory}
                t={t}
                setCurrentIndex={setCurrentIndex}
              />

              {/* Close Button */}
              <CloseButton
                onClose={onClose}
                label={t.galleryPage.modal.closeButton || 'Close'}
                className=" h-full "
              />
            </div>

            {/* Image Viewer */}
            <ImageViewer images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

            {/* Project Details */}
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
