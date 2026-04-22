'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Award, Target, ArrowRight } from 'lucide-react';

export default function Resume() {
  const resumeFeatures = [
    {
      icon: Target,
      title: 'Technical Skills',
      description:
        "Complete list of languages, frameworks, and tools I've mastered",
    },
    {
      icon: Award,
      title: 'Professional Experience',
      description:
        'Detailed work history with achievements and project outcomes',
    },
    {
      icon: FileText,
      title: 'Education',
      description: 'Academic background and certifications',
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/10 blur-[120px] rounded-full -z-10" />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-block relative">
            <motion.div
              className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/20"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FileText className="w-12 h-12 text-white" />
            </motion.div>
            {/* Pulsing ring */}
            <motion.div 
              className="absolute inset-0 rounded-3xl border-2 border-purple-500/30"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Resume</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A comprehensive blueprint of my technical evolution, professional milestones, and the values I bring to every line of code.
          </p>

          <motion.a
            href="/bibash.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-2xl shadow-2xl transition-all group"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            Download PDF Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <motion.h2
          className="text-sm uppercase tracking-[0.3em] font-black text-center text-purple-600 dark:text-purple-400 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
        >
          Core Architecture
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {resumeFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/5 shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: false, margin: "-50px" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats with Premium Look */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Experience', value: '1+' },
            { label: 'Projects', value: '9+' },
            { label: 'Tech Stack', value: '20+' },
            { label: 'Success Rate', value: '100%' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative p-8 rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/5 text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
              viewport={{ once: false }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest font-black text-gray-500 dark:text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alternative Contact */}
      <motion.div
        className="max-w-2xl mx-auto px-6 mt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        viewport={{ once: false }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Looking for a more direct interaction?
        </p>
        <motion.a
          href="/contact"
          whileHover={{ x: 10 }}
          className="inline-flex items-center gap-4 text-2xl font-black text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          Let&apos;s talk about your next project <ArrowRight className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
}
