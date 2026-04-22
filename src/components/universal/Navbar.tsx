'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';

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
      {/* ── Desktop Floating Pill ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.1 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[200] hidden md:block"
        style={{ width: 'max-content' }}
      >
        <nav
          className={`
            flex items-center gap-1 px-3 py-2 rounded-full
            transition-all duration-500
            ${scrolled
              ? isDark
                ? 'bg-gray-950/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
                : 'bg-white/75 border border-gray-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl'
              : isDark
                ? 'bg-gray-950/50 border border-white/5 backdrop-blur-md'
                : 'bg-white/50 border border-gray-200/50 backdrop-blur-md'
            }
          `}
        >
          {/* Logo pill */}
          <Link
            href="#hero"
            className="mr-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white text-sm font-black tracking-tight select-none"
          >
            Bibash.dev
          </Link>

          {/* Nav links */}
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? 'text-white'
                    : isDark
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md shadow-purple-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}

          {/* Divider */}
          <span className={`w-px h-5 mx-1 ${isDark ? 'bg-white/10' : 'bg-gray-300'}`} />

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className={`
              relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200
              ${isDark
                ? 'bg-white/5 hover:bg-white/15 text-yellow-300'
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
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>
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
          className="text-xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text tracking-tight"
        >
          Bibash.dev
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
                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/20'
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
