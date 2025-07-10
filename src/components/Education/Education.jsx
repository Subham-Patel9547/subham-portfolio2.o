import { educationList } from "../API/Api";
import SvgHeading from "../SvgHeading/SvgHeading";
import EducationCard from "./EducationCard";

const Education = () => {


  return (
    <section className="education-background-color text-white py-1 pb-10 px-6 md:px-16">
      <SvgHeading heading="Education"/>
      <div className="flex flex-wrap gap-6">
        {educationList.map((edu, i) => (
          <EducationCard key={i} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
