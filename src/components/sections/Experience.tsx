'use client';

import { motion } from 'framer-motion';

interface Experience {
  type: 'education' | 'work';
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  icon: string;
}

const experiences: Experience[] = [
  {
    type: 'education',
    title: 'Bachelor of Information Technology',
    organization: 'Purbanchal University',
    period: '2021 - 2025',
    description:
      'Pursuing degree with focus on web development and emerging technologies.',
    achievements: [
      'Strong academic performance in programming courses',
      'Active participant in tech workshops and seminars',
      'Developed multiple full-stack projects as part of coursework',
    ],
    icon: '🎓',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Self-Employed / Freelance',
    period: '2022 - Present',
    description:
      'Building production-ready web applications with focus on user experience and clean code architecture.',
    achievements: [
      '9+ projects delivered to completion',
      'Specialization in Next.js, React, and Node.js',
      'Strong emphasis on responsive design and performance optimization',
    ],
    icon: '💻',
  },
  {
    type: 'work',
    title: 'Junior Developer (Contract)',
    organization: 'Multiple Organizations',
    period: '2023 - 2024',
    description:
      'Collaborated on client projects, implementing features and fixing bugs across the stack.',
    achievements: [
      'Built responsive UI components',
      'Implemented RESTful APIs',
      'Improved application performance by 30%',
    ],
    icon: '🚀',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Experience & Education
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
      >
        My journey through education and professional growth
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: '-100px' }}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline marker with Pulse Effect */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-16 h-16 rounded-full bg-purple-500/20"
                />
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-950 border-4 border-purple-500 flex items-center justify-center text-lg shadow-xl relative z-10">
                  {experience.icon}
                </div>
              </div>

              {/* Content card with Deep Glassmorphism */}
              <div
                className="md:w-1/2 p-8 rounded-2xl 
                           bg-white/80 dark:bg-gray-900/40 
                           backdrop-blur-xl border border-white/20 dark:border-gray-800 
                           shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
                           hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] 
                           hover:border-purple-500/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-md text-purple-600 dark:text-purple-400 font-bold tracking-tight">
                      {experience.organization}
                    </p>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-xs font-bold text-purple-700 dark:text-purple-300 mb-4">
                  {experience.period}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {experience.achievements && (
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 items-start"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center text-[10px] text-purple-500 font-bold">
                          ✓
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          Want to know more about my journey?
        </p>
        <a
          href="/bibash.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          Download My Resume
        </a>
      </motion.div>
    </section>
  );
}
