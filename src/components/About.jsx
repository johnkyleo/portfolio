import me from "../assets/me.jpeg";
export default function About() {
  return (
    <div className="min-h-screen text-white bg-zinc-900">
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg shadow-white/5">
                <img
                  src={me}
                  alt="John Developer"
                 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-6 text-lg sm:text-xl">
              I'm an aspiring Web Developer who recently completed an intensive coding bootcamp. 
              My journey into web development began with a curiosity about how websites work, 
              which quickly evolved into a passion for building them myself.
              </p>
              <p className=" text-gray-300 mb-6 text-lg sm:text-xl">
              Through my bootcamp experience, I've gained hands-on skills in modern web technologies including React, JavaScript, and responsive design. 
              I'm excited to apply these skills to real-world projects and continue growing as a developer.
              </p>
              <p className=" text-gray-300 text-lg sm:text-xl">
              I'm currently seeking opportunities to collaborate on meaningful projects and join a team where I can contribute while expanding my knowledge. 
              When I'm not coding, you can find me exploring new technologies, solving coding challenges, and building my portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
   
    </div>
  )
}

