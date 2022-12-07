import { useState } from "react";
import { FaDownload, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="py-10 mb-12 flex justify-between items-center">
      <h1 className="text-md font-monospace">adevnamedgeenas</h1>
      <ul className="flex items-center">
        <li>
          <FaMoon className="cursor-pointer text-xl"></FaMoon>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md flex items-center ml-8"
            href="#resume"
          >
            <FaDownload className="mr-2"></FaDownload>
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
