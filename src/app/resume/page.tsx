'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Award, Target } from 'lucide-react';

export default function Resume() {
  const resumeFeatures = [
    {
      icon: Target,
      title: 'Technical Skills',
      description: 'Complete list of languages, frameworks, and tools I\'ve mastered',
    },
    {
      icon: Award,
      title: 'Professional Experience',
      description: 'Detailed work history with achievements and project outcomes',
    },
    {
      icon: FileText,
      title: 'Education',
      description: 'Academic background and certifications',
    },
  ];

  return (
    <section className="min-h-screen py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-block">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            My Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Comprehensive overview of my skills, experience, and professional achievements. 
            Download to see detailed information about my background.
          </p>

          {/* Main Download Button */}
          <motion.a
            href="/bibash.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="bibash.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-lg"
          >
            <Download className="w-6 h-6" />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What's Inside
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {resumeFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Years of Experience', value: '1+' },
            { label: 'Projects Completed', value: '9+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-900/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Alternative Contact */}
      <motion.div
        className="max-w-2xl mx-auto px-6 mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Can't open PDF? Let's connect instead!
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}
