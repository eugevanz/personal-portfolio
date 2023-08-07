export const skills = [
  {
    skill: "JavaScript",
    framework: [
      "Vanilla",
      "Meteor",
      "Express",
      "React",
      "moment",
      "framer-motion",
      "next",
      "mongodb",
      "React Native",
      "react-native-web",
      "supabase/supabase-js",
      "Highcharts.js",
      "Chart.js",
      "VueJS",
      "react-spring",
      "Three.js",
    ],
    purpose: [
      "front-end | back-end | system",
      "front-end | backend",
      "back-end",
      "front-end",
      "front-end",
      "front-end",
      "front-end | back-end",
      "back-end | database",
      "front-end | multi platform",
      "front-end",
      "back-end | database | Postgres",
      "front-end | data visualisation",
      "front-end | data visualisation",
      "front-end",
      "front-end | animation",
      "front-end | 3D",
    ],
    first: [
      "2017",
      "2017",
      "2017",
      "2019",
      "2019",
      "2022",
      "2021",
      "2020",
      "2021",
      "2022",
      "2021",
      "2018",
      "2018",
      "2020",
      "2021",
      "2021",
    ],
    last: [
      "present",
      "2018",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
      "present",
    ],
  },
  {
    skill: "JSON",
    framework: ["N/A"],
    purpose: ["frontend"],
    first: ["2017"],
    last: ["present"],
  },
  {
    skill: "HTML",
    framework: ["N/A"],
    purpose: ["frontend"],
    first: ["2017"],
    last: ["present"],
  },
  {
    skill: "CSS",
    framework: ["N/A"],
    purpose: ["frontend"],
    first: ["2017"],
    last: ["present"],
  },
  {
    skill: "SASS|SCSS",
    framework: ["N/A"],
    purpose: ["frontend"],
    first: ["2020"],
    last: ["present"],
  },
  {
    skill: "LESS",
    framework: ["Semantic UI | Bootstrap"],
    purpose: ["frontend"],
    first: ["2017"],
    last: ["2019"],
  },
  {
    skill: "TOML",
    framework: ["Netlify"],
    purpose: ["configuration"],
    first: ["2021"],
    last: ["present"],
  },
  {
    skill: "Bash | Zsh",
    framework: ["Linux | Mac"],
    purpose: ["automation | system"],
    first: ["2018"],
    last: ["present"],
  },
  {
    skill: "C#",
    framework: ["Unity"],
    purpose: ["Game Development"],
    first: ["2019"],
    last: ["present"],
  },
  {
    skill: "Python",
    framework: ["None | Vanilla"],
    purpose: ["automation | customization"],
    first: ["2019"],
    last: ["present"],
  },
];

export const skillsRow = (skill) => (
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {skill.skill}
    </th>
    <td class="px-6 py-4">
      <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {skill.framework.map((item) => (
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </td>
    <td class="px-6 py-4">
      <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {skill.purpose.map((item) => (
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </td>
    <td class="px-6 py-4">
      <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {skill.first.map((item) => (
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </td>
    <td class="px-6 py-4 text-right">
      <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {skill.last.map((item) => (
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </td>
  </tr>
);

export const databaseSkills = [
  { database: "MongoDB", type: "Document", first: "2020", last: "present" },
  {
    database: "Postgres",
    type: "Relational | Document",
    first: "2021",
    last: "present",
  },
  { database: "Firebase", type: "Document", first: "2018", last: "2020" },
  {
    database: "MySQL",
    type: "Relational | Document",
    first: "2018",
    last: "2019",
  },
];

export const databaseRow = (skill) => (
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {skill.database}
    </th>
    <td class="px-6 py-4">{skill.type}</td>
    <td class="px-6 py-4">{skill.first}</td>
    <td class="px-6 py-4">{skill.last}</td>
  </tr>
);

export const devSkills = [
  {
    dev: "Git",
    type: "Source control",
    similar: "",
    first: "2017",
    last: "present",
  },
  {
    dev: "Netlify",
    type: "CI/CD",
    similar: "Azure Web Portal",
    first: "2021",
    last: "present",
  },
  {
    dev: "Vercel",
    type: "CI/CD",
    similar: "Azure Web Portal",
    first: "2022",
    last: "present",
  },
  {
    dev: "Azure",
    type: "Private cloud platform",
    similar: "Kubernetes",
    first: "2020",
    last: "present",
  },
];

export const devRow = (skill) => (
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {skill.dev}
    </th>
    <td class="px-6 py-4">{skill.type}</td>
    <td class="px-6 py-4">{skill.similar}</td>
    <td class="px-6 py-4">{skill.first}</td>
    <td class="px-6 py-4">{skill.last}</td>
  </tr>
);

export const softwareSkills = [
  {
    software: "Atom",
    type: "IDE",
    similar: "",
    first: "2017",
    last: "present",
  },
  {
    software: "VS Code",
    type: "Text Editors",
    similar: "",
    first: "2017",
    last: "present",
  },
  {
    software: "GitHub | BitBucket",
    type: "Code hosting",
    similar: "",
    first: "2017",
    last: "present",
  },
  {
    software: "Figma",
    type: "Vector Graphics | Mockups",
    similar: "Adobe XD",
    first: "2018",
    last: "present",
  },
  {
    software: "Gimp",
    type: "Raster Graphics | Image Editing",
    similar: "Adobe Photoshop",
    first: "2009",
    last: "present",
  },
  {
    software: "Slack | MS Teams",
    type: "Communication",
    similar: "",
    first: "2016",
    last: "present",
  },
  {
    software: "Adobe XD",
    type: "Mock-up | Design",
    similar: "",
    first: "2019",
    last: "present",
  },
  {
    software: "Blender",
    type: "3D Modeling & Rendering",
    similar: "Adobe's 3D, animation & video",
    first: "2020",
    last: "present",
  },
  {
    software: "Photoshop",
    type: "Image editing | Mock-up",
    similar: "",
    first: "2016",
    last: "present",
  },
  {
    software: "Webflow",
    type: "Design | Visual IDE | HTML & CSS",
    similar: "",
    first: "2019",
    last: "present",
  },
];

export const softwareRow = (skill) => (
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {skill.software}
    </th>
    <td class="px-6 py-4">{skill.type}</td>
    <td class="px-6 py-4">{skill.similar}</td>
    <td class="px-6 py-4">{skill.first}</td>
    <td class="px-6 py-4">{skill.last}</td>
  </tr>
);

export const projectsData = [
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-05at07.43.13.png`,
    title: "NEWBNG Project Management",
    summary:
      "A project management app that helps project managers and teams to plan, organize, and track the progress of their projects. It is a valuable tool for any team that is working on a project. By using a project management app, you can improve communication, collaboration, and transparency, which can lead to more successful projects.",
    url: "https://newbng-outline.vercel.app",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.07.40.png`,
    title: "DKLO Design Elements",
    summary:
      "A fashion app that allows users to discover, shop, and share fashion. It can be a great way for users to discover new fashion trends, find inspiration for their own outfits, and shop for clothes and accessories. It can also be a fun and social way to connect with other fashion-lovers.",
    url: "https://dklodesigns.webflow.io",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at07.36.39.png`,
    title: "3D Personal Portfolio",
    summary:
      "A 3D personal portfolio that is used to showcase skills and experience to potential clients or employers.",
    url: "https://friendly-easley-de3834.netlify.app",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.01.42.png`,
    title: "Attorney@Law",
    summary:
      "A website for an attorney that provides a wide range of legal services to individuals and businesses.",
    url: "https://attorney-at-law.netlify.app",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.05.53.png`,
    title: "Balele Group",
    summary:
      "BALELE plays a crucial role in enabling its customers to deliver dynamic video, voice, data and wireless services that are increasingly essential to businesses and on-the-go consumers. With its industry-leading portfolio of network infrastructure solutions and services, BALELE plays a crucial role in enabling its customers to deliver dynamic video, voice, data and wireless services that are increasingly essential to businesses and on-the-go consumers.",
    url: "https://balele-group.webflow.io",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Screenshot2022-12-04at09.15.40.png`,
    title: "Wi-Fi Cafe: Community Internet",
    summary:
      "Our business goal is to work towards becoming one of the leading Wi-Fi hotspot brand in the whole of South Africa and in the nearest future compete with leaders in the industry.",
    url: "https://wi-fi-cafe.netlify.app",
  },
];

export const projectCard = (project) => (
  <div className="basis-1/3 flex-1">
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#image">
        <img class="rounded-t-lg" src={project.src} alt="project" />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.summary}
        </p>
        <a
          href={project.url}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Go to {project.title}
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
);
