import { Github, ExternalLink } from "lucide-react"

export default function Projectcard({ title, description, image, tags, githubUrl, liveUrl }) {
  return (
    <div className="group bg-black/50 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}        
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={githubUrl}
            className="p-2 bg-black/80 rounded-full hover:bg-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={liveUrl}
            className="p-2 bg-black/80 rounded-full hover:bg-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

