export function About() {
    const skills = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "APIs"]
  
    return (
      <section id="about" className=" container mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Hi, I'm Luvpreet Singh. A passionate Full-Stack Developer based in [Your Location] with 5 years of experience in
            building web applications.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            I specialize in creating efficient, scalable, and user-friendly solutions that solve real-world problems. My
            journey in tech started with [your story], and I've been in love with coding ever since.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Current Focus</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  