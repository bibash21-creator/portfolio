"use client";

import {Space_Mono} from "next/font/google";
import {AiOutlineEye} from "react-icons/ai";
import Link from "next/link";

import Image from "next/image"

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Project(){
    return(
        <>
        <section className="mx-3 md:mx-25 lg:mx-50 mt-20  h-[auto]">
            <div className="flex  flex-col md:flex-row justify-between mb-20 md:mb-25">
                <header className={`${mono.className} text-5xl md:text-6xl lg:text-7xl`}>Projects</header>

                <button className={`${mono.className} text-xl border-b border-[#7ED99E] hover:scale-105 hover:cursor-pointer w-[50%] md:w-[20%] mt-10 md:mt-0`}>Explore More</button>
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
                            <span className="">HTML</span>
                            <span className="">CSS</span>
                            <span className="">JS</span>
                        </div>
                       

                       <Link href="https://school-management-system-ten-pi.vercel.app/" className="mt-5 text-xl flex gap-x-5 bg-[#7ED99E] text-[#0D0D0D] px-5 w-[30vw] md:w-[18vw] py-3 hover:scale-105 cursor-pointer border border-[#7ED99E] rounded-2xl hover:text-[#7ED99E] hover:bg-[#0D0D0D]" target="_blank">View Live Site 
                            <AiOutlineEye size={25} className="animate-pulse"/>
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
                            <span className="">HTML</span>
                            <span className="">CSS</span>
                            <span className="">JS</span>
                            <span className="">Tailwind CSS</span>
                        </div>

                        <Link href="https://hospital-management-system-theta-jade.vercel.app/" className="mt-5 text-xl flex gap-x-5 bg-[#7ED99E] text-[#0D0D0D] px-5 w-[30vw] md:w-[18vw] py-3 hover:scale-105 cursor-pointer border border-[#7ED99E] rounded-2xl hover:text-[#7ED99E] hover:bg-[#0D0D0D]" target="_blank">View Live Site 
                            <AiOutlineEye size={25} className="animate-pulse"/>
                        </Link>
                    </div>
                </div>

                
            </aside>
            
        </section>
    
    
    
    
    
    
    
    
            </>



    )
}