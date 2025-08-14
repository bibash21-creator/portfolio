
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa"
import { Space_Mono } from 'next/font/google';
import {GiSkills} from 'react-icons/gi';


import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export  default function Skills(){
    const skills = [
  { name: "HTML", exp: "4 years Experience" },
  { name: "CSS", exp: "4 years Experience" },
  { name: "Javascript", exp: "3 years Experience" },
  { name: "ReactJs", exp: "2 years Experience" },
  { name: "NextJS", exp: "1 years Experience" },
  { name: "Tailwind CSS", exp: "3 years Experience" }
];
    return(
    <>
    <section className=" w-auto h-auto mx-3  mt-25  md:mx-40 md:mt-50">
        <header className={`${mono.className} flex gap-x-3 text-5xl md:text-6xl lg:text-7xl mb-20 text-center md:text-left md:mb-25`}> Skills 
          <GiSkills className="text-4xl text-[#7ED99E] animate-bounce" /></header>
           <aside className={`grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-x-5 text-center md:text-left ${mono.className}`}>
  {skills.map((skill, index) => (
    <div 
      key={index} 
      className="h-[25vh] cursor:pointer transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-lg hover:shadow-[#7ED99E]/20 
                hover:border-b-2 hover:border-[#7ED99E] hover:bg-gray-50/10
                hover:-translate-y-1 rounded-lg p-4"
    >
      <h1 className="text-5xl cursor-pointer mb-5 transition-all duration-500 hover:text-[#7ED99E]">{skill.name}</h1>
      <span className="cursor-pointer transition-all duration-500 hover:font-medium">{skill.exp}</span>
    </div>
  ))}
</aside>
    </section>
    
    
    </>
    )
}