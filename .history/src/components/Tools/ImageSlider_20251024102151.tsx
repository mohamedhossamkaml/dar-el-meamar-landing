import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type ImageSliderProps = {
  images: string[];
  interval?: number; // ms
  transitionDuration?: number; // seconds
  className?: string;
  ariaLabel?: string;
  pauseOnHover?: boolean;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 4500,
  transitionDuration = 0.9,
  className = '',
  ariaLabel = 'Background image slider',
  pauseOnHover = true,
}) => {
  const [index, setIndex] = useState(0);
  const mounted = useRef(true);
  const hoverRef = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (!images || images.length <= 1) return;

    const tick = () => {
      setIndex((i) => (i + 1) % images.length);
    };

    const id = window.setInterval(() => {
      if (pauseOnHover && hoverRef.current) return;
      tick();
    }, interval);

    return () => {
      mounted.current = false;
      window.clearInterval(id);
    };
  }, [images, interval, pauseOnHover]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      aria-label={ariaLabel}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {images.map((src, i) => (
        <motion.img
          key={src + i}
          src={src}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            zIndex: i === index ? 0 : -1,
          }}
          initial={{ opacity: i === index ? 1 : 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
        />
      ))}
      {/* subtle overlay to preserve contrast */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 pointer-events-none" />
    </div>
  );
};

export default ImageSlider;
