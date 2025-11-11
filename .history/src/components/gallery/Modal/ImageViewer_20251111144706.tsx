import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Props {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
}

const ImageViewer: React.FC<Props> = ({ images, currentIndex, setCurrentIndex }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrev = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const handleNext = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="relative mb-6 flex items-center justify-center">
      {images.length > 0 && (
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full max-h-[60vh] object-cover rounded-md cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsFullscreen(true)}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* الصورة بحجم كامل */}
            <motion.img
              src={images[currentIndex]}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
            >
              <X size={20} />
            </button>

            {/* Prev / Next Buttons في fullscreen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-3"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-3"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageViewer;
