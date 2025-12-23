"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "Modern Calculator App",
    status: "Completed",
    image: "/calculator.png",
    tagline: "Precision meets simplicity",
    description:
      "A sleek, responsive calculator built to explore modular UI design and arithmetic logic.",
    tech: ["HTML5", "CSS3", "JS"],
    live: "https://calculator-seven-sage-81.vercel.app/",
    github: "#",
    category: "Web App",
  },
  {
    title: "Hospital Management System",
    status: "Ongoing",
    image: "/hms.png",
    tagline: "Care meets code",
    description: "A patient and staff management system.",
    tech: ["JSX", "CSS3", "JS", "React"],
    live: "https://hospital-management-system-theta-jade.vercel.app/",
    github: "",
    category: "Full Stack",
  },
  {
    title: "Ticket Application",
    status: "Ongoing",
    image: "/tms.png",
    tagline: "We Care For You",
    description: "A ticket management system",
    tech: ["TailwindCSS", "Nextjs"],
    live: "https://ticketing-app-black.vercel.app/",
    github: "https://github.com/bibash21-creator/Ticketing_App",
    category: "Full Stack",
  },

  {
    title: "BIT Result Checker Application",
    status: "Completed",
    image: "/brc.png",
    tagline: "Track your exam progress",
    description:
      "A Streamlit Application for checking your BIT results with ML integration.",
    tech: ["Streamlit", "Pandas", "Machine Learning"],
    live: "https://bitresult079.streamlit.app/",
    github: "https://github.com/bibash21-creator/Result_Checker",
    category: "Data Science",
  },
  {
    title: "To-do List Application",
    status: "Completed",
    image: "/tdla.png",
    tagline: "Organize tasks, code clean—daily done right.",
    description:
      "Modern task management app with drag & drop, priorities, and analytics.",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "https://todo-gamma-mauve.vercel.app/",
    github: "https://github.com/bibash21-creator/Todo",
    category: "Productivity",
  },
  {
    title: "Recipe Page App",
    status: "Completed",
    image: "/recipe.png",
    tagline: "Deliciously organized",
    description:
      "A recipe browsing interface with clean layout and dynamic filtering — built for clarity and UX.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://recipe-page-rho-gold.vercel.app/",
    github: "#",
    category: "Web Design",
  },
  {
    title: "School Management System",
    status: "Ongoing",
    image: "/sms.png",
    tagline: "Structure for learning",
    description:
      "A comprehensive student and teacher management system with real-time analytics.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    live: "https://school-management-system-ten-pi.vercel.app/",
    github: "#",
    category: "Full Stack",
  },
];

export default function ProjectSection() {
  const [filter, setFilter] = useState<"All" | "Completed" | "Ongoing">("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  // Auto-rotate carousel
  useEffect(() => {
    if (viewMode !== "carousel") return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [viewMode, filteredProjects.length]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
            Portfolio Showcase
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            A curated collection of my finest work, blending cutting-edge
            technology with exceptional user experience. Each project tells a
            story of innovation and craftsmanship.
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`gap-2 ${
                viewMode === "grid"
                  ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700"
                  : ""
              }`}
            >
              Grid View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("carousel")}
              className={`gap-2 ${
                viewMode === "carousel"
                  ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700"
                  : ""
              }`}
            >
              Carousel View
            </Button>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Completed", "Ongoing"].map((status) => (
              <motion.button
                key={status}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(status as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === status
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700"
                }`}
              >
                {status}{" "}
                {status !== "All" &&
                  `(${projects.filter((p) => p.status === status).length})`}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 
                           border border-gray-100 dark:border-zinc-800 rounded-2xl overflow-hidden 
                           shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-700 dark:text-green-400"
                          : "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Category Tag */}
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-indigo-600 dark:text-indigo-400"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, j) => (
                        <motion.span
                          key={j}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 
                                   text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-lg
                                   border border-indigo-100 dark:border-indigo-900/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
<div className="flex gap-3">
  <Button
    asChild
    className="flex-1 gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
  >
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="w-4 h-4" />
      Live Demo
    </a>
  </Button>

  <Button
    variant="outline"
    asChild
    className="flex-1 gap-2"
  >
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <Github className="w-4 h-4" />
      Code
    </a>
  </Button>
</div>

           
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 
                                group-hover:via-indigo-500/5 group-hover:to-pink-500/5 transition-all duration-500 
                                pointer-events-none -z-10"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Carousel Navigation */}
              <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between px-4 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm 
                           border border-gray-200 dark:border-zinc-700 shadow-lg hover:shadow-xl 
                           hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm 
                           border border-gray-200 dark:border-zinc-700 shadow-lg hover:shadow-xl 
                           hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Carousel Container */}
              <div className="relative h-[600px] overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  {filteredProjects.map(
                    (project, index) =>
                      index === carouselIndex && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 grid lg:grid-cols-2 gap-8"
                        >
                          {/* Project Image */}
                          <div className="relative h-full overflow-hidden rounded-2xl">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                            {/* Project Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                              <div className="flex items-center gap-4 mb-4">
                                <span
                                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                    project.status === "Completed"
                                      ? "bg-green-500/20 text-green-300"
                                      : "bg-yellow-500/20 text-yellow-300"
                                  }`}
                                >
                                  {project.status}
                                </span>
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                  {project.category}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="flex flex-col justify-center p-8 lg:p-12 bg-white dark:bg-zinc-900">
                            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                              {project.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 mb-8">
                              {project.tech.map((tech, j) => (
                                <span
                                  key={j}
                                  className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 
                                         dark:from-indigo-900/30 dark:to-purple-900/30 
                                         text-indigo-700 dark:text-indigo-300 font-medium rounded-lg"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                              <Button
                                asChild
                                size="lg"
                                className="gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                              >
                                <Link href={project.live} target="_blank">
                                  <ExternalLink className="w-5 h-5" />
                                  View Live Project
                                </Link>
                              </Button>
                              <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="gap-3"
                              >
                                <Link href={project.github} target="_blank">
                                  <Github className="w-5 h-5" />
                                  Source Code
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === carouselIndex
                        ? "w-8 bg-gradient-to-r from-indigo-600 to-purple-600"
                        : "bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="gap-3 px-8 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                     hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl 
                     hover:shadow-indigo-500/25 transition-all duration-300"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
