'use client';

import Image from 'next/image';
import GitHubStats from '@/components/GitHubStats';
import { motion, Variants } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  } as const;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Profile Picture Side */}
          <motion.div
            className="md:w-1/2 relative group"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] mx-auto">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20 -z-10" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500 to-cyan-500 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20 -z-10" />
              
              <Image
                src="/bibash.png"
                alt="Bibash Poudel"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-2xl border-4 border-white/10 dark:border-black/10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            className="md:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">
                About <span className="text-purple-600 dark:text-purple-400">Me</span>
              </h1>
              <div className="w-20 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight"
              variants={itemVariants}
            >
              Building digital bridges between <span className="italic">imagination</span> and <span className="bg-purple-100 dark:bg-purple-900/40 px-2 rounded">reality</span>.
            </motion.h2>

            <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed" variants={itemVariants}>
              My journey as a developer is fueled by a passion for solving complex problems and a relentless curiosity for new technologies. From full-stack web applications to AI-integrated systems, I focus on creating products that are not just functional, but emotionally resonant.
            </motion.p>

            {/* Strengths Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {[
                { label: 'Problem Solver', color: 'from-purple-600 to-blue-500' },
                { label: 'UI/UX Enthusiast', color: 'from-blue-600 to-cyan-500' },
                { label: 'Clean Code Advocate', color: 'from-cyan-600 to-teal-500' },
                { label: 'Lifelong Learner', color: 'from-teal-600 to-green-500' },
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${strength.color} p-[1px] rounded-xl overflow-hidden`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white dark:bg-gray-900 px-6 py-4 rounded-[11px] h-full flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                      {strength.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Context */}
            <motion.div className="flex flex-col gap-6 pt-4 border-t border-gray-200 dark:border-white/10" variants={itemVariants}>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-black text-purple-600 dark:text-purple-400 mb-2">Interests</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  AI/ML, Emotional Design, Modular Architecture & High-Performance Web.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-black text-pink-600 dark:text-pink-400 mb-2">Hobbies</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Exploring tech stacks, Journaling, F1, and Football.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* GitHub Stats section as a separate block */}
      <motion.div 
        className="mt-24 border-t border-gray-100 dark:border-white/5 pt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <GitHubStats />
      </motion.div>
    </section>
  );
}
