import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import SvgHeading from "../SvgHeading/SvgHeading";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt className="text-pink-400" />,
  },
];

const Skills = () => {
  return (
    <section className="py-1 pb-20 px-5 sm:px-8 md:px-16 lg:px-24 skills-background-color text-white">
      <div className="max-w-6xl mx-auto">
        <SvgHeading heading="My Skills" />

        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div
              data-aos="fade-right"
              key={skill.name}
              className="relative w-30 h-30 lg:w-40 lg:h-40 cursor-pointer"
            >
              {/* Diamond container */}
              <div className="absolute inset-0 skillsCard-background-color rounded-lg shadow-sm shadow-[rgb(0,0,0)] transform rotate-45 flex flex-col items-center justify-center p-6 hover:-translate-y-3 ease-in-out transition duration-300">
                {/* Content inside diamond rotated back */}
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <span data-aos="fade-down" className="text-5xl mb-3">
                    {skill.icon}
                  </span>
                  <span
                    data-aos="fade-right"
                    className="text-sm text-center lg:text-lg font-semibold"
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
