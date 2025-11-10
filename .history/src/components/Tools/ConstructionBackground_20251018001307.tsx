import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
  const controls = useAnimation();
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

