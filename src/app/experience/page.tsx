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
    description: 'Pursuing degree with focus on web development and emerging technologies.',
    achievements: [
      'Strong academic performance in programming courses',
      'Active participant in tech workshops and seminars',
      'Developed multiple full-stack projects as part of coursework'
    ],
    icon: '🎓'
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Self-Employed / Freelance',
    period: '2022 - Present',
    description: 'Building production-ready web applications with focus on user experience and clean code architecture.',
    achievements: [
      '9+ projects delivered to completion',
      'Specialization in Next.js, React, and Node.js',
      'Strong emphasis on responsive design and performance optimization'
    ],
    icon: '💻'
  },
  {
    type: 'work',
    title: 'Junior Developer (Contract)',
    organization: 'Multiple Organizations',
    period: '2023 - 2024',
    description: 'Collaborated on client projects, implementing features and fixing bugs across the stack.',
    achievements: [
      'Built responsive UI components',
      'Implemented RESTful APIs',
      'Improved application performance by 30%'
    ],
    icon: '🚀'
  }
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-1/2 w-12 h-12 rounded-full bg-white dark:bg-black border-4 border-purple-500 transform -translate-x-1/2 flex items-center justify-center text-lg z-10 shadow-lg">
                {experience.icon}
              </div>

              {/* Content card */}
              <div className="md:w-1/2 p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{experience.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                      {experience.organization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                  {experience.period}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>

                {experience.achievements && (
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-purple-500 font-bold">✓</span>
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
