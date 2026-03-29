"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full  bg-white dark:bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 1. About / Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Bibash Poudel
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Building resilient, recruiter‑ready digital experiences with a blend of creativity and code.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            © {year} Bibash Poudel · All rights reserved
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-purple-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

        {/* 3. Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Connect
          </h3>
          <ul className="flex justify-center md:justify-start gap-x-5">
            <li>
              <Link
                href="https://www.facebook.com/bibash.poudel.92578/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/bibash-poudel-23204338a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/bibash21-creator"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
            bibashpoudel93@gmail.com · Lokanthali, Bhaktapur
          </p>
        </div>
      </div>
    </footer>
  );
}