'use client';

import { useForm } from 'react-hook-form';
import { MdEmail, MdLocationOn, MdEventAvailable } from 'react-icons/md';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('https://formspree.io/f/xrbdkorr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="contact container py-24">
      {/* Heading */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-4"
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Let&apos;s Connect
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-sm italic text-center md:text-md max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={itemVariants}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Every project I build is more than just code — it&apos;s a reflection of
        resilience, curiosity, and a drive to create meaningful digital
        experiences. If my <span className="font-bold">work</span> resonates
        with you, I&apos;d love to connect.
      </motion.p>

      {/* Contact details Pills */}
      <motion.div
        className="flex flex-wrap justify-center mt-12 gap-4"
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={containerVariants}
        viewport={{ once: false }}
      >
        {[
          {
            icon: <MdEmail className="text-xl" />,
            text: 'bibashpoudel93@gmail.com',
          },
          {
            icon: <MdLocationOn className="text-xl" />,
            text: 'Lokanthali, Bhaktapur',
          },
          {
            icon: <MdEventAvailable className="text-xl" />,
            text: 'Open to Roles & Collabs',
          },
        ].map((item, idx) => (
          <motion.span
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex gap-3 items-center px-6 py-3 rounded-full 
                       bg-white/80 dark:bg-gray-900/40 backdrop-blur-md 
                       border border-white/20 dark:border-gray-800 
                       text-gray-900 dark:text-gray-100 font-medium 
                       shadow-sm hover:shadow-lg transition-all"
          >
            <span className="text-purple-600 dark:text-purple-400">
              {item.icon}
            </span>
            {item.text}
          </motion.span>
        ))}
      </motion.div>

      {/* Contact form + Map */}
      <div className="mt-16 flex flex-col-reverse md:flex-row gap-10">
        {/* Map */}
        <motion.div
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-gray-800 h-[450px]"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5898.333113809252!2d85.3555476!3d27.671592600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1763817793561!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.2) opacity(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-10 rounded-3xl 
                     bg-white/80 dark:bg-gray-900/40 
                     backdrop-blur-xl border border-white/20 dark:border-gray-800 
                     shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Your Name
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="How should I call you?"
                className="w-full px-5 py-4 rounded-2xl 
                           bg-gray-50/50 dark:bg-gray-800/50 
                           border border-gray-200 dark:border-gray-700 
                           focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 
                           outline-none transition-all duration-300
                           text-gray-900 dark:text-white"
              />
              {errors.name && (
                <span className="text-red-500 text-xs ml-1">
                  {errors.name.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Your Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Where should I reply?"
                className="w-full px-5 py-4 rounded-2xl 
                           bg-gray-50/50 dark:bg-gray-800/50 
                           border border-gray-200 dark:border-gray-700 
                           focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 
                           outline-none transition-all duration-300
                           text-gray-900 dark:text-white"
              />
              {errors.email && (
                <span className="text-red-500 text-xs ml-1">
                  {errors.email.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Your Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="What's on your mind?"
                rows={4}
                className="w-full px-5 py-4 rounded-2xl 
                           bg-gray-50/50 dark:bg-gray-800/50 
                           border border-gray-200 dark:border-gray-700 
                           focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 
                           outline-none transition-all duration-300
                           text-gray-900 dark:text-white resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-xs ml-1">
                  {errors.message.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-2xl text-white font-bold text-lg
                           shadow-lg shadow-purple-500/30 transition-all duration-300
                           ${
                             loading
                               ? 'bg-gray-400 cursor-not-allowed opacity-70'
                               : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02] active:scale-[0.98]'
                           }`}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? 'Sending Magic...' : 'Send Message'}
              </motion.button>
            </motion.div>

            {/* Feedback banners */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="mt-2 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-center font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  🚀 Message sent successfully! I&apos;ll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="mt-2 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-center font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  ⚠️ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
