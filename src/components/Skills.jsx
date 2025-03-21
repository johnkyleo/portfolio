import Skillcard from "./Skillcard";

export default function Skills() {
  return (
    <div className=" text-white bg-[#1B1B1B]">    
      <section className="py-20 px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Skillcard name="React" />
            <Skillcard name="Next.js" />
            <Skillcard name="JavaScript" />            
            <Skillcard name="Tailwind CSS" />
            <Skillcard name="HTML/CSS" />  

            <Skillcard name="MongoDB" />   
            <Skillcard name="Node.js" />  
            <Skillcard name="Express" />
            <Skillcard name="Mongoose" /> 

            <Skillcard name="Git" />    
            <Skillcard name="Figma" />
            <Skillcard name="Wordpress" /> 
            
          </div>
        </div>
      </section>

      
    </div>
  )
}

