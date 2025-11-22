'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Modern Calculator App',
    status: 'Completed',
    image: '/calculator.png',
    tagline: 'Precision meets simplicity',
    description:
      'A sleek, responsive calculator built to explore modular UI design and arithmetic logic.',
    tech: ['HTML5', 'CSS3', 'JS'],
    live: '#',
    github: '#'
  },
  {
    title: 'Recipe Page App',
    status: 'Completed',
    image: '/recipe.png',
    tagline: 'Deliciously organized',
    description:
      'A recipe browsing interface with clean layout and dynamic filtering — built for clarity and UX.',
    tech: ['HTML5', 'CSS3'],
    live: '#',
    github: '#'
  },
  {
    title: 'School Management System',
    status: 'Ongoing',
    image: '/sms.png',
    tagline: 'Structure for learning',
    description:
      'A fullstack CRUD system to manage students, teachers, and classes — built with backend fundamentals.',
    tech: ['HTML5', 'CSS3', 'JS','Tailwind CSS'],
    live: '#',
    github: '#'
  },
  {
    title: 'Hospital Management System',
    status: 'Ongoing',
    image: '/hms.png',
    tagline: 'Care meets code',
    description:
      'A patient and staff management system designed to streamline hospital workflows and data handling.',
    tech: ['JSX', 'CSS3', 'JS','React'],
    live: '#',
    github: '#'
  }
]

export default function ProjectSection() {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Ongoing'>('All')

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.status === filter)

  return (
    <section className="px-6 md:px-20 py-16">
      <h1 className="text-4xl font-extrabold md:text-5xl text-center mb-5">🚀 My Projects</h1>
      <p className="mb-12 text-center text-gray-600 max-w-3xl mx-auto">
        Each project here reflects not just technical execution, but a philosophy of resilience,
        clarity, and modular growth. Whether it's building Kaarya to empower mindful productivity or
        crafting animated interfaces that tell a story, I approach every challenge with curiosity
        and emotional depth.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {['All', 'Completed', 'Ongoing'].map((status) => (
          <Button
            key={status}
            variant={filter === status ? 'default' : 'outline'}
            onClick={() => setFilter(status as any)}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-md hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              width={400}
              height={300}
              alt={`Image of ${project.title}`}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-indigo-600">{project.title}</h2>
            <p
              className={`text-sm font-medium mb-1 ${
                project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
              }`}
            >
              {project.status === 'Completed' ? 'Completed' : 'Ongoing'}
            </p>
            <p className="text-sm italic text-gray-500 mb-2">{project.tagline}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}