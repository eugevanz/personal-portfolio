import { useState } from "react";
import { FaDownload, FaMoon } from "react-icons/fa";
// import Spline from "@splinetool/react-spline";
import Heading from "./components/Heading";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-white px-10 min-h-screen md:px-10 lg:px-40 dark:bg-gray-900 bg-fixed">
        <nav className="py-10 mb-12 flex justify-between items-center">
          <h1 className="text-md font-monospace dark:text-gray-300">
            adevnamedgeenas
          </h1>
          <ul className="flex items-center">
            <li>
              <FaMoon
                className="cursor-pointer text-xl dark:text-gray-300"
                onClick={() => setDarkMode(!darkMode)}
              ></FaMoon>
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
        <Heading></Heading>
        <Services></Services>
        <Projects></Projects>
        {/* <Spline scene="https://prod.spline.design/5KnMH-oYFuh1kpaM/scene.splinecode" /> */}
      </section>
    </div>
  );
}

export default App;
