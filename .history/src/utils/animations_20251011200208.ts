import { Variants } from 'framer-motion';

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const zoomIn: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
export const textVariant: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
visible: {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.6,
    ease: 'easeOut',
    type: 'tween',
  },
}
};