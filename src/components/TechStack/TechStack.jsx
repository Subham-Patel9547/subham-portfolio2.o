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

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      stack: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
      ],
    },
    {
      title: "Backend",
      stack: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "Mobile",
      stack: [
        { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Responsive Design",
          icon: <FaMobileAlt className="text-pink-400" />,
        },
      ],
    },
  ];

  return (
    <section className="py-1 pb-10 px-5 sm:px-8 md:px-16 lg:px-24 techStack-background-color text-white">
      <div className="max-w-6xl mx-auto">
        <SvgHeading heading="Tech Stack" />

        <div
          data-aos="fade-down"
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 flex-wrap"
        >
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="flex-1 min-w-[280px] techStackCard-background-color p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 active-link">
                {category.title}
              </h3>
              <ul className="space-y-3  ease-in-out transition duration-300">
                {category.stack.map((tech) => (
                  <div className="hover:-translate-y-1 ease-in-out transition duration-300 hover:bg-emerald-900/20 hover:text-emerald-300">
                    <li
                      data-aos="fade-right"
                      key={tech.name}
                      className="bg-green-900/10 flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm  "
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
