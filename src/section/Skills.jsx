import { FaReact,FaNodeJs,FaFigma } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill,RiJavascriptLine } from "react-icons/ri";
import { BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { SiExpress,SiMongodb,SiMongoose } from "react-icons/si";
import { IoIosGitMerge } from "react-icons/io";



function Skills() {
  return (
    <section
      className="flex flex-col text-center h-[100dvh] min-h-[730px] py-3 items-center"
      id="skills"
    >
      <div className="space-y-2">
        <h1 className="uppercase text-[40px] text-blue-600 lg:mt-24 mt-10">
          Skills
        </h1>
        <hr className="w-[200px] h-px mx-auto border-black" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Frontend</h3>
            <ul className="grid gap-3 place-content-center">
              <li className="flex items-center gap-4">
                <FaReact className="w-8 h-8" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-4">
                <RiNextjsLine className="w-8 h-8" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-4">
                <RiTailwindCssFill className="w-8 h-8" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-4">
                <BsFiletypeHtml className="w-8 h-8" />
                <span>HTML</span>
              </li>
              <li className="flex items-center gap-4">
                <BsFiletypeCss className="w-8 h-8" />
                <span>CSS</span>
              </li>
              <li className="flex items-center gap-4">
                <RiJavascriptLine className="w-8 h-8" />
                <span>Javascript</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold">Backend</h3>
            <ul className="grid gap-3 place-content-center">
              <li className="flex items-center gap-4">
                <FaNodeJs className="w-8 h-8" />
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-4">
              <SiExpress  className="w-8 h-8" />
                <span>Express.js</span>
              </li>
              <li className="flex items-center gap-4">
              <SiMongodb  className="w-8 h-8" />
                <span>MongoDB</span>
              </li>
              <li className="flex items-center gap-4">
              <SiMongoose  className="w-8 h-8" />
                <span>Mongoose</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Other</h3>
            <ul className="grid gap-3 place-content-center">
              <li className="flex items-center gap-4">
              <IoIosGitMerge className="w-8 h-8" />
                <span>Git</span>
              </li>
              <li className="flex items-center gap-4">
              <FaFigma  className="w-8 h-8" />
                <span>Figma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
