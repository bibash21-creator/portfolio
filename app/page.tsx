import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import Hero from "@/app/hero/Hero";
import Skills from "@/app/skills/Skills"
import Project from "@/app/projects/Project";
import Final from "@/app/contact_with_foot/Final"
import Footer from "@/app/footer/Footer"


export default function Home() {
  return (
    <>
    <Navbar/ >

    <Hero />


    <Skills />


    <Project />

    <Final />

    <Footer />
    </>
  );
}
