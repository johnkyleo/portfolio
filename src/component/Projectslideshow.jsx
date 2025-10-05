import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import crypto from "../assets/crypto-api.jpg"
import deadpool from "../assets/deadpool.jpg"
import ecommerce from "../assets/pixelz.jpg" 

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full Stack Ecommerce eCommerce with Admin dashboard website built using Tailwind CSS and React that feature various products",
    icon: ecommerce,
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://ecommerce-mern-ebon.vercel.app/",
  },
  {
    id: 2,
    title: "Deadpool & Wolverine",
    description: "A Frontend website based on the movie Deadpool and Wolverine.",
    icon: deadpool,
    tags: ["NextJS", "Tailwind Css"],
    link: "https://dnw-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Crypto Currency Tracker",
    description: "A simple website using React that displays the price, market cap and change of a cryptocurrency, such as Bitcoin using api coincap",
    icon: crypto,
    tags: ["React", "Tailwind"],
    link: "https://crypto-api-sepia-seven.vercel.app/",
  },
  
]
const Projectslideshow = () => {

     const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 2 : 1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, projects.length - slidesToShow)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const currentProjects = projects.slice(currentIndex, currentIndex + slidesToShow)

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-blue-500 transition-colors min-h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-black">Projects</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentProjects.map((project) => (
          <div key={project.id} className="flex flex-col max-w-[300px] sm:max-w-[450px] mx-auto">
            <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg mb-4 min-h-[180px]">
             <img src={project.icon} alt={project.title} className="object-cover " />
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-lg text-black">{project.title}</h3>
                <a
                  href={project.link}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                  aria-label="View project"
                >
                  <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-black rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projectslideshow