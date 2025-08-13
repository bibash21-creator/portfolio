import {Space_Mono} from "next/font/google"

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
                    <Image src="/Calculator.png"
                    width={400}
                    height={400}
                    alt="Image of the Project" 
                    className="object-fit"/>

                    <div className={`${mono.className}`}>
                        <h1 className="text-2xl">Calculator App</h1>
                        <div className="flex gap-x-10 mt-3 text-xl">
                            <span className="">HTML</span>
                            <span className="">CSS</span>
                            <span className="">JS</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image src=""
                    width={0}
                    height={0}
                    alt="Image of the Project" />

                    <div className={`${mono.className}`}>
                        <h1 className="text-2xl">Calculator App</h1>
                        <div className="flex gap-x-10 mt-3 text-xl">
                            <span className="">HTML</span>
                            <span className="">CSS</span>
                            <span className="">JS</span>
                        </div>
                    </div>
                </div>

                
            </aside>
            
        </section>
    
    
    
    
    
    
    
    
            </>



    )
}