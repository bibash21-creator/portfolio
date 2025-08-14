"use client";
import Image from "next/image"

import Link from "next/link"

import {Space_Mono} from "next/font/google";
import  {MdContactMail} from "react-icons/md"


const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});
;


export default function Hero(){
    return(
        <>
            <section className="flex flex-col md:flex-row hero mx-5 md:mx-25 lg:mx-40 w-[auto] h-[auto] mt-20 md:mt-10 lg:mt-35">

                 <div className="container md:w-[70%]">
  <header className={`${mono.className} text-5xl md:text-6xl lg:text-7xl text-center tracking-widest md:tracking-wide md: text-left leading-[1.2em]`}>Nice to meet you! <br />
                <span>I'm</span> <span className="border-b-[0.1em] border-[#7ED99E] tracking-tighter animate-pulse">Bibash Poudel.</span></header>

                <aside className="flex justify-center mt-20 visible md:hidden">
                    <Image src="/Bibash.jpg"
                            width={400}
                            height={400}
                            alt="Image of mine"
                            className="object-cover w-[50vw] h-[50vw] rounded-full"

                    />
                    
                </aside>
                

                
                <p className={`${mono.className}  text-sm md:text-xl lg:text-xl mt-20 w-[75%] text-center md:text-left`}>Hey there! from foothills of Himalayas, I'm front-end developer passionate about building web apps that users <span className="animate-pulse">love.</span></p>

               
                
               
                <div className="mt-20 text-center md:text-left">
                <Link href="/contact" className={`flex gap-x-5 ${mono.className} hover:scale-150 border-b-[0.1em] border-[#7ED99E] text-xl w-[50%] md:w-[30%] lg:w-[19%]`}>Contact Me
                <MdContactMail className="text-sm text-[#7ED99E] animate-pulse" /></Link>
                </div>
                 
                </div>

                 <aside className="hidden md:block lg:visible w-[30%]">
                    <Image src="/Bibash.jpg"
                            width={400}
                            height={400}
                            alt="Image of mine"
                            className="object-cover"

                    />
                </aside>
        </section> 
        
        </>
    );
}