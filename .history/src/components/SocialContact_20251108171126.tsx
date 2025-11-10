import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialContactProps {
  position?: "left" | "right"; // Optional prop to set position
}

const SocialContact: React.FC<SocialContactProps> = ({ position = "left" }) => {
  const sideClass = position === "left" ? "left-4" : "right-4";

  return (
    <div className={`fixed top-1/3 ${sideClass} flex flex-col gap-4 z-50`}>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1CkkfEbiKA/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
      >
        <FaXTwitter size={20} />
      </a>

      {/* LinkedIn */}
      {/* <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white p-3 rounded-full shadow-md hover:bg-blue-900 transition"
      >
        <FaLinkedinIn size={20} />
      </a> */}

      { /* WhatsApp number 1 */}
      <a
        href="https://wa.me/201507412000" // Put your first number here
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call */}
      <a
        href="tel:+23131088" // Put your phone number here
        className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default SocialContact;
