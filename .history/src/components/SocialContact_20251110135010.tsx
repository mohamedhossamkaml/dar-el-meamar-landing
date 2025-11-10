import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPlus, FaTimes } from "react-icons/fa"; // Import the icons

interface SocialContactProps {
  position?: "left" | "right"; // Optional prop to set position
}

const SocialContact: React.FC<SocialContactProps> = ({ position = "left" }) => {
  const [open, setOpen] = useState(false);
  const sideClass = position === "left" ? "left-4" : "right-4";

  return (
    <div
      className={`fixed bottom-4 ${sideClass} flex flex-col items-center gap-3 z-50`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition"
      >
        {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>


      {/* Social media icons */}
      <div
        className={`flex flex-col gap-3 mt-2 transform transition-all duration-500 ease-in-out ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
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
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white p-3 rounded-full shadow-md hover:bg-blue-900 transition"
        >
          <FaLinkedinIn size={20} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          <FaInstagram size={20} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/201507412000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Call */}
        <a
          href="tel:+23131088"
          className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialContact;
