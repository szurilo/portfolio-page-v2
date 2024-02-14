<script>
  import "../app.pcss";
  import "./styles-main.pcss";
  import UilAngleLeft from "virtual:icons/uil/angle-left";
</script>

<div
  class="relative items-top justify-center min-h-screen sm:items-center text-white p-4 sm:p-6 lg:p-8 bg-gradient-radial from-gray-900 to-black"
>
  <a
    class="text-4xl font-bold bg-clip-text bg-gradient-to-r from-neon to-white inline"
    href="/"
  >
    <UilAngleLeft class="text-4xl" />
  </a>
  <nav class="flex max-w-4xl mx-auto">
    <a
      class="text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-neon to-white"
      href="/"
    >
      József Tar
    </a>
    <a
      class="leading-10 pl-14 rounded transition duration-500 hover:text-gray-400"
      href="mailto:szurilo@gmail.com"
    >
      Contact me: szurilo@gmail.com
    </a>
  </nav>

  <slot />

  <div class="flex justify-center pt-4 space-x-2">
    <a href="https://github.com/szurilo">
      <svg
        class="w-6 h-6 text-gray-600 transition duration-500 hover:text-gray-400 button--github"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
          fill="currentColor"
        />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/jozseftar/" target="_blank">
      <svg
        class="w-6 h-6 text-gray-600 transition duration-500 hover:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  </div>
</div>
