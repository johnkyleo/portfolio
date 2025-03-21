import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <div className="text-white bg-zinc-900">    
          <footer className="py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} John Developer. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/johnkyleo?tab=repositories" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/johnkyleo/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>           
          </div>
        </div>
      </footer> 
    </div>
  )
}
    
