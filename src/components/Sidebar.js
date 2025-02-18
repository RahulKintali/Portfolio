import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 text-3xl text-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <img
          src="your-photo-url"
          alt="Profile"
          className="rounded-full mx-auto w-32 h-32 border-4 border-blue-500"
        />
        <h2 className="text-center text-xl font-bold mt-4">Your Name</h2>
        <p className="text-center text-sm text-gray-600">Software Developer</p>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-4 text-center">
            {["Home", "About", "Interests", "Skills", "Education", "Experience", "Certifications", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-blue-500 text-lg block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="your-github-url" target="_blank"><FaGithub size={24} /></a>
          <a href="your-linkedin-url" target="_blank"><FaLinkedin size={24} /></a>
          <a href="your-instagram-url" target="_blank"><FaInstagram size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
