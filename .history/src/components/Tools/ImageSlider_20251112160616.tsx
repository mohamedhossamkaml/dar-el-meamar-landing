import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ImageSliderProps = {
  images: string[];
  interval?: number; // ms
  transitionDuration?: number; //
  className?: string;
  ariaLabel?: string;
  pauseOnHover?: boolean;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 4000,
  transitionDuration = 1,
  className = '',
  ariaLabel = 'Background image slider',
  pauseOnHover = true,
}) => {
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const scheduleNext = () => {
      timeoutRef.current = window.setTimeout(() => {
        if (pauseOnHover && hoverRef.current) {
          scheduleNext(); //
          return;
        }
        setIndex((i) => (i + 1) % images.length);
        scheduleNext(); //
      }, interval);
    };

    scheduleNext();

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [images, interval, pauseOnHover]);

  if (!images || images.length === 0) return null;

  // Motion variants
  const variants = {
    enter: { opacity: 0, scale: 1.03, y: 8 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.97, y: -6 },
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      aria-label={ariaLabel}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onTouchStart={() => pauseOnHover && (hoverRef.current = true)}
      onTouchEnd={() => pauseOnHover && (hoverRef.current = false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          loading={index === 0 ? 'eager' : 'lazy'}
          className="
          absolute select-none  inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0, willChange: 'opacity, transform' }}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          onContextMenu={(e) => e.preventDefault()}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>
    </div>
  );
};

export default ImageSlider;
