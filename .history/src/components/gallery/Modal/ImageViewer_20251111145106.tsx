import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Props {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
}

const ImageViewer: React.FC<Props> = ({ images, currentIndex, setCurrentIndex }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, setCurrentIndex]);

  // ✅ دعم التنقل بالكيبورد
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, handlePrev, handleNext]);

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

      {/* أزرار التنقل العادية */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
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
            onClick={() => setIsFullscreen(false)} // ✅ إغلاق بالضغط خارج الصورة
          >
            <motion.img
              src={images[currentIndex]}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط على الصورة نفسها
              onContextMenu={(e) => e.preventDefault()}
            />

            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen"
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
            >
              <X size={20} />
            </button>

            {/* Prev / Next Buttons في fullscreen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  aria-label="Previous image fullscreen"
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-3"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  aria-label="Next image fullscreen"
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
