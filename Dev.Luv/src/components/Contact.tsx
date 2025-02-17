import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import axios from "axios";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/portfolio/send-email`, formData);
      console.log("Email sent successfully:", response.data);
      
      alert("Your message has been sent successfully!");
  
      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  

  return (
    <section id="contact" className="border-t container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Let's discuss how we can work together on your next project
      </p>
      <div className="max-w-md mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF5C00]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF5C00]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] min-h-[150px]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FF5C00] dark:hover:text-white dark:bg-amber-50 dark:text-black dark:font-semibold text-white px-6 py-2 rounded-lg hover:bg-[#FF5C00]/90 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Github className="h-5 w-5" />
            </button>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Linkedin className="h-5 w-5" />
            </button>
          </a>
          <a href="mailto:your@email.com">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Mail className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
