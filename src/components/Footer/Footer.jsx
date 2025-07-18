import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialMediaIcons from "../social-media-icons/SocialMediaIcons";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinkClass = ({ isActive }) =>
    `font-bold ${
      isActive
        ? "primary-text text-lg font-semibold inline-block translate-x-1.5"
        : "text-base transition duration-300 hover:translate-x-1.5 inline-block"
    }`;

  return (
    <footer className=" w-full bg-gray-950 text-gray-300 pt-10 pb-8 px-3 md:px-3">
      <div className="w-full md:*:w-1/3 flex flex-col md:flex-row justify-around pl-2 lg:pl-0 gap-7 lg:gap-4 ">
        {/* About */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-2 secondary-text">
            Subham Patel
          </h2>
          <p className="text-sm text-gray-500">
            React & React Native Developer building responsive, user-focused web
            and mobile applications.
          </p>
          {/* social media links */}
          <div className="-ml-4">
            <SocialMediaIcons />
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-down" className="flex flex-col">
          <h3 className="secondary-text underline text-xl font-bold mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={navLinkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>{" "}
        </div>

        {/* additional link */}
        <div data-aos="fade-up" className="flex flex-col">
          <h3 className="secondary-text underline text-xl font-bold mb-2">
            Additional Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={navLinkClass}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={navLinkClass}>
                Experience
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div
          data-aos="fade-down"
          className="w-full md:w-auto flex flex-col space-y-3 text-base"
        >
          <div>
            <h3 className="secondary-text underline text-xl font-bold mb-2">
              Contact Us
            </h3>
            <p className="mb-2 primary-text">
              <strong>Prayagraj</strong>
              <br />
              16, Bharadwaj Ashram Rd, Tagore Town,
              <br />
              Prayagraj, Uttar Pradesh 211002
            </p>
            {/* call */}
            <div>
              <a
                href="https://wa.me/917266896432?text=Hi%20Subham%2C%20I%20got%20your%20number%20from%20your%20portfolio%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2  "
              >
                <FaWhatsapp className="mt-1 text-2xl text-green-400 hover:text-green-300 transition" />
                <span className="text-xl tracking-wider font-semibold hover:text-green-300 transition">
                  : 7266896432
                </span>
              </a>
            </div>

            {/* email */}
            <div className="mt-2 ">
              <a
                href="mailto:subhampatel9547@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Subham%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
                className="flex gap-2"
              >
                <FaEnvelope
                  size={20}
                  className="text-green-400 hover:text-green-300 transition"
                />
                <span className="text-sm font-semibold tracking-wider hover:text-green-300 transition">
                  : subhampatel9547@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center secondary-text text-md pt-10 border-t border-[#34D399]  mt-10">
        &copy; {new Date().getFullYear()} Subham Patel. All rights reserved.
      </div>

      {/* Fixed Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-black/20 backdrop-blur-md hover:bg-[#498787] transition-colors text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        >
          <FaArrowUp />
          Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
