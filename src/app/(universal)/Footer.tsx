'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-6">
      {/* Copyright */}
      <div className="mb-5 text-sm text-gray-600">
        © {new Date().getFullYear()} Bibash Poudel
      </div>

      {/* Social Links */}
      <ul className="flex gap-x-7 mb-5">
        <li>
          <Link
            href="https://www.facebook.com/bibash.poudel.92578/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-5 w-5 hover:text-blue-600 transition-colors" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/bibash-poudel-23204338a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 hover:text-blue-700 transition-colors" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/bibash21-creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5 hover:text-gray-800 transition-colors" />
          </Link>
        </li>
      </ul>

      {/* Message */}
      <div className="text-xs text-gray-500">
        Built with <span className="font-semibold">Next.js</span>
      </div>
    </footer>
  );
}