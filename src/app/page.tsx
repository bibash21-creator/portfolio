import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/Project';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />

      <About />

      <Experience />

      <Skills />

      <Project />

      <Testimonials />

      <Contact />
    </div>
  );
}
