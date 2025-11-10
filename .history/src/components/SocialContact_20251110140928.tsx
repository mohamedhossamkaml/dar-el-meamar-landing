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
  contacts?: { href: string; bg: string; icon: JSX.Element; label: string }[];
}

const defaultIcons = [
  {
    href: "https://www.facebook.com/share/1CkkfEbiKA/",
    bg: "bg-blue-600 hover:bg-blue-700",
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
  },
  {
    href: "https://x.com",
    bg: "bg-black hover:bg-gray-900",
    icon: <FaXTwitter size={20} />,
    label: "X (Twitter)",
  },
  {
    href: "https://linkedin.com",
    bg: "bg-blue-800 hover:bg-blue-900",
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com",
    bg: "bg-pink-500 hover:bg-pink-600",
    icon: <FaInstagram size={20} />,
    label: "Instagram",
  },
  {
    href: "https://wa.me/201507412000",
    bg: "bg-green-500 hover:bg-green-600",
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
  },
  {
    href: "tel:+23131088",
    bg: "bg-red-500 hover:bg-red-600",
    icon: <FaPhoneAlt size={20} />,
    label: "Call",
  },
];

const SocialContact: React.FC<SocialContactProps> = ({
  position = "right",
  contacts,
}) => {
  const [open, setOpen] = useState(false);
  const sideClass = position === "left" ? "left-4" : "right-4";
  const icons = contacts || defaultIcons;

  return (
    <div
      className={`fixed ${sideClass} bottom-4 flex flex-col items-center gap-3 z-50`}
    >
      {/* الأيقونات تطلع فوق الزرار */}
      <div
        className={`flex flex-col md:flex-col gap-3 mb-2 transition-all duration-500 ease-in-out ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
          }`}
      >

        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`${item.bg} text-white dark:text-black p-3 rounded-full shadow-md transition-transform duration-300 transform ${open
              ? `delay-[${index * 100}ms] scale-100 translate-x-0`
              : "scale-0 translate-x-5"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* الزرار نفسه تحت */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Social Contacts"
        className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
      >
        {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>
    </div>
  );
};

export default SocialContact;
