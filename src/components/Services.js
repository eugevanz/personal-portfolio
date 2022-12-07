import { FaPencilAlt, FaNetworkWired, FaCode } from "react-icons/fa";

function Services() {
  return (
    <section className="py-40">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-300">Services I Offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
          Since the beginning of my journey as a freelance design and developer,
          I've done work for <span className="text-teal-600">startups</span> and
          collaborated with{" "}
          <span className="text-teal-700">talented people</span> to create
          digital products for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
          Using cutting-edge web technologies, I have provided interface
          solutions to unique projects such as{" "}
          <span className="text-teal-600">facial recognition</span> and{" "}
          <span className="text-teal-600">object detection technologies</span>,{" "}
          <span className="text-teal-600">3D web applications</span>, and{" "}
          <span className="text-teal-600">SQL database</span> services.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <FaPencilAlt className="text-8xl text-teal-900"></FaPencilAlt>
          <h3 className="text-xl pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2 dark:text-gray-500">
            Creating elegant designs suited for your needs and design theory.
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I Use</h4>
          <div className="text-gray-800 dark:text-gray-300">
            <p className="py-1">Photoshop</p>
            <p className="py-1">Illustrator</p>
            <p className="py-1">Figma</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <FaNetworkWired className="text-8xl text-amber-500"></FaNetworkWired>
          <h3 className="text-xl pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2 dark:text-gray-500">
            Creating elegant designs suited for your needs and design theory.
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I Use</h4>
          <div className="text-gray-800 dark:text-gray-300">
            <p className="py-1">Photoshop</p>
            <p className="py-1">Illustrator</p>
            <p className="py-1">Figma</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <FaCode className="text-8xl text-blue-900"></FaCode>
          <h3 className="text-xl pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2 dark:text-gray-500">
            Creating elegant designs suited for your needs and design theory.
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I Use</h4>
          <div className="text-gray-800 dark:text-gray-300">
            <p className="py-1">Photoshop</p>
            <p className="py-1">Illustrator</p>
            <p className="py-1">Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
