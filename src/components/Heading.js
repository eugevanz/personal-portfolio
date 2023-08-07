import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Heading() {
  return (
    <section class="bg-white dark:bg-gray-900 mb-80 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div class="py-16 max-w-3xl lg:py-40 z-10 relative">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Visual Interaction Developer Designer{" "}
          <img
            className="rounded-full w-16  inline-block"
            src={`${process.env.PUBLIC_URL}/eugeva.jpeg`}
            alt="eugeva"
          />
          .
        </h1>
        <p class="my-8 text-lg max-w-xl font-normal text-gray-500 lg:text-xl dark:text-gray-200">
          Hi, I'm Eugene Van Zyl. I provide strategic user facing solutions for
          applications and designer content. Join me down below on this EPIC
          journey!
          <a
            href="https://www.linkedin.com/in/eugene-van-zyl-a4218729"
            className="inline-block mx-2"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://github.com/eugevanz" className="inline-block mx-2">
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://twitter.com/ADevNamedGeenas"
            className="inline-block mx-2"
          >
            <FaTwitter></FaTwitter>
          </a>
        </p>
        <form class="w-full max-w-md mt-12">
          <label
            for="default-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Email sign-up
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
      <div class="bg-gradient-to-b from-teal-50 to-transparent dark:from-teal-600 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
export default Heading;
