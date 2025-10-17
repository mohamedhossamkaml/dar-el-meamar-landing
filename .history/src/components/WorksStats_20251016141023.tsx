import React from 'react'

function WorksStats() {
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