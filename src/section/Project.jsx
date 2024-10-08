    import React from 'react'
    import pixelz from '../assets/pixelz.jpg'
    import crypto from '../assets/crypto-api.jpg'
    import weatherapp from '../assets/weatherapp.jpg'
    import quiztime from '../assets/quiztime.jpg'
    import deadpool from '../assets/deadpool.jpg'
    import {motion} from 'framer-motion'
    

    const Project = () => {
    return (
        <section id="project" className="flex flex-col text-center">
        <h1 className="uppercase text-[40px] text-blue-900">Projects</h1>
        <hr className="w-[200px] h-px mx-auto border-black"/>
        <div className="flex flex-wrap justify-center lg:p-20">
               
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} viewport={{margin: '-150px',once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} 
            className="rounded overflow-hidden shadow-lg m-6 hover:scale-110 max-w-[300px]" href='https://github.com/johnkyleo/Pixelz' target='_blank'>
                <img className="w-full" src={pixelz} alt="Pixelz"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Pixelz</div>
                    <p className="text-gray-700 text-base">
                    Full Stack Ecommerce eCommerce with Admin website built using Tailwind CSS and React that feature various products</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NodeJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ExpressJS</span>
                </div>
            </motion.a>
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} viewport={{margin: '-150px',once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} 
            className="rounded overflow-hidden shadow-lg m-6 hover:scale-110 max-w-[300px]" href='https://github.com/johnkyleo/DNW-Frontend' target='_blank'>
                <img className="w-full" src={deadpool} alt="Crypto"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Deadpool and Wolverine</div>
                    <p className="text-gray-700 text-base">
                   A Frontend website based on the movie Deadpool and Wolverine.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NextJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>                  
                </div>
            </motion.a>  
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} viewport={{margin: '-150px',once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} 
            className="rounded overflow-hidden shadow-lg m-6 hover:scale-110 max-w-[300px]" href='https://github.com/johnkyleo/crypto-api' target='_blank'>
                <img className="w-full" src={crypto} alt="Crypto"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Crypto Web</div>
                    <p className="text-gray-700 text-base">
                    A simple website using React that displays the price, market cap and change of a cryptocurrency, such as Bitcoin using api coincap
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API</span>
                </div>
            </motion.a>  
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} viewport={{margin: '-150px',once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} 
            className="rounded overflow-hidden shadow-lg m-6 hover:scale-110 max-w-[300px]" href='https://github.com/johnkyleo/weather-app' target='_blank'>
                <img className="w-full" src={weatherapp} alt="Weather App"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Weather App</div>
                    <p className="text-gray-700 text-base">
                    Web application that displays weather information for a specific location. The information includes the current 
                    temperature, weather description
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API</span>
                </div>
            </motion.a>
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} viewport={{margin: '-150px',once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} 
             className="rounded overflow-hidden shadow-lg m-6 hover:scale-110 max-w-[300px]" href='https://github.com/johnkyleo/JS-QUIZ' target='_blank'>
                <img className="w-full" src={quiztime} alt="Quiz Time"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Quiz Time</div>
                    <p className="text-gray-700 text-base">
                    A simple application built using JavaScript that presents a user with a set of questions and records their responses
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                </div>
            </motion.a>  

        </div>
    </section>
    )
    }

    export default Project

    