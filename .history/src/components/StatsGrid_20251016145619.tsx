import { motion } from "framer-motion";
import React from "react";
import CountUp from "./Tools/motion/CountUp";

type Stat = {
  value: string;
  suffix?: string;
  label: string;
};

type StatsGridProps = {
  stats: Stat[];
};

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <motion.div
      className="grid md:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-5xl font-bold dark:text-teal-400">
            <CountUp
              from={0}
              to={parseInt(stat.value.replace(/,/g, ""))}
              separator=","
              duration={1.5}
              className="text-5xl font-bold text-white dark:text-teal-400"
            />
            {stat.suffix && <span className="text-5xl font-bold">{stat.suffix}</span>}
          </p>
          <p className="text-teal-100 dark:text-gray-400 text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;
