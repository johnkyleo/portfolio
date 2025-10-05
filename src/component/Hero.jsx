import React from 'react'
import { ArrowUpRight,} from "lucide-react";
const Hero = () => {
  return (
     <div className="md:col-span-6 lg:col-span-8 md:row-span-2 bg-card border border-border rounded-lg p-8 flex flex-col justify-between hover:border-accent transition-colors  lg:max-h-[450px] text-center sm:text-left">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance heroh1">
              John Kyle Obusan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance herop">
              Full-stack developer crafting elegant digital experiences
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90 transition-colors text-medium font-medium flex items-center"
            >
              Get in touch
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>

            <button className="border border-border text-foreground px-4 py-2 rounded-md hover:border-accent hover:text-accent transition-colors text-medium font-medium">
              <a href="#projects">View work</a>
            </button>
          </div>
        </div>
  )
}

export default Hero