import github from '../assets/github-light.svg';
import linkedin from '../assets/linkedin-light.svg';
import me from '../assets/me.jpeg'
import CV from '../assets/Obusan_John_Kyle_CV.pdf';
import {motion} from 'framer-motion'




function Hero() {
 
  return (
    <motion.section initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity:1, scale: 1 }} transition={{ duration: .8, ease: 'easeInOut' }}  viewport={{once: true}}
    id="home" className="flex flex-col justify-center gap-5 text-center h-[100dvh] min-h-[800px] md:flex-row-reverse md:items-center md:justify-evenly">
      <div className="flex justify-center">
        <img
         alt=""
          src={me}
          className="max-w-[200px] md:max-w-[350px] md:w-[350px] rounded-full"
        /> 
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='uppercase text-[40px]'>
          John Kyle
          <br/>
          Obusan
        </h1>
        <h2 className='text-[20px]'>Web Developer</h2>
        <span className='flex gap-[25px] justify-center'>
         
          <a href="https://github.com/johnkyleo" target="_blank" className='m-0 w-fit self-center'>
            <img src={github} alt="Github icon" className='w-[30px] hover:scale-125' />
          </a>
          <a href="https://www.linkedin.com/in/johnkyleo" target="_blank" className='m-0 w-fit self-center'>
            <img src={linkedin} alt="Linkedin icon" className='w-[30px] hover:scale-125 ' />
          </a>
        </span>
       
        <div className='flex justify-center'>
        <p className="max-w-[300px] text-sm">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        </div>
       
        <div className='flex gap-4 place-content-center'>
        <a href={CV} download className='w-fit self-center'>
          <button className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[15px]
             transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out hover:scale-105 py-3 px-10 flex items-center border-blue-600 border-2 text-black">Download CV</button>
        </a>
        <a href="#contact" className='w-fit self-center'>
          <button className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[15px]
             transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out hover:scale-105 py-3 px-10 flex items-center bg-blue-600 text-white">Hire Me</button>
        </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

