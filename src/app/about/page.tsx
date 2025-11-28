'use client';

import OrbitingSkillsScene from "@/app/helpers/Animateone";
import { motion } from "framer-motion";

export default function About() {
  // Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container flex flex-col md:flex-row about px-6 md:px-20 py-12 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Intro animation for OrbitingSkillsScene */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <OrbitingSkillsScene />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 sm:text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-bold mb-4 sm:text-center"
          variants={itemVariants}
        >
          I'm a passionate developer who loves creating meaningful digital products.
        </motion.h2>

        <motion.p
          className="text-md md:text-lg mb-2"
          variants={itemVariants}
        >
          My coding journey began in college, and I instantly got hooked on building interactive web apps.
        </motion.p>

        {/* Strengths */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"
          variants={containerVariants}
        >
          {[
            "Strong Problem-Solving Mindset",
            "Attention to detail and clean UI design",
            "Always learning and experimenting",
            "Love for performance optimization",
          ].map((strength, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md shadow-md font-semibold"
              variants={itemVariants}
            >
              {strength}
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Touch */}
        <motion.div className="personal_touch space-y-2" variants={itemVariants}>
          <h2 className="text-xl font-semibold">Hobbies:</h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Exploring tech, journaling, watching WWE, F1, Football and experimenting with animations.
          </p>

          <h2 className="text-xl font-semibold mt-4">Interests:</h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Full-stack development, AI/ML, modular architecture, emotional storytelling through design, and building tools that reflect resilience.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}