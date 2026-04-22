'use client';

/**
 * Projects Page — Premium UI/UX (theme-aware, recruiter-friendly)
 * - Smart segmented filter bar with polished labels
 * - Theme-aware glassmorphism across cards and controls
 * - Responsive grid + refined carousel (auto-rotate + arrows)
 * - Micro-interactions with Framer Motion
 * - Accessible focus rings, aria labels, consistent contrast
 */

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* Filters: recruiter-friendly labels */
const FILTERS = [
  'All Projects',
  'Completed',
  'In Progress',
  'Launched',
  'Coming Soon',
] as const;
type Filter = (typeof FILTERS)[number];

/* Project type */
interface Project {
  title: string;
  status: 'Completed' | 'In Progress';
  image: string;
  tagline: string;
  description: string;
  tech: string[];
  category: string;
  live: string; // empty string if not deployed
  github: string; // "#" or empty if not available
}

/* Data: your projects */
const projects: Project[] = [
  {
    title: 'To-do List Application',
    status: 'Completed',
    image: '/tdla.png',
    tagline: 'Organize tasks, code clean—daily done right.',
    description:
      'Intuitive task management app featuring drag-and-drop functionality, priority levels, and completion analytics. Built to improve daily productivity with a focus on clean, responsive UI.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    category: 'Productivity',
    live: 'https://todo-gamma-mauve.vercel.app/',
    github: 'https://github.com/bibash21-creator/Todo',
  },
  {
    title: 'Weather Dashboard Application',
    status: 'In Progress',
    image: '/weather.png',
    tagline: 'Forecasts, insights, and clarity—weather made personal.',
    description:
      'Comprehensive weather dashboard with real-time data, hourly forecasts, weekly predictions, and air quality metrics. Integrates OpenWeather API with mood-based storytelling to enhance user engagement.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'OpenWeather API'],
    category: 'Utility',
    live: 'https://weather-app-jet-sigma-84.vercel.app/',
    github: 'https://github.com/bibash21-creator/WeatherDash',
  },
  {
    title: 'Notes Application',
    status: 'In Progress',
    image: '/notes.png',
    tagline: 'Organize thoughts, capture ideas, and keep learning alive.',
    description:
      'Full-stack notes app with secure user authentication, cloud-based storage via MongoDB Atlas, and intuitive categorization. Implements JWT authentication and follows modern API standards for 100% data persistence.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Tailwind CSS',
    ],
    category: 'Productivity',
    live: '',
    github: 'https://github.com/bibash21-creator/notes_app',
  },
  {
    title: 'Hospital Management System',
    status: 'In Progress',
    image: '/hms.png',
    tagline: 'Care meets code',
    description:
      'Enterprise-level patient and staff management system handling appointment scheduling, patient records, and staff coordination. Designed for healthcare providers to streamline administrative workflows.',
    tech: ['React', 'CSS3', 'JavaScript'],
    category: 'Full Stack',
    live: 'https://hospital-management-system-theta-jade.vercel.app/',
    github: '',
  },
  {
    title: 'Ticket Application',
    status: 'In Progress',
    image: '/tms.png',
    tagline: 'Support ticket management made simple',
    description:
      'Robust ticketing system for customer support teams with status tracking, priority queuing, and response time metrics. Improves support response efficiency by centralizing all customer issues.',
    tech: ['Tailwind CSS', 'Next.js'],
    category: 'Full Stack',
    live: '',
    github: 'https://github.com/bibash21-creator/Ticketing_App',
  },
  {
    title: 'BIT Result Checker Application',
    status: 'Completed',
    image: '/brc.png',
    tagline: 'Track your exam progress',
    description:
      'ML-powered result checking application using Streamlit. Analyzes exam performance data with pandas and implements predictive analytics for grade tracking.',
    tech: ['Streamlit', 'Pandas', 'Machine Learning'],
    category: 'Data Science',
    live: 'https://bitresult079.streamlit.app/',
    github: 'https://github.com/bibash21-creator/Result_Checker',
  },
  {
    title: 'Modern Calculator App',
    status: 'Completed',
    image: '/calculator.png',
    tagline: 'Precision meets simplicity',
    description:
      'Sleek, responsive calculator demonstrating modular component architecture and clean code practices. Supports standard arithmetic operations with optimized performance.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web App',
    live: 'https://calculator-seven-sage-81.vercel.app/',
    github: '#',
  },
  {
    title: 'Recipe Page App',
    status: 'Completed',
    image: '/recipe.png',
    tagline: 'Deliciously organized',
    description:
      'Recipe browsing interface with advanced filtering, search functionality, and responsive grid layout. Demonstrates UI/UX best practices for content-heavy applications.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Design',
    live: 'https://recipe-page-rho-gold.vercel.app/',
    github: '#',
  },
  {
    title: 'School Management System',
    status: 'In Progress',
    image: '/sms.png',
    tagline: 'Structure for learning',
    description:
      'Comprehensive school management platform with student and teacher portals, real-time analytics, attendance tracking, and grades management. Streamlines educational administration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    category: 'Full Stack',
    live: 'https://school-management-system-ten-pi.vercel.app/',
    github: '#',
  },
];

/* Motion variants */
const listVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.32 } },
};

/* Smart deployment badge (Launched / Coming Soon) */
function DeploymentBadge({ live }: { live?: string }) {
  const isLive = !!live?.trim();
  const label = isLive ? 'Launched' : 'Coming Soon';
  const bg = isLive ? 'bg-green-600/85' : 'bg-red-600/85';
  return (
    <span className={`px-3 py-1 text-xs rounded-full ${bg} text-white`}>
      {label}
    </span>
  );
}

/* Glass arrow button for carousel */
function CarouselArrow({
  side,
  onClick,
}: {
  side: 'left' | 'right';
  onClick: () => void;
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  const positionClass = side === 'left' ? 'left-0' : 'right-0';

  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous project' : 'Next project'}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 p-3 rounded-full
                  bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
                  border border-gray-200 dark:border-gray-700
                  shadow-md hover:scale-105 transition
                  focus-visible:ring-2 focus-visible:ring-purple-400`}
    >
      <Icon className="w-5 h-5 text-gray-800 dark:text-gray-100" />
    </button>
  );
}

/* Empty state: theme-aware, friendly */
function EmptyState() {
  return (
    <div className="rounded-2xl p-10 border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 backdrop-blur-lg text-center">
      <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        No projects match this filter
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Try changing filters or explore all projects below.
      </p>
    </div>
  );
}

/* Project Card */
function ProjectCard({ p }: { p: Project }) {
  const hasLive = !!p.live?.trim();
  const hasValidGit = !!(p.github?.trim() && p.github !== '#');

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="enter"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
      aria-label={`${p.title} project card`}
    >
      {/* Media */}
      <div className="relative h-56">
        <Image
          src={p.image}
          alt={`${p.title} cover image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-primary/85 text-white">
            {p.status}
          </span>
          <DeploymentBadge live={p.live} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <header className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {p.title}
          </h3>
          <p className="text-sm italic text-gray-600 dark:text-gray-400">
            {p.tagline}
          </p>
        </header>

        <p className="text-sm line-clamp-2 text-gray-700 dark:text-gray-300">
          {p.description}
        </p>

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
          {p.tech.map(t => (
            <motion.li
              key={t}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs rounded-lg bg-secondary text-primary border border-primary/30"
              aria-label={t}
            >
              {t}
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-3">
          {hasLive && (
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white focus:ring-2 focus:ring-primary/40"
            >
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" /> Live
              </a>
            </Button>
          )}
          {hasValidGit && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hover:border-primary hover:text-primary focus:ring-2 focus:ring-primary/40"
            >
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* Page: filters, view controls, grid/carousel */
export default function ProjectPage() {
  const [filter, setFilter] = useState<Filter>('All Projects');
  const [view, setView] = useState<'grid' | 'carousel'>('grid');
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  /* Derived list */
  const filtered = useMemo(() => {
    switch (filter) {
      case 'All Projects':
        return projects;
      case 'Completed':
      case 'In Progress':
        return projects.filter(p => p.status === filter);
      case 'Launched':
        return projects.filter(p => p.live?.trim());
      case 'Coming Soon':
        return projects.filter(p => !p.live?.trim());
      default:
        return projects;
    }
  }, [filter]);

  /* Carousel rotation */
  const rotate = useCallback((d = 1) => {
    setIndex(i =>
      filtered.length ? (i + d + filtered.length) % filtered.length : 0
    );
  }, [filtered.length]);

  /* Reset index when filter changes */
  useEffect(() => {
    setIndex(0);
  }, [filter]);

  /* Auto-rotate carousel */
  useEffect(() => {
    if (view === 'carousel' && filtered.length > 1) {
      intervalRef.current = window.setInterval(() => rotate(1), 5000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
    return;
  }, [view, filtered.length, rotate]);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: false }}
      >
        Portfolio Showcase
      </motion.h1>

      {/* Responsive Filter Bar — Grid Based (No Scroll, No Overflow) */}
      <div className="flex justify-center mb-10 w-full">
        <div
          className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-5
      gap-2
      bg-gray-100 dark:bg-gray-800
      p-2
      rounded-2xl
      shadow-inner
      w-full
      max-w-4xl
    "
        >
          {FILTERS.map(f => {
            const active = filter === f;
            return (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={active}
                whileTap={{ scale: 0.95 }}
                className={`
            w-full
            px-3 py-2
            text-xs sm:text-sm
            font-medium
            rounded-xl
            transition-all
            ${
              active
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                : 'bg-white/70 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent'
            }
          `}
              >
                {f}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* View toggle (Grid / Carousel) */}
      <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1 shadow-inner">
        {(['grid', 'carousel'] as const).map(v => {
          const active = view === v;
          return (
            <motion.button
              key={v}
              onClick={() => setView(v)}
              aria-pressed={active}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                            ${
                              active
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent'
                            }`}
            >
              {v === 'grid' ? 'Grid' : 'Carousel'}
            </motion.button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {view === 'grid' ? (
          <motion.div
            variants={listVariants}
            initial="initial"
            whileInView="enter"
            exit="initial"
            viewport={{ once: false, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.length ? (
              filtered.map(p => <ProjectCard key={p.title} p={p} />)
            ) : (
              <div className="col-span-full">
                <EmptyState />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div className="relative h-[540px]">
            <CarouselArrow side="left" onClick={() => rotate(-1)} />
            <CarouselArrow side="right" onClick={() => rotate(1)} />

            <AnimatePresence mode="wait">
              {filtered.length ? (
                <motion.div
                  key={index}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-xl mx-auto"
                >
                  <ProjectCard p={filtered[index]} />
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    {index + 1} / {filtered.length}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="flex items-center justify-center h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <EmptyState />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white focus:ring-2 focus:ring-primary/40"
        >
          <Link href="/projects">
            View All Projects <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
