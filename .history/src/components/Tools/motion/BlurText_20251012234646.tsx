// src/components/Tools/motion/BlurText.tsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, Transition, Easing } from "motion/react";

type BlurTextProps = {
  text: string | React.ReactNode;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const isString = typeof text === "string";

  // Prepare segments only if text is string
  const segments: (string | React.ReactNode)[] = useMemo(() => {
    if (!isString) return [text];
    return animateBy === "words" ? (text as string).split(" ") : (text as string).split("");
  }, [text, isString, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5
      },
      { filter: "blur(0px)", opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  // Shared keyframes for all spans
  const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap`}
      style={{
        // Prevent mobile horizontal glitch during transforms
        overflowX: "hidden"
      }}
    >
      {segments.map((segment, index) => {
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: isString ? (index * delay) / 1000 : 0,
          ease: easing
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === segments.length - 1 ? onAnimationComplete : undefined}
            className="transform-gpu"
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity"
            }}
          >
            {/* For strings, preserve spacing. For ReactNode, render directly. */}
            {isString ? (segment === " " ? "\u00A0" : segment) : segment}
            {isString && animateBy === "words" && index < segments.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
