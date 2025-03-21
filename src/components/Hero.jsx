import { Github, Linkedin, ChevronDown, Download } from "lucide-react"
import cv from "../assets/Obusan_John_Kyle_CV.pdf"

export default function Hero() {
  return (
    <div className="min-h-screen text-white bg-[#1B1B1B]">    
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="block">Hello, I'm Kyle</span>   
                    
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Web Developer | Recent Bootcamp Graduate | Passionate Coder
          </p>
          <p className="text-xl sm:text-xl text-gray-400 mb-8">
          johnkyleobusan@gmail.com | +63 926 741 0722
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/johnkyleo?tab=repositories" target="blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/johnkyleo/" target="blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>

            <a href={cv} download className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
              <Download className="w-6 h-6" />
            </a>
           
          </div>
          <a
            href="#about"
            className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      
    </div>
  )
}

