"use client"

import { motion } from "framer-motion"

const skillTimeline = [
  {
    year: "2021",
    category: "Frontend",
    skills: [
      { name: "HTML", detail: "Semantic, accessible markup" },
      { name: "CSS", detail: "Responsive, modern layouts" },
      { name: "JavaScript", detail: "ES6+, modular patterns" },
      { name: "React", detail: "Hooks, context, reusable components" },
      { name: "Next.js", detail: "SSR, ISR, API routes" },
      { name: "Tailwind CSS", detail: "Utility-first, responsive design" },
    ],
  },
  {
    year: "2022",
    category: "Backend",
    skills: [
      { name: "Node.js", detail: "Event-driven architecture" },
      { name: "Express", detail: "REST APIs, middleware" },
      { name: "MongoDB", detail: "NoSQL, Atlas cloud" },
      { name: "SQL", detail: "Relational DB design" },
    ],
  },
  {
    year: "2023",
    category: "AI / ML",
    skills: [
      { name: "Python", detail: "Data pipelines & scripting" },
      { name: "TensorFlow", detail: "Deep learning models" },
      { name: "PyTorch", detail: "Flexible ML experimentation" },
      { name: "Scikit-learn", detail: "Classical ML algorithms" },
    ],
  },
  {
    year: "2024",
    category: "Design & Animation",
    skills: [
      { name: "Framer Motion", detail: "Micro-interactions & motion design" },
      { name: "shadcn/ui", detail: "Composable UI primitives" },
      { name: "Lucide React", detail: "Iconography system" },
    ],
  },
  {
    year: "2025",
    category: "Creative Coding",
    skills: [
      { name: "React Three Fiber", detail: "3D experiences in React" },
      { name: "Storytelling", detail: "Narrative-driven UI flows" },
      { name: "Modular Architecture", detail: "Scalable, reusable systems" },
    ],
  },
]

function SkillChip({ skill }: { skill: { name: string; detail: string } }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative px-4 py-2 rounded-full 
                 bg-purple-100 dark:bg-purple-900/40 
                 text-gray-900 dark:text-gray-100 text-sm cursor-pointer 
                 border border-purple-500/40 
                 transition-all duration-300 group"
    >
      {skill.name}
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                   px-3 py-2 rounded-lg text-xs 
                   bg-white dark:bg-black/70 
                   text-gray-900 dark:text-gray-100 
                   border border-purple-500/30 
                   shadow-lg backdrop-blur-md 
                   whitespace-nowrap pointer-events-none"
      >
        {skill.detail}
      </motion.div>
    </motion.div>
  )
}

export default function SkillsTimeline() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-20 
                   text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skill Journey
      </motion.h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 
                        bg-gradient-to-b from-purple-500 to-pink-500 
                        transform -translate-x-1/2" />

        <div className="flex flex-col gap-24">
          {skillTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Marker */}
              <div className="absolute left-1/2 w-6 h-6 rounded-full 
                              bg-purple-500 border-4 border-pink-500 
                              transform -translate-x-1/2 shadow-lg" />

              {/* Panel */}
              <div
                className="md:w-1/2 p-8 rounded-2xl 
                           bg-gray-50/90 dark:bg-gray-800/60 
                           backdrop-blur-lg border border-gray-200 dark:border-gray-700 
                           shadow-lg hover:shadow-xl 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {item.year} — {item.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, i) => (
                    <SkillChip key={i} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}