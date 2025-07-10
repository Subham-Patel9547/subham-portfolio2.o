import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SocialMediaIcons from "../social-media-icons/SocialMediaIcons";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="relative z-20 text-white px-4 md:px-10 flex flex-col-reverse lg:flex-row  h-full py-12"> */}
      <div className="relative  w-full py-1 pb-0 lg:pb-10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="VIDEOS/videoplayback.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />

        {/* Main Content */}
        <div className="relative z-20 text-white px-4 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 h-full py-12">
          {/* Text Content */}
          <div
            data-aos="fade-down"
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1
              className="text-5xl sm:text-5xl lg:text-7xl font-bold mb-3"
              style={{
                WebkitTextStroke: "2px aqua",
                color: "transparent",
              }}
            >
              Hi There,
            </h1>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
              style={{
                WebkitTextStroke: "2px aqua",
                color: "transparent",
              }}
            >
              I'm Subham Patel
            </h1>

            <h2 className="flex justify-center gap-1 lg:justify-start lg:items-center mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold">
              I'm A{" "}
              <span className="block sm:inline text-lg sm:text-xl lg:mt-2 mt-0">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Frontend Developer",
                    "Mobile App Developer",
                    "Web Designer",
                    "UI/UX Enthusiast",
                    "React & React Native Expert",
                    "Freelancer",
                    "Tech Entrepreneur",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="text-base sm:text-lg mt-3">
              Let’s build something amazing together.
            </p>

            {/* Social Media Icons */}
            <div className="w-full md:w-80 flex justify-center">
              <SocialMediaIcons />
            </div>

            {/* Hire Button */}
            <div className="mt-6">
              <button
                onClick={() => navigate("/contact")}
                className="social-media-icon-shadow text-white text-lg sm:text-xl font-semibold px-6 py-3 w-full sm:w-80 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Me!
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-[75vw] sm:w-64 md:w-80 lg:w-96 aspect-square around-shadow rounded-full  overflow-hidden flex items-center justify-center mx-auto">
            <div
              data-aos="fade-down"
              className="w-[90%] h-[90%] rounded-full overflow-hidden"
            >
              <img
                // data-aos="fade-up"
                src="/IMAGES/img102.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-full image-inner-shadow cursor-pointer transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <About />

      {/* skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* contact */}
      <Contact />
    </>
  );
};

export default Home;
