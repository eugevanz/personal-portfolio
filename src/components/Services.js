import { FaPencilAlt, FaNetworkWired, FaCode } from "react-icons/fa";
import {
  skillsRow,
  skills,
  databaseRow,
  databaseSkills,
  devSkills,
  devRow,
  softwareSkills,
  softwareRow,
} from "../data/data_services";

function Services() {
  return (
    <section className="py-40">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-300">Services I Offer</h3>
        <p className="text-md py-2 max-w-3xl leading-8 text-gray-800 dark:text-gray-500">
          Front-end developers are responsible for the appearance and
          functionality of a website's user interface (UI). They use HTML, CSS,
          and JavaScript to create web pages that are visually appealing,
          user-friendly, and responsive.
        </p>
        <p className="text-md py-2 max-w-3xl leading-8 text-gray-800 dark:text-gray-500">
          Since the beginning of my journey as a freelance design and developer,
          I've done work for <span className="text-teal-600">startups</span> and
          collaborated with{" "}
          <span className="text-teal-700">talented people</span> to create
          digital products for both business and consumer use.
        </p>
        <p className="text-md py-2 max-w-3xl leading-8 text-gray-800 dark:text-gray-500">
          Using cutting-edge web technologies, I have provided interface
          solutions to unique projects such as{" "}
          <span className="text-teal-600">facial recognition</span> and{" "}
          <span className="text-teal-600">object detection technologies</span>,{" "}
          <span className="text-teal-600">3D web applications</span>, and{" "}
          <span className="text-teal-600">SQL database</span> services.
        </p>
      </div>

      <div class="grid gap-4 my-20 md:grid-cols-3">
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <FaPencilAlt className="text-3xl mb-4 text-gray-200"></FaPencilAlt>
          <a href="#Beautiful Designs">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Beautiful Designs
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            I build beautiful, user-friendly web applications using HTML, CSS,
            and JavaScript. I have a strong understanding of web design
            principles and can create websites that are both visually appealing
            and functional. I also have experience with a variety of front-end
            frameworks, such as React, Angular, and Vue.js.
          </p>
        </div>

        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <FaNetworkWired className="text-3xl mb-4 text-gray-200"></FaNetworkWired>
          <a href="#Mobile First">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Mobile First
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            I can create responsive websites that look great on any device.
            Whether your users are on a desktop computer, laptop, tablet, or
            smartphone, your website will look and function perfectly. I employ
            simple and easy-to-follow trusted and true techniques such as:
          </p>
          <ul class="list-disc mx-3 text-gray-500 dark:text-gray-400">
            <li>
              Collaborate with designers to create visually appealing and
              user-friendly interfaces.
            </li>
            <li>
              Stay up-to-date on the latest front-end technologies and trends.
            </li>
          </ul>
        </div>

        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <FaCode className="text-3xl mb-4 text-gray-200"></FaCode>
          <a href="#Maintenance">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Maintenance
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            I can provide ongoing support and maintenance for your website. I
            can make sure that your website is always up and running and that it
            is secure from attacks. I am committed to providing my clients with
            the best possible service. I am available to answer your questions,
            provide support, and make changes to your web applications as
            needed.
          </p>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Curated Skills
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The skills that Eugene Van Zyl possesses, along with their level
              of proficiency in each skill. The skills can be technical, soft,
              or both. The level of proficiency can be rated on a scale of
              beginner, intermediate, or expert, as determined by the length of
              time used.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["", "Framework", "Purpose", "First used", "Last used"].map(
                (item) => (
                  <th scope="col" class="px-6 py-3">
                    {item}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>{skills.map((item) => skillsRow(item))}</tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["Databases", "Type", "First used", "Last used"].map((item) => (
                <th scope="col" class="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{databaseSkills.map((item) => databaseRow(item))}</tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {[
                "Dev Technologies",
                "Type",
                "Similar to",
                "First used",
                "Last used",
              ].map((item) => (
                <th scope="col" class="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{devSkills.map((item) => devRow(item))}</tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {[
                "Software Packages",
                "Type",
                "Similar to",
                "First used",
                "Last used",
              ].map((item) => (
                <th scope="col" class="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{softwareSkills.map((item) => softwareRow(item))}</tbody>
        </table>
      </div>
    </section>
  );
}
export default Services;
