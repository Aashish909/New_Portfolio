import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu on click
  };

  return (
    <nav className="mb-1 flex items-center justify-between py-6 px-4 md:px-8">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img
          className="w-10"
          src={logo}
          alt="logo"
          style={{ borderRadius: 99 }}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent md:flex items-center gap-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {[
          { name: "About", id: "about" },
          { name: "Technology", id: "technologies" },
          { name: "Experience", id: "experience" },
          { name: "Projects", id: "projects" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="block py-4 md:py-0 px-4 md:px-0 hover:text-purple-600"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://linkedin.com/in/aashish909"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aashish909"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
