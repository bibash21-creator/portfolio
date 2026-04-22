'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiFolder, FiDownload, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import HeroScene from '@/components/ui/HeroScene';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Background Scene */}
      <HeroScene />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase"
          >
            Digital Architect & Storyteller
          </motion.p>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] mb-8"
          >
            I am <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              Bibash Poudel
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl leading-relaxed mb-10"
          >
            Crafting premium full-stack digital experiences where <span className="text-gray-900 dark:text-white font-bold">logic meets emotion</span>. Specialist in Next.js, AI integration, and immersive 3D web design.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5"
          >
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-7 text-lg font-bold shadow-xl shadow-purple-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/projects">
                Explore My Work <FiFolder className="ml-3" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-7 text-lg font-bold border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                Let&apos;s Talk <FiMail className="ml-3" />
              </Link>
            </Button>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-2"
            >
              <FiDownload /> Get Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
