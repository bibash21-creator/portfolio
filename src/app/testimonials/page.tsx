'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Project Manager',
    company: 'Tech Startup',
    text: 'Bibash delivered a high-quality weather dashboard that exceeded our expectations. Clean code, excellent communication, and a keen eye for UX design. Highly recommend!',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Education Platform',
    text: 'Working with Bibash on the school management system was a pleasure. He is thorough, proactive, and genuinely cares about building products that users love.',
    rating: 5,
    image: '👩‍💻'
  },
  {
    name: 'Michael Ross',
    role: 'CTO',
    company: 'Healthcare Solutions',
    text: 'Bibash developed our hospital management system with impressive attention to detail and performance optimization. A developer you can trust.',
    rating: 5,
    image: '👨‍🏫'
  },
  {
    name: 'Emma Davis',
    role: 'UX Lead',
    company: 'Design Studio',
    text: 'Great eye for design and implementation. Bibash translates complex requirements into elegant, user-friendly interfaces with clean code.',
    rating: 5,
    image: '👩‍🎨'
  },
  {
    name: 'James Wilson',
    role: 'Product Owner',
    company: 'SaaS Company',
    text: 'Reliable, skilled, and always delivers on time. Bibash is the kind of developer every team needs. Looking forward to future collaborations!',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Lisa Park',
    role: 'Senior Developer',
    company: 'Tech Consulting',
    text: 'Impressive full-stack capabilities and a passion for learning. Bibash brings fresh ideas and solid technical execution to every project.',
    rating: 5,
    image: '👩‍💻'
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          What Others Say
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feedback from clients and collaborators about working with me on projects.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-3xl">{testimonial.image}</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at <span className="font-medium">{testimonial.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          My Commitment
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '✓', title: 'Quality Code', desc: 'Well-structured, maintainable, and tested code' },
            { icon: '⏱️', title: 'Timely Delivery', desc: 'Meets deadlines while maintaining quality standards' },
            { icon: '🤝', title: 'Communication', desc: 'Regular updates and transparent collaboration' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          Ready to work together?
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}
