import { Sun, Moon } from "lucide-react"

interface NavProps {
  theme: string
  toggleTheme: () => void
}

export function Nav({ theme, toggleTheme }: NavProps) {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="/" className="text-xl font-bold text-[#FF5C00] dark:text-white">
          Dev.Luv
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#about" className="hover:text-[#FF5C00] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#FF5C00] transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#FF5C00] transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#FF5C00] transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="bg-[#FF5C00] dark:hover:text-white text-white px-4 py-2 rounded-lg hover:bg-[#FF5C00]/90 transition-colors dark:bg-amber-50 dark:text-black dark:font-semibold">
            <a href="#contact">Get in touch</a>
          </button>
        </div>
      </div>
    </header>
  )
}

