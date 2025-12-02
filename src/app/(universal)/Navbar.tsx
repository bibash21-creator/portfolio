'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const ThemeIcon = theme === 'dark' ? Moon : Sun

  return (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
  {/* Logo */}
  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
    Bibash Dev
  </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-center gap-x-6">
    {navLinks.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-lg font-medium"
        >
          {label}
        </Link>
      </li>
    ))}
    {/* Theme Toggle */}
    <li>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
      >
        <Sun className="h-5 w-5 block dark:hidden" />
        <Moon className="h-5 w-5 hidden dark:block" />
      </Button>
    </li>
  </ul>

  {/* Mobile Navigation */}
  <div className="md:hidden flex items-center gap-x-3">
    {/* Menu Toggle */}
    <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
      {open ? <X className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
    </Button>

    {/* Theme Toggle */}
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <ThemeIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
    </Button>
  </div>

  {/* Mobile Dropdown */}
  {open && (
    <ul className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-y-4 z-50">
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={() => setOpen(false)}
            className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-lg font-medium"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )}
</nav>
  )
}