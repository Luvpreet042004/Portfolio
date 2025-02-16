import { Download } from "lucide-react"

export function Hero() {

  const onButtonClick = () => {
    
    // using Java Script method to get PDF file
    fetch("https://drive.google.com/file/d/1POw8eA15mikUzwHpF2jBsDS7WoUuHquE/view?usp=sharing").then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            const alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Luvpreet's CV.pdf";
            alink.click();
        });
    });
};
  return (
    <section className="container mx-auto flex flex-col items-center justify-center space-y-4 py-24 px-4 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">Welcome to my portfolio</p>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Full-Stack Developer Building
        <br />
        Modern Web Solutions
      </h1>
      <p className="max-w-[700px] text-gray-600 dark:text-gray-400">
        Transforming ideas into powerful applications with cutting-edge technology
        <br />
        and clean, efficient code.
      </p>
      <div className="flex space-x-4">
        <a href="#projects">
        <button className="bg-[#FF5C00] hover:cursor-pointer dark:bg-amber-50 dark:text-black dark:font-semibold text-white px-6 py-2 rounded-lg hover:bg-[#FF5C00]/90 transition-colors hover:text-white">
          View Projects
        </button></a>
        <button onClick={onButtonClick} className="border border-gray-200 dark:border-gray-800 px-6 py-2 hover:cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </button>
      </div>
    </section>
  )
}

