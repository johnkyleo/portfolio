import { FaHtml5,FaJs,FaReact,FaNodeJs,FaGitAlt   } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress,SiMongodb,SiMongoose } from "react-icons/si";



function Skills() {
 
  return (
    <section className="flex flex-col text-center h-[100dvh] min-h-[730px] py-3">
      <h1 className="uppercase text-[40px] lg:mt-24 text-blue-900">Skills</h1>
      <hr className="w-[200px] h-px mx-auto border-black mb-10"/>
    <h2 className="uppercase text-[32px] font-bold">FRONTEND</h2>
    <div className="flex justify-evenly self-center flex-wrap gap-y-10 gap-6">
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaHtml5 size="35px"/>HTML</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaCss3Alt size="35px"/>CSS</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaJs size="35px"/>JavaScript</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaReact size="35px"/>React</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold mb-10"><RiTailwindCssFill size="35px"/>Tailwind CSS</div>
    </div>
    <h2 className="uppercase text-[32px] font-bold">BACKEND</h2>
    <div className="flex justify-evenly self-center flex-wrap gap-y-10 gap-6">
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaNodeJs size="35px"/>NodeJS</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><SiExpress size="35px"/>ExpressJS</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold"><SiMongodb size="35px"/>MongoDB</div>
        <div className="flex flex-wrap uppercase text-[25px] font-bold mb-10"><SiMongoose size="35px"/>Mongoose</div>
    </div>
    <h2 className="uppercase text-[32px] font-bold">OTHERS</h2>
    <div className="flex justify-evenly self-center flex-wrap gap-y-10 gap-6    ">
    <div className="flex flex-wrap uppercase text-[25px] font-bold"><FaGitAlt size="35px"/>GIT</div>
    </div>
    </section>
  );
}

export default Skills;
