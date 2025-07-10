const EducationCard = ({ degree, institution, duration, description }) => {
  return (
  <div className=" w-full md:w-[48%]  transform transition-transform duration-300 ease-in-out hover:-translate-y-3">
    <div
      data-aos="fade-right"
      className="education-card-background-color my-0 lg:my-5 rounded-xl p-6"
    >
      <h3 className="text-xl lg:text-2xl font-bold mb-1 secondary-text">{degree}</h3>
      <p className="text-base text-gray-300">{institution}</p>
      <p className="text-sm text-gray-500 mb-3">{duration}</p>
      {description && <p className="text-sm text-gray-300">{description}</p>}
    </div>
    </div>
  );
};

export default EducationCard;
