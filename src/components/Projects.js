function Projects() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-300">
          Projects I've worked on
        </h3>
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
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap my-10">
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-05at07.43.13.png`}
            alt="project"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.07.40.png`}
            alt="project"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at07.36.39.png`}
            alt="project"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.01.42.png`}
            alt="project"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.05.53.png`}
            alt="project"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.15.40.png`}
            alt="project"
          />
        </div>
      </div>
    </section>
  );
}
export default Projects;
