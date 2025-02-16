export function TechnicalExpertise() {
    const expertise = [
      {
        title: "Frontend Development",
        description: "Creating responsive and intuitive user interfaces with modern frameworks",
        skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Redux & React Query"],
      },
      {
        title: "Backend Development",
        description: "Building scalable APIs and server-side applications",
        skills: ["Node.js & Express", "Python & Django", "RESTful APIs", "GraphQL"],
      },
      {
        title: "DevOps & Tools",
        description: "Ensuring smooth deployment and development workflows",
        skills: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS & Vercel", "Git & GitHub"],
      },
    ]
  
    return (
      <section id="skills" className="border-t container mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Technical Expertise</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          A comprehensive toolkit for building modern web applications
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((category) => (
            <div key={category.title} className="space-y-4 border py-8 px-4 rounded-2xl">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600 dark:text-gray-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  