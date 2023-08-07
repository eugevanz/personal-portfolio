import { projectCard, projectsData } from "../data/data_services";

function Projects() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-300">
          Projects I've worked on
        </h3>
        <p className="max-w-3xl text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
          Since the beginning of my journey as a freelance design and developer,
          I've done work for <span className="text-teal-600">startups</span> and
          collaborated with{" "}
          <span className="text-teal-700">talented people</span> to create
          digital products for both business and consumer use.
        </p>
        <p className="max-w-3xl text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
          Using cutting-edge web technologies, I have provided interface
          solutions to unique projects such as{" "}
          <span className="text-teal-600">facial recognition</span> and{" "}
          <span className="text-teal-600">object detection technologies</span>,{" "}
          <span className="text-teal-600">3D web applications</span>, and{" "}
          <span className="text-teal-600">SQL database</span> services.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap my-20">
        {projectsData.map((project) => projectCard(project))}
      </div>
    </section>
  );
}
export default Projects;
