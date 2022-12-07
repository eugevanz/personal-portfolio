import { FaLinkedin, FaGithub, FaTwitter, FaAngleDown } from "react-icons/fa";

function Heading() {
  return (
    <section className="text-center py-10 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl py-2 text-teal-600">
        Eugene Van Zyl
      </h2>
      <h3 className="text-2xl md:text-3xl py-2 dark:text-gray-300">
        Developer and designer.
      </h3>
      <p className="text-md md:text-xl p-5 leading-8 text-gray-800 max-w-xl dark:text-gray-500">
        I provide strategic user facing solutions for applications and designer
        content. Join me down below on this EPIC journey!
      </p>
      <div className="text-4xl flex gap-10 mt-3 mb-8 text-teal-900">
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaTwitter></FaTwitter>
      </div>
      <img
        className="rounded-full w-60 mb-20"
        src={`${process.env.PUBLIC_URL}/eugeva.jpeg`}
        alt="eugeva"
      />
      <FaAngleDown className="text-3xl text-teal-600"></FaAngleDown>
    </section>
  );
}
export default Heading;
