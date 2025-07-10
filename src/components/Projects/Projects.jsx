import SvgHeading from "../SvgHeading/SvgHeading";
import ProjectCard from "./ProjectCard";
import { reactNativeProjects, reactProjects } from "../API/Api";

const Projects = () => {
  return (
    <section className="projects-background-color text-white py-1 pb-10 px-6 md:px-16">
      <SvgHeading heading="Projects" />
      <h2 className="text-3xl font-bold mb-8 active-link">React Projects</h2>
      <div className="flex flex-wrap gap-6">
        {reactProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>

      <h2 className="text-3xl font-bold my-10  active-link">
        React Native Projects
      </h2>
      <div className="flex flex-wrap gap-6">
        {reactNativeProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
