import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // ✅ Add this

const SocialMediaIcons = () => {
  const icons = [
    {
      icon: <CiLinkedin size={24} />,
      link: "https://www.linkedin.com/in/subham-patel9547",
    },
    {
      icon: <FiGithub size={24} />,
      link: "https://github.com/Subham-Patel9547",
    },
    {
      icon: <PiTelegramLogoLight size={24} />,
      link: "https://t.me/Subham_Patel9547",
    },
    {
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/subh__am9547",
    },
    {
      icon: <FaFacebook size={24} />,
      link: "https://www.facebook.com/shivampatel.hindu",
    },
  ];

  return (
    <div className="flex gap-5 justify-center m-4">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 backdrop-blur shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-110 social-media-icon-shadow"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
