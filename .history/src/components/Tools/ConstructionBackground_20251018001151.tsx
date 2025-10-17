import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

type AnimatedRevealProps = {
  children?: React.ReactNode;
  className?: string;
  /** optional variants to override */
  variants?: Record<string, any>;
  /** controls duration of the parent reveal animation */
  duration?: number;
  /** called when parent animation completes */
  onRevealComplete?: () => void;
};

/**
 * AnimatedReveal
 * - a small, reusable wrapper that runs an entrance animation and exposes
 *   a promise-based signal (via controls.start) to know when the animation
 *   finished. Child rendering can be gated by that signal.
 */
export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  className = '',
  variants,
  duration = 0.8,
  onRevealComplete,
}) => {
  const controls: AnimationControls = useAnimation();
  const [revealed, setRevealed] = useState(false);

  const defaultVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration } },
  } as const;

  useEffect(() => {
    // start the parent animation; when it resolves we mark as revealed
    controls.start('visible').then(() => {
      setRevealed(true);
      onRevealComplete?.();
    });
  }, [controls, duration, onRevealComplete]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants ?? defaultVariants}
    >
      {/* render children immediately (layout, header, etc.) */}
      {children}

      {/* render a data attribute to indicate reveal state (useful for styling) */}
      <div data-revealed={revealed} />
    </motion.div>
  );
};

type ConstructionSVGProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  className?: string;
};

/**
 * ConstructionSVG
 * - simple, lightweight SVG illustration. This component is intentionally
 *   small so it can be mounted lazily after the parent reveal completes.
 */
export const ConstructionSVG: React.FC<ConstructionSVGProps> = ({
  size = '100%',
  className = '',
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Simple crane + building silhouette */}
    <rect x="6" y="60" width="36" height="54" rx="2" fill="#0f172a" opacity="0.9" />
    <rect x="48" y="46" width="28" height="68" rx="2" fill="#0f172a" opacity="0.85" />
    <rect x="80" y="34" width="20" height="80" rx="2" fill="#0f172a" opacity="0.8" />
    <g transform="translate(120,10)">
      <rect x="0" y="60" width="64" height="34" rx="2" fill="url(#g1)" />
      <path d="M10 60 L10 18 L54 10" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="54" cy="10" r="4" fill="#065f46" />
    </g>
  </svg>
);

/**
 * ConstructionBackground
 * - High-level component that uses AnimatedReveal to run a parent animation
 *   and only mounts the ConstructionSVG after that animation completes.
 * - Props:
 *   - enabled: whether to mount the background (default true)
 *   - svgClassName: optional class applied to the SVG
 */
const ConstructionBackground: React.FC<{ enabled?: boolean; svgClassName?: string }> = ({
  enabled = true,
  svgClassName = 'max-w-full h-auto',
}) => {
  const [showSVG, setShowSVG] = useState(false);

  if (!enabled) return null;

  return (
    <AnimatedReveal
      className="absolute inset-0 pointer-events-none"
      duration={0.9}
      onRevealComplete={() => setShowSVG(true)}
    >
      {/* Place the SVG absolutely so it doesn't affect layout */}
      {showSVG && (
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <ConstructionSVG size={220} className={svgClassName} />
        </div>
      )}
    </AnimatedReveal>
  );
};

export default ConstructionBackground;
import { motion } from 'framer-motion';

const ConstructionBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-3">
        <defs>
          <pattern id="construction-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-teal-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#construction-grid)" />
      </svg>

      {/* Floating Tools Layer */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Hammer */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" className="text-teal-600">
            <path d="M14 7l-7 7-2-2 7-7 2 2z" fill="currentColor" opacity="0.6" />
            <rect x="15" y="3" width="6" height="4" rx="1" fill="currentColor" />
            <circle cx="4" cy="18" r="3" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Hard Hat */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <svg width="55" height="55" viewBox="0 0 24 24" className="text-yellow-500">
            <path d="M12 3c-4 0-7 3-7 7v2h14v-2c0-4-3-7-7-7z" fill="currentColor" opacity="0.6" />
            <rect x="3" y="12" width="18" height="3" rx="1" fill="currentColor" opacity="0.8" />
            <circle cx="12" cy="8" r="1" fill="white" />
          </svg>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-500 rounded-full"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i % 5) * 20}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Building Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around opacity-5 dark:opacity-3">
        {[80, 120, 70, 100, 85].map((height, i) => (
          <motion.div
            key={i}
            className="bg-teal-700 rounded-t-sm"
            style={{ width: '15%', height: `${height}px` }}
            animate={{
              height: [`${height * 0.7}px`, `${height}px`, `${height * 0.7}px`],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          >
            <div className="grid grid-cols-2 gap-0.5 p-1">
              {[...Array(Math.floor(height / 20))].map((_, j) => (
                <motion.div
                  key={j}
                  className="bg-yellow-400 h-1.5 rounded-sm"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: j * 0.1 + i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Crane */}
      <motion.div
        className="absolute top-10 right-32 opacity-8 dark:opacity-5"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="120" height="180" viewBox="0 0 120 180" className="text-teal-700">
          <rect x="58" y="50" width="4" height="130" fill="currentColor" />
          <rect x="10" y="48" width="100" height="3" fill="currentColor" />
          <rect x="54" y="44" width="12" height="9" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ConstructionBackground;
