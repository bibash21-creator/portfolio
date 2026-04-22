'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 🖱️ Mouse tracking for Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // 📜 Scroll progress for the integrated bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.1 }}
        onMouseMove={handleMouseMove}
        className={`
          fixed z-[200] hidden md:block overflow-hidden
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled
            ? `top-4 left-1/2 -translate-x-1/2 w-[85%] max-w-5xl rounded-full py-3 px-4 shadow-2xl backdrop-blur-2xl border ${isDark ? 'bg-gray-950/85 border-white/10' : 'bg-white/85 border-gray-200/80'}`
            : 'top-0 left-0 right-0 w-full rounded-none py-6 px-0 bg-transparent border-transparent border'
          }
        `}
      >
        {/* ✨ Cursor Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)'}, transparent 40%)`,
          }}
        />

        {/* 📉 Integrated Scroll Progress Bar */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-indigo-500 to-accent origin-[0%]"
            style={{ scaleX }}
          />
        )}
        <div className={`mx-auto flex items-center justify-between transition-all duration-700 ${scrolled ? 'px-2' : 'max-w-7xl px-6 lg:px-8'}`}>
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <span className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary/80 transition-all shrink-0">
              <Image src="/bibash.png" alt="Bibash Poudel" fill className="object-cover object-top" sizes="40px" />
            </span>
            <span className="text-2xl font-black bg-gradient-to-r from-primary via-indigo-500 to-accent text-transparent bg-clip-text tracking-tight">
              Bibash.dev
            </span>
          </Link>

          {/* Nav links & Theme Toggle */}
          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1 mr-4">
              {navLinks.map(({ href, label }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                      ${isActive
                        ? 'text-white'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <span className={`w-px h-6 mr-4 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className={`
                relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200
                ${isDark
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-amber-500'
                }
              `}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Navbar ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.1 }}
        className={`
          fixed top-0 left-0 right-0 z-[200] md:hidden
          flex items-center justify-between px-5 py-4
          transition-all duration-300
          ${scrolled
            ? isDark
              ? 'bg-gray-950/85 border-b border-white/8 backdrop-blur-2xl shadow-lg'
              : 'bg-white/80 border-b border-gray-200/70 backdrop-blur-2xl shadow-sm'
            : 'bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5"
        >
          <span className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/50 shrink-0">
            <Image src="/bibash.png" alt="Bibash Poudel" fill className="object-cover object-top" sizes="32px" />
          </span>
          <span className="text-xl font-black bg-gradient-to-r from-primary via-indigo-500 to-accent text-transparent bg-clip-text tracking-tight">
            Bibash.dev
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className={`
              w-9 h-9 flex items-center justify-center rounded-full transition-all
              ${isDark
                ? 'bg-white/8 hover:bg-white/15 text-yellow-300'
                : 'bg-gray-100 hover:bg-gray-200 text-amber-500'
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className={`
              w-9 h-9 flex items-center justify-center rounded-full transition-all
              ${isDark
                ? 'bg-white/8 hover:bg-white/15 text-gray-200'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className={`
                fixed top-[72px] left-4 right-4 z-[190] md:hidden
                rounded-3xl p-5 shadow-2xl
                ${isDark
                  ? 'bg-gray-950/95 border border-white/10 backdrop-blur-2xl'
                  : 'bg-white/95 border border-gray-200 backdrop-blur-2xl'
                }
              `}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map(({ href, label }, i) => {
                  const id = href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200
                          ${isActive
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/20'
                            : isDark
                              ? 'text-gray-400 hover:text-white hover:bg-white/5'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                          }
                        `}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                        )}
                        {label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Footer row */}
              <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                <p className={`text-xs text-center font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  © 2025 Bibash Poudel
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
