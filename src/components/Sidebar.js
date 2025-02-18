import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 p-6">
      <img
        src="your-photo-url.jpg"
        alt="Rahul Kintali"
        className="rounded-full mx-auto w-32 h-32 border-4 border-blue-500"
      />
      <h2 className="text-center text-xl font-bold mt-4">Rahul Kintali</h2>
      <p className="text-center text-sm text-gray-600">Data Analyst</p>

      {/* Navigation Links */}
      <nav className="mt-6">
  <ul className="space-y-4 text-center">
    {[
      { name: "Home", path: "/home" },
      { name: "About", path: "/about" },
      { name: "Interests", path: "/interests" },
      { name: "Skills", path: "/skills" },
      { name: "Education", path: "/education" },
      { name: "Experience", path: "/experience" },
      { name: "Certifications", path: "/certifications" },
      { name: "Projects", path: "/projects" },
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="hover:text-blue-500 text-lg block"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>


      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-6">
        <a href="https://www.linkedin.com/in/rahul-kintali" target="_blank"><FaLinkedin size={24} /></a>
        <a href="https://github.com/RahulKintali" target="_blank"><FaGithub size={24} /></a>
      </div>
    </div>
  );
};

export default Sidebar;
