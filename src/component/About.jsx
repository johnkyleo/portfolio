import React from 'react'

const About = () => {
  return (
   <div className="md:col-span-6 lg:col-span-8 md:row-span-2 bg-card border border-border rounded-lg p-8 flex flex-col justify-between hover:border-accent transition-colors ">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
             I'm an aspiring Web Developer who loves turning ideas into interactive, responsive websites. After completing a coding bootcamp, I've been building with React and JavaScript and can't wait to bring creative web experiences to life.</p>
          </div>
        </div>
  )
}

export default About