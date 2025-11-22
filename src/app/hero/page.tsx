// components/Hero.tsx (Server Component)
import Image from 'next/image';
// import MouseDownArrow from "@/app/helpers/Mouse";
// import SpinningCube from "@/app/helpers/SpinningCube";
import {Button} from "@/components/ui/button"
import { Fa500Px, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FiFolder, FiGithub, FiLinkedin, FiDownload, FiMail} from 'react-icons/fi';
import Link from "next/link"
import {GiSkills} from "react-icons/gi";
import {MdWorkOutline} from 'react-icons/md';



export default function Hero() {
  return (
    <>
      <section className="px-10 mb-20 md:px-20 flex flex-col-reverse md:flex md:flex-row animate-in fade-out duration-1000">
        <div className="md:w-1/2 text-center md:text-left py-10">
          <div className="space-y-4 text-center md:text-left">
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
  <p className="text-sm mb-5 md:text-base text-gray-600 dark:text-gray-400 font-semibold max-w-xl">
    I’m a passionate developer who loves building interactive, user-centric products. I focus on crafting seamless experiences using modern tools and emotionally grounded design.
  </p>
</div>
            
        <div className="flex flex-col gap-y-5 md:flex-row  md:gap-x-5 mb-7 justify-center md:justify-start">
             
<Button variant="outline" className="flex items-center gap-3">
  <FiFolder /> View Projects
</Button>
<Button variant="outline" className="flex items-center gap-3">
  <FiDownload /> Download Resume
</Button>
<Button variant="outline" className="flex items-center gap-3">
  <FiMail /> Contact Me
</Button>

        </div>

        <div className="highlights flex flex-col gap-y-2 items-center md:items-start">
  {/* Projects */}
  <div className="flex items-center gap-x-5">
    <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500">
      <FiFolder className="text-white w-5 h-5" />
    </div>
    <h2 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100">
      3+ Projects Completed
    </h2>
  </div>

  {/* Experience */}
  <div className="flex items-center gap-x-4">
    <div className="p-2 rounded-full bg-gradient-to-tr from-indigo-500 via-blue-600 to-cyan-500">
      <MdWorkOutline className="text-white w-5 h-5" />
    </div>
    <h2 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100">
      1+ Years Experience
    </h2>
  </div>

  {/* Specialization */}
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

        <div className="md:w-1/2 pt-10">
          <div className="flex justify-center">
            <Image
              src="/bibash.jpg"
              alt="Bibash Poudel"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
           
            {/* <SpinningCube /> */}
          </div>
        </div>
      </section>
      {/* <MouseDownArrow /> */}
    </>
  );
}