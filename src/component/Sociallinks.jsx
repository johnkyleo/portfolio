import React from 'react'
import { ArrowUpRight, Github, Linkedin} from "lucide-react";

const Sociallinks = () => {
  return (
   <div className="md:col-span-3 lg:col-span-4 md:row-span-1 bg-card border border-border rounded-lg p-6 flex flex-col justify-between hover:border-accent transition-colors">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Connect
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
              <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
              <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
  )
}

export default Sociallinks