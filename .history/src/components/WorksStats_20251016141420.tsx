// components/StatsGrid.tsx
import { motion } from "framer-motion";
import { fadeInLeft, scaleIn, fadeInUp, fadeInRight, fadeIn, staggerContainer } from "../utils/motion";
import React from "react";

type Stat = {
  value: string;
  suffix?: string;
  label: string;
};

type StatsGridProps = {
  stats: Stat[];
};

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const getVariant = (idx: number) => {
    switch (idx) {
      case 0:
        return fadeInLeft;
      case 1:
        return scaleIn;
      case 2:
        return fadeInUp;
      default:
        return fadeInRight;
    }
  };

  return (
    <motion.div className="grid md:grid-cols-4 gap-8 text-center" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {stats.map((stat, idx) => (
        <motion.div key={idx} variants={getVariant(idx)} className="space-y-2">
          <motion.p variants={scaleIn} className="text-5xl font-bold dark:text-teal-400">
            {stat.value}
            {stat.suffix && <span className="text-5xl font-bold">{stat.suffix}</span>}
          </motion.p>
          <motion.p variants={fadeIn} className="text-teal-100 dark:text-gray-400 text-lg">
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;
