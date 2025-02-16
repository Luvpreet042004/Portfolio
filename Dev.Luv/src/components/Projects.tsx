import MockLabs from '../assets/MockLabs.png'
import Chatverse from '../assets/ChatVerse.png'
import portfolio from '../assets/Portfolio.png'

export function Projects() {
  const projects = [
    {
      title: "MockLabs",
      description: "A brief description of the project and the technologies used in its development.",
      image: MockLabs,
    },
    {
      title: "Project Title",
      description: "A brief description of the project and the technologies used in its development.",
      image: portfolio,
    },
    {
      title: "Project Title",
      description: "A brief description of the project and the technologies used in its development.",
      image: Chatverse,
    },
  ]

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="border-t container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Showcasing my latest work and technical capabilities
      </p>
      <div className="grid md:grid-cols-3 gap-8" onWheel={handleScroll}>
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-black dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-white dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <button className="bg-[#FF5C00] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#FF5C00]/90 transition-colors dark:bg-amber-50 dark:text-black dark:font-semibold">
                  View Demo
                </button>
                <button className="border text-white border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

