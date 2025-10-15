import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    // تشغيل رسم الـ path أول ما السكشن يظهر
    controls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.8, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center
                 bg-gradient-to-br from-slate-50 via-white to-teal-50
                 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Building Your <span className="text-teal-600 dark:text-teal-400">Dreams</span> Into Reality
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Dar El-Meamar is your trusted partner in construction excellence.
              We transform visions into architectural masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium text-lg
                           dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400"
              >
                Start Your Project
              </button>
              <button
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-all font-medium text-lg
                           dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right visual (placeholder block) */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700
                            dark:from-teal-600 dark:to-teal-800 shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Blueprint SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        {/* Main curved path */}
        <motion.path
          d="M 80 650 C 380 580, 720 700, 1200 560"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
          className="text-teal-600/60 dark:text-teal-400/50"
        />
        {/* Vertical guide lines */}
        <motion.path
          d="M 220 200 L 220 780"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
          className="text-teal-600/40 dark:text-teal-400/30"
        />
        <motion.path
          d="M 980 160 L 980 820"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          className="text-teal-600/40 dark:text-teal-400/30"
        />
        {/* Dashed architectural box */}
        <motion.rect
          x="360"
          y="280"
          width="320"
          height="220"
          rx="12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
          className="text-teal-600/50 dark:text-teal-400/40"
        />
        {/* Small detail ticks */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1={380 + i * 70}
            y1={520}
            x2={380 + i * 70}
            y2={540}
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 1 + i * 0.15 }}
            className="text-teal-600/50 dark:text-teal-400/40"
          />
        ))}
      </svg>
    </section>
  );
};

export default Hero;
