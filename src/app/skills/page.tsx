// components/SkillTimeline.tsx
export default function SkillTimeline() {
  const timeline = [
    {
      year: "2021",
      title: "Foundations",
      skills: ["HTML", "CSS", "JavaScript"],
      note: "Started exploring the web and building static pages."
    },
    {
      year: "2022",
      title: "Frontend Frameworks",
      skills: ["React", "Tailwind CSS", "Git"],
      note: "Built my first interactive apps and learned component-based design."
    },
    {
      year: "2023",
      title: "Fullstack Exploration",
      skills: ["Next.js", "Node.js", "MongoDB", "Express"],
      note: "Dove into backend fundamentals and built CRUD apps."
    },
    {
      year: "2024",
      title: "Design & Animation",
      skills: ["Framer Motion", "shadcn/ui", "Lucide React"],
      note: "Focused on storytelling, polish, and user experience."
    },
    {
      year: "2025",
      title: "Creative Coding & 3D",
      skills: ["React Three Fiber", "Modular Architecture", "Emotional Storytelling"],
      note: "Blending technical depth with visual creativity and resilience."
    }
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl  md:text-5xl font-extrabold text-center mb-8">Skill Timeline</h1>
      <div className="space-y-10">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative pl-6 border-l-4 border-indigo-500">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
            <p className=" mt-1">{item.note}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}