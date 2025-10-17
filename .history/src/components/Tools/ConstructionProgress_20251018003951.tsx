import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ConstructionProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-4 p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Construction Progress
        </span>
        <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-inner">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated stripes */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)',
          }}
          animate={{
            x: [0, 20],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glowing effect */}
        <motion.div
          className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/20"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: progress > 10 ? '64px' : '0px' }}
        />
      </div>

      {/* Mini construction icons */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
          <span>Building in progress...</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-4 bg-teal-500/50 rounded-sm"
              animate={{
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;
