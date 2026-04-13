// components/Hero.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiFolder, FiDownload, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { GiSkills } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';

export default function Hero() {
  return (
    <>
      <section className="container mb-20 md:px-20 flex flex-col-reverse md:flex-row animate-in fade-out duration-1000">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left py-10">
          <div className="space-y-4">
            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                Bibash Poudel
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              Full Stack Developer & AI/ML Enthusiast
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-semibold max-w-xl mx-auto md:mx-0">
              I’m a passionate developer who loves building interactive,
              user-centric products. I focus on crafting seamless experiences
              using modern tools and emotionally grounded design.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5 mb-7 justify-center md:justify-start mt-6">
            <Button variant="outline">
              <Link href="/projects" className="flex items-center gap-3">
                <FiFolder /> View Projects
              </Link>
            </Button>
            <Button>
              <Link href="/resume" className="flex items-center gap-3">
                <FiDownload /> My Resume
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/contact" className="flex items-center gap-3">
                <FiMail /> Contact Me
              </Link>
            </Button>
          </div>

          {/* Highlights */}
          <div className="highlights flex flex-col gap-y-4 items-center md:items-start">
            <div className="flex items-center gap-x-4">
              <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500">
                <FiFolder className="text-white w-5 h-5" />
              </div>
              <h2 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                3+ Projects Completed
              </h2>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="p-2 rounded-full bg-gradient-to-tr from-indigo-500 via-blue-600 to-cyan-500">
                <MdWorkOutline className="text-white w-5 h-5" />
              </div>
              <h2 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                1+ Years Experience
              </h2>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="p-2 rounded-full bg-gradient-to-tr from-green-400 via-teal-500 to-cyan-600">
                <GiSkills className="text-white w-5 h-5" />
              </div>
              <h2 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                Specialized in Next.js and React
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 pt-10 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/bibash.png"
              alt="Bibash Poudel"
              priority
              width={500}
              height={800}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
