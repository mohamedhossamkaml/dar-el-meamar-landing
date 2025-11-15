// src/components/ui/ImageLightbox.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'react-feather';
interface Props {
  open: boolean;
  src: string | null;
  alt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  showArrows?: boolean;
}

export default function ImageLightbox({ open, src, alt = '', onClose, onPrev, onNext, showArrows = false }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div
            key="content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[95vw] max-h-[95vh] w-full"
          >
            {showArrows && (
              <button
                onClick={onPrev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 dark:bg-white  text-white dark:text-black hover:bg-black/60"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="block mx-auto max-w-full max-h-[85vh] object-contain rounded"
              onContextMenu={(e) => e.preventDefault()}
            />

            {showArrows && (
              <button
                onClick={onNext}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 dark:bg-white  text-white dark:text-black hover:bg-black/60"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-2 top-2 z-20 p-2 rounded-full bg-red-500  text-white hover:bg-red-600"
            >
              <X size={15} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
