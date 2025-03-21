import Projectcard from "./Projectcard";

import pixelz from "../assets/pixelz.jpg";
import weatherapp from "../assets/weatherapp.jpg";
import crypto from "../assets/crypto-api.jpg";
import deadpool from "../assets/deadpool.jpg";
import quiiztime from "../assets/quiztime.jpg";

export default function Projects() {
  return (
    <div className="min-h-screen text-white bg-[#1B1B1B]">       
    <section id="projects" className="sm:px-6"> 
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <Projectcard
              title="E-Commerce Platform"
              description="Full Stack Ecommerce eCommerce with Admin website built using Tailwind CSS and React that feature various products"
              image={pixelz}
              tags={["React", "Tailwind Css", "NodeJS","ExpressJS", "MongoDB" ]}
              githubUrl="https://github.com/johnkyleo/Pixelz"
              liveUrl="https://ecommerce-mern-ebon.vercel.app/"
            />
            <Projectcard
              title="Deadpool and Wolverine"
              description="A Frontend website based on the movie Deadpool and Wolverine."
              image={deadpool}
              tags={["NextJS", "Tailwind Css"]}
              githubUrl="https://github.com/johnkyleo/DNW-Frontend"
              liveUrl="#"
            />
            <Projectcard
              title="Crypto Currency Tracker"
              description="A simple website using React that displays the price, market cap and change of a cryptocurrency, such as Bitcoin using api coincap"
              image={crypto}
              tags={["React", "Tailwind CSS","API"]}
              githubUrl="https://github.com/johnkyleo/crypto-api"
              liveUrl="https://crypto-api-sepia-seven.vercel.app/"
            />
            <Projectcard
              title="Weather App"
              description="Web application that displays weather information for a specific location. The information includes the current temperature, weather description"
              image={weatherapp}
              tags={["React", "Tailwind CSS","API"]}
              githubUrl="https://github.com/johnkyleo/weather-app"
              liveUrl="https://weather-app-ebon.vercel.app/"
            />
             <Projectcard
              title="Quiz Time"
              description="A simple application built using JavaScript that presents a user with a set of questions and records their responses"
              image={quiiztime}
              tags={["HTML", "CSS", "Javascript"]}
              githubUrl="https://github.com/johnkyleo/JS-QUIZ"
              liveUrl="https://jsquiztime.netlify.app/"
            />
          </div>
        </div>
      </section>

      
    </div>
  )
}

