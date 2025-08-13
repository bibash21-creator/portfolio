
"use client";

import { useState } from 'react';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaStackOverflow, FaBars, FaTimes } from 'react-icons/fa';

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center mx-3 md:mx-15 lg:mx-50 mt-2 md:mt-5 lg:mt-10">
        <div className="logo">
          <Link href="" className={`${mono.className} text- md:text-2xl`}>
            bibashpoudel
          </Link>
        </div>

        {/* Hide nav-links on smaller screens, show on md and above */}
        <div className="nav-links hidden gap-x-7 md:flex">
          <Link href="">
            <FaGithub size={25} className="hover:scale-200"/>
          </Link>
          <Link href="">
            <FaLinkedin size={25} className="hover:scale-200"/>
          </Link>
          <Link href="">
            <FaStackOverflow size={25} className="hover:scale-200"/>
          </Link>
          <Link href="">
            <FaFacebook size={25} className="hover:scale-200"/>
          </Link>
        </div>

        {/* Hamburger/Cross Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </nav>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="absolute top-[10vh] left-25 w-full bg-transparent shadow-lg md:hidden text-white transparent">
          <div className="flex flex-col items-center gap-y-4 py-4">
            <Link href="" onClick={toggleMenu}>
              <FaGithub size={25} />
            </Link>
            <Link href="" onClick={toggleMenu}>
              <FaLinkedin size={25} />
            </Link>
            <Link href="" onClick={toggleMenu}>
              <FaStackOverflow size={25} />
            </Link>
            <Link href="" onClick={toggleMenu}>
              <FaFacebook size={25} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}