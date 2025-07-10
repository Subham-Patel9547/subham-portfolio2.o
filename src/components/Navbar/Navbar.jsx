import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `font-bold ${isActive ? "active-link" : "text-color"}`;

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Main nav bar */}
      <nav className="bg-black/20 backdrop-blur-md fixed w-full top-0 left-0 z-50 navBarBorder">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-xl">
          <div className="h-10 w-32 rounded-3xl overflow-hidden">
            <NavLink to="/" onClick={scrollToTop}>
              <img
                src="./IMAGES/logo101.png"
                alt="Portfolio Logo"
                className="h-full w-full logo-background object-contain cursor-pointer rounded-3xl"
              />
            </NavLink>
          </div>

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden text-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={navLinkClass}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={navLinkClass}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={navLinkClass}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - now outside nav */}
      <div
        className={` fixed top-0 left-0 h-full w-full bg-black/70 backdrop-blur-xl transform transition-transform duration-500 ease-in-out z-90 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Top section */}
          <div className="p-4 flex justify-between items-center border-b border-[#34D399]">
            <div className="h-7 w-22 rounded-3xl overflow-hidden">
              <img
                src="./IMAGES/logo101.png"
                alt="Portfolio Logo"
                className="h-full w-full logo-background object-contain cursor-pointer rounded-3xl"
              />
            </div>
            <button onClick={toggleMenu} className="secondary-text font-bold">
              <X size={24} />
            </button>
          </div>

          {/* Center nav links */}
          <div className="relative py-40 flex-1 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <ul className="flex flex-col space-y-6 text-center font-medium text-gray-200 text-lg">
              <li>
                <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
