import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPlus, FaTimes } from "react-icons/fa";

interface SocialContactProps {
  position?: "left" | "right";
}

const icons = [
  {
    href: "https://www.facebook.com/share/1CkkfEbiKA/",
    bg: "bg-blue-600 hover:bg-blue-700",
    icon: <FaFacebookF size={20} />,
  },
  {
    href: "https://x.com",
    bg: "bg-black hover:bg-gray-900",
    icon: <FaXTwitter size={20} />,
  },
  {
    href: "https://linkedin.com",
    bg: "bg-blue-800 hover:bg-blue-900",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    href: "https://instagram.com",
    bg: "bg-pink-500 hover:bg-pink-600",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "https://wa.me/201507412000",
    bg: "bg-green-500 hover:bg-green-600",
    icon: <FaWhatsapp size={20} />,
  },
  {
    href: "tel:+23131088",
    bg: "bg-red-500 hover:bg-red-600",
    icon: <FaPhoneAlt size={20} />,
  },
];

const SocialContact: React.FC<SocialContactProps> = ({ position = "left" }) => {
  const [open, setOpen] = useState(false);
  const sideClass = position === "left" ? "left-4" : "right-4";

  return (
    <div
      className={`
        fixed z-50 flex flex-col items-center gap-3
        ${sideClass}
        bottom-4 md:bottom-auto md:top-1/3
      `}
    >
      {/* Button to open/close */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-full shadow-lg hover:from-gray-600 hover:to-gray-800 transition-transform duration-300 transform hover:scale-110"
      >
        {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>

      {/* */}
      <div
        className={`flex flex-col gap-3 mt-2 transition-all duration-500 ease-in-out ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.bg} text-white p-3 rounded-full shadow-md transition-transform duration-300 transform ${open
              ? `delay-[${index * 100}ms] scale-100 translate-x-0`
              : "scale-0 -translate-x-5"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialContact;
