import OrbitingSkillsScene from "@/app/helpers/Animateone"
export default function About() {
  return (
    <section className="flex flex-col md:flex-row about px-6 md:px-20 py-12 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Intro */}
      <div className="md:w-1/2">
      <OrbitingSkillsScene />
      </div>
      <div className="md:w-1/2">
             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 sm:text-center">About Me </h1>

       <h1 className="text-xl md:text-2xl font-bold mb-4 sm:text-center">
        I'm a passionate developer who loves creating meaningful digital products.
      </h1>
      <p className="text-md md:text-lg mb-2">
        My coding journey began in college, and I instantly got hooked on building interactive web apps.
      </p>

      {/* Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {[
          "Strong Problem-Solving Mindset",
          "Attention to detail and clean UI design",
          "Always learning and experimenting",
          "Love for performance optimization"
        ].map((strength, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md shadow-md font-semibold"
          >
            {strength}
          </div>
        ))}
      </div>

      {/* Personal Touch */}
      <div className="personal_touch space-y-2">
        <h2 className="text-xl font-semibold">Hobbies:</h2>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Exploring tech, journaling, watching WWE, F1, Football and experimenting with animations.
        </p>

        <h2 className="text-xl font-semibold mt-4">Interests:</h2>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Full-stack development, AI/ML, modular architecture, emotional storytelling through design, and building tools that reflect resilience.
        </p>
      </div>
      </div>
     
    </section>
  );
}