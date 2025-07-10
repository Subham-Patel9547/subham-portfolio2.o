import { experiences } from "../API/Api";
import SvgHeading from "../SvgHeading/SvgHeading";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="experience-background-color text-white py-1 pb-10 px-6 md:px-16">
      <SvgHeading heading="Experience" />
      <div className="flex flex-wrap gap-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
