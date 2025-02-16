"use client"

import { useState, useEffect } from "react"
import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { TechnicalExpertise } from "../components/Tecgnical"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"

function App() {
  const [theme, setTheme] = useState("light");

  // Set initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  // Apply theme change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  

  return (
    <div className="min-h-screen font-inter bg-white dark:bg-[#0A0A0A] text-black dark:text-white">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <TechnicalExpertise />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

