"use client";

import {Space_Mono} from "next/font/google";
import {FiArrowUpRight} from "react-icons/fi"
import {MdWork} from "react-icons/md"
import Link from "next/link";
import {MdExplore} from 'react-icons/md';

import Image from "next/image"

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Project(){
    return(
        <>
        
        <section className="mx-3 md:mx-25 lg:mx-40 mt-20  h-[auto]">
            <div className="flex  flex-col md:flex-row justify-between items-center mb-20 md:mb-25">
                <header className={`${mono.className} flex gap-x-3 text-5xl md:text-6xl lg:text-7xl`}>Projects
                    <MdWork className="text-4xl text-[#7ED99E] animate-pulse" />
                </header>

                <Link href="/projects" className={`flex gap-x-3 ${mono.className} text-xl hover:scale-105 hover:cursor-pointer w-[50%] md:w-[15%] mt-10 md:mt-0 border-b border-[#7ED99E]`}>Explore More 
                <MdExplore className="text-[#7ED99E] animate-bounce"/></Link>
            </div>

            <aside className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-x-0 md:gap-x-7">
                <div className="">
                    <Image src="/School.png"
                    width={500}
                    height={500}
                    alt="Image of the Project" 
                    />

                    <div className={`${mono.className}`}>
                        <h1 className="text-2xl">School Management System</h1>
                        <div className="flex gap-x-10 mt-3 text-xl">
                            <span className="cursor-pointer px-4 py-2 rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">HTML</span>
                            <span className="cursor-pointer px-4 py-2 rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">CSS</span>
                            <span className="cursor-pointer px-4 py-2 rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">JS</span>
                        </div>
                       

                       <Link href="https://school-management-system-ten-pi.vercel.app/" className="mt-7 text-xl flex bg-[#7ED99E] text-[#0D0D0D] px-5 w-[75vw] md:w-[25vw] lg:w-[20vw] py-3 hover:scale-110 cursor-pointer border border-[#7ED99E] rounded-2xl hover:text-[#7ED99E] hover:bg-[#0D0D0D]" target="_blank">View Live Site 
                            <FiArrowUpRight className="animate-pulse text-xl"/>
                        </Link>
                        
                    </div>
                </div>
                <div className="">
                    <Image src="/Hospital.png"
                    width={500}
                    height={500}
                    alt="Image of the Project" 
                    />

                    <div className={`${mono.className}`}>
                        <h1 className="text-2xl">Hospital Management System</h1>
                       <div className="flex gap-x-10 mt-3 text-xl">
  <span className="cursor-pointer px-3 py-1 rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
    HTML
  </span>
  <span className="cursor-pointer px-3 py-1rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
    CSS
  </span>
  <span className="cursor-pointer px-3 py-1 rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
    JS
  </span>
  <span className="px-3 py-1 cursor-pointer rounded-lg border-2 border-[#7ED99E] bg-[#0D0D0D] text-[#F2F2F2] shadow-md shadow-[#7ED99E] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
    Tailwind CSS
  </span>
</div>

                        <Link href="https://hospital-management-system-theta-jade.vercel.app/" className="mt-7 text-xl flex bg-[#7ED99E] text-[#0D0D0D] px-5 w-[75vw] md:w-[25vw] lg:w-[20vw] py-3 hover:scale-110 cursor-pointer border border-[#7ED99E] rounded-2xl hover:text-[#7ED99E] hover:bg-[#0D0D0D]" target="_blank">View Live Site 
                            <FiArrowUpRight className="animate-pulse text-xl"/>
                        </Link>
                    </div>
                </div>

                
            </aside>
            
        </section>



  

    
    
            </>



    )
}