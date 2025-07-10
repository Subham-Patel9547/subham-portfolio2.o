import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  apkLink,
}) => (
  <div className=" cursor-pointer w-full md:w-[48%] transform transition-transform duration-300 ease-in-out hover:-translate-y-3 text-white">
    <div
      data-aos="fade-right"
      className=" projects-card-background-color rounded-2xl p-6  shadow flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-bold mb-2 active-link">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="skills-background-color px-5 py-2 text-xs rounded transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-auto">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub
              size={20}
              className="transition-transform duration-300 hover:text-blue-400 hover:scale-110"
            />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt
              size={20}
              className="transition-transform duration-300 hover:text-green-400 hover:scale-110"
            />
          </a>
        )}
        {apkLink && (
          <a href={apkLink} target="_blank" rel="noopener noreferrer">
            <FaAndroid
              size={20}
              className="transition-transform duration-300 hover:text-yellow-400 hover:scale-110"
            />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
