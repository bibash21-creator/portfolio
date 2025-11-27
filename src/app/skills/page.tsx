'use client';

import { motion } from 'framer-motion';

export default function SkillTimeline() {
  const timeline = [
    {
      year: "2021",
      title: "Foundations",
      skills: ["HTML", "CSS", "JavaScript"],
      note: "Started exploring the web and building static pages."
    },
    {
      year: "2022",
      title: "Frontend Frameworks",
      skills: ["React", "Tailwind CSS", "Git"],
      note: "Built my first interactive apps and learned component-based design."
    },
    {
      year: "2023",
      title: "Fullstack Exploration",
      skills: ["Next.js", "Node.js", "MongoDB", "Express"],
      note: "Dove into backend fundamentals and built CRUD apps."
    },
    {
      year: "2024",
      title: "Design & Animation",
      skills: ["Framer Motion", "shadcn/ui", "Lucide React"],
      note: "Focused on storytelling, polish, and user experience."
    },
    {
      year: "2025",
      title: "Creative Coding & 3D",
      skills: ["React Three Fiber", "Modular Architecture", "Emotional Storytelling"],
      note: "Blending technical depth with visual creativity and resilience."
    }
  ];

  // Variants for timeline items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skill Timeline
      </motion.h1>

      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative pl-6 border-l-4 border-indigo-500"
            variants={itemVariants}
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <h3 className="text-xl font-semibold">
              {item.year} — {item.title}
            </h3>
            <p className="mt-1">{item.note}</p>

            <motion.div
              className="flex flex-wrap gap-2 mt-3"
              variants={containerVariants}
            >
              {item.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  variants={skillVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}