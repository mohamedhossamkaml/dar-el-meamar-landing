import React from 'react'
import { useLanguage } from '../context/LanguageContext';

function WorksStats() {
    const { t } = useLanguage();

    // Fetch stats from translation file
    const stats = [
      { value: t.works.stats.projects, label: t.works.labels.projects, suffix: t.works.suffix.projects },
      { value: t.works.stats.experience, label: t.works.labels.experience, suffix: t.works.suffix.experience },
      { value: t.works.stats.clients, label: t.works.labels.clients, suffix: t.works.suffix.clients },
      // { value: t.works.stats.awards, label: t.works.labels.awards,suffix:t.works.suffix.awards },
      { value: t.works.stats.Satisfaction, label: t.works.labels.Satisfaction, suffix: t.works.suffix.Satisfaction },
    ];
  return (
        <motion.div className="grid md:grid-cols-4 gap-8 text-center" variants={staggerContainer}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={
                idx === 0
                  ? fadeInLeft
                  : idx === 1
                    ? scaleIn
                    : idx === 2
                      ? fadeInUp
                      : fadeInRight
              }
              className="space-y-2"
            >
              <motion.p variants={scaleIn} className="text-5xl font-bold dark:text-teal-400">
                {stat.value}
                {/* <CountUp
                  from={0}
                  to={parseInt(stat.value.replace(/,/g, ""))}
                  separator=","
                  direction="up"
                  duration={1.5}
                  className="text-5xl font-bold text-white dark:text-teal-400"
                /> */}
                {stat.suffix && (
                  <span className="text-5xl  font-bold">{stat.suffix}</span>
                )}
              </motion.p>
              <motion.p variants={fadeIn} className="text-teal-100 dark:text-gray-400 text-lg">
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
  )
}

export default WorksStats