import React from "react";
import TechStack from "../TechStack/TechStack";

const About = () => {
  return (
    <>
      <section className="w-full py-16 px-5 sm:px-8 md:px-16 lg:px-24 about-background-color transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div
            data-aos="fade-right"
            className="w-60 h-60 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src="/IMAGES/img102.jpg"
              alt="Subham Patel"
              className="w-full h-full object-cover image-inner-shadow"
            />
          </div>

          {/* About Text */}
          <div
            data-aos="fade-down"
            className="text-gray-200 max-w-2xl text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-400">
              About Me
            </h2>
            <div className="text-base sm:text-lg leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold">Subham Patel</span> — a{" "}
              <span className="text-emerald-400 font-medium">
                Full Stack & Mobile App Developer
              </span>{" "}
              from Prayagraj, India.
              <p className="py-4">
                I specialize in building sleek, responsive web and mobile apps
                using technologies like ReactJS and React Native. I’m passionate
                about crafting seamless user experiences and writing clean,
                scalable code.
              </p>
              <p>
                Outside of coding, I enjoy learning new tools, collaborating on
                exciting ideas, and contributing to meaningful digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <div>
        <TechStack />
      </div>
    </>
  );
};

export default About;
