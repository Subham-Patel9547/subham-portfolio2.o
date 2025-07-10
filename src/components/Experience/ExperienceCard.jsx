const ExperienceCard = ({
  company,
  role,
  duration,
  description,
  techStack = [],
}) => {
  return (
    <div className=" my-5 w-1full md:w-[48%] transform transition-transform duration-300 ease-in-out hover:-translate-y-3">
      <div
        data-aos="fade-up"
        className="experience-card-background-color px-3 py-2 cursor-pointer text-white rounded-xl "
      >
        <div className="mb-3">
          <h3 className="text-2xl font-bold secondary-text">{role}</h3>
          <p className="text-lg text-gray-300">{company}</p>
          <p className="text-base text-gray-700">{duration}</p>
        </div>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="techStack-background-color text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
