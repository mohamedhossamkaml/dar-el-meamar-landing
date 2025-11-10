import React from "react";
import { FaFacebookF, FaTwitter, , FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialContactProps {
  position?: "left" | "right"; // Optional prop to set position
}

const SocialContact: React.FC<SocialContactProps> = ({ position = "left" }) => {
  const sideClass = position === "left" ? "left-4" : "right-4";

  return (
    <div className={`fixed top-1/3 ${sideClass} flex flex-col gap-4 z-50`}>
      <a
        href="https://www.facebook.com/share/1CkkfEbiKA/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 text-white p-3 rounded-full shadow-md hover:bg-sky-600 transition"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white p-3 rounded-full shadow-md hover:bg-blue-900 transition"
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-black transition"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
};

export default SocialContact;
