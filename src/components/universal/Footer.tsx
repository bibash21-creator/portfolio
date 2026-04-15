'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full relative mt-24">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 mb-10 rounded-[3rem] 
                   bg-white/80 dark:bg-gray-900/40 backdrop-blur-3xl 
                   border border-white/20 dark:border-white/5 shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          {/* 1. About / Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-4">
              Bibash Poudel
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              Transforming complex visions into seamless, premium digital experiences through purposeful code and design.
            </p>
            <p className="text-sm font-bold text-gray-400 dark:text-gray-500 pt-4">
              © {year} · Crafted with passion
            </p>
          </motion.div>

          {/* 2. Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] font-black text-gray-900 dark:text-white">
              Sitemap
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:pl-2 font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Connect & Interaction */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.2em] font-black text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start gap-x-6">
              {[
                { icon: FaFacebook, href: 'https://www.facebook.com/bibash.poudel.92578/', color: 'hover:text-blue-600' },
                { icon: FaInstagram, href: 'https://www.instagram.com/', color: 'hover:text-pink-500' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/bibash-poudel-23204338a/', color: 'hover:text-blue-700' },
                { icon: FaGithub, href: 'https://github.com/bibash21-creator', color: 'hover:text-gray-900 dark:hover:text-white' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2 }}
                  className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-100 dark:border-white/5">
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                Available for opportunities
              </p>
              <a 
                href="mailto:bibashpoudel93@gmail.com"
                className="text-purple-600 dark:text-purple-400 font-bold hover:underline underline-offset-4"
              >
                bibashpoudel93@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Absolute Bottom Label */}
      <div className="pb-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 dark:text-gray-600 font-black">
          Designed & Built in Kathmandu · Nepal
        </p>
      </div>
    </footer>
  );
}

