
"use client";

import { useState } from 'react';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaStackOverflow, FaBars, FaTimes } from 'react-icons/fa';

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Footer() {


  return (
    <div>
      <footer className="flex md:justify-between items-center mx-3 md:mx-15 lg:mx-50 mt-2 md:mt-3 lg:mt-3 flex-col md:flex-row">
        <div className="logo">
          <Link href="" className={`${mono.className} text- md:text-2xl`}>
            bibashpoudel
          </Link>
        </div>

        {/* Hide nav-links on smaller screens, show on md and above */}
        <div className="nav-links flex gap-x-5 md:gap-x-7 mt-5 md:mt-0">
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
        </footer>

       </div>

      
  );
}