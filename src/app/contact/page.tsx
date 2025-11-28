'use client';

import { useForm } from 'react-hook-form';
import { MdEmail, MdLocationOn, MdEventAvailable } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';

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

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://formspree.io/f/xrbdkorr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="contact container py-10">
      {/* Heading */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-4"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let&apos;s Connect
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-sm italic text-center md:text-md max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Every project I build is more than just code — it&apos;s a reflection of resilience,
        curiosity, and a drive to create meaningful digital experiences. If my{' '}
        <span className="font-bold">work</span> resonates with you, I&apos;d love to connect.
      </motion.p>

      {/* Contact details */}
      <motion.div
        className="flex flex-col md:flex-row justify-center mt-6 gap-6 font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.span className="flex gap-2 items-center" variants={itemVariants}>
          <MdEmail /> bibashpoudel93@gmail.com
        </motion.span>
        <motion.span className="flex gap-2 items-center" variants={itemVariants}>
          <MdLocationOn /> Lokanthali, Bhaktapur
        </motion.span>
        <motion.span className="flex gap-2 items-center" variants={itemVariants}>
          <MdEventAvailable /> Open to full time roles & collaborations
        </motion.span>
      </motion.div>

      {/* Contact form + Map */}
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-8">
        {/* Map */}
        <motion.div
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5898.333113809252!2d85.3555476!3d27.671592600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1763817793561!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Form with staggered animation */}
        <motion.div
          className="w-full md:w-1/2 rounded-lg p-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
            <motion.div variants={itemVariants}>
              Your Name: <br/>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="border p-2 mt-3 rounded w-[100%]"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants}>
              Your Email: <br />
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                placeholder="Your Email"
                className="border p-2 rounded mt-3 w-[100%]"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants}>
              Your Message: <br />
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Your Message"
                rows={5}
                className="border p-2 mt-3 rounded w-[100%]"
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.div>

            {status && (
              <motion.p
                className="text-center text-sm mt-2"
                variants={itemVariants}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}