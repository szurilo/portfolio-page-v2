<script>
  /**
   * @type {any}
   */
  export let card;
</script>

<a
  href={card.projectUrl}
  target="_blank"
  class="neon-shadow flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-16 w-100 mx-2"
>
  <div class="h-64 w-auto md:w-1/2">
    <img
      class="inset-0 h-full w-full object-cover object-top"
      src={card.bgImage}
      alt={card.title}
    />
  </div>
  <!-- content -->
  <div
    class="w-full py-4 px-6 bg-gray-800 text-white flex flex-col justify-between"
  >
    <div class="flex justify-between mb-5 lg:mb-0">
      <h3 class="font-semibold text-2xl leading-tight truncate">
        {card.title}
      </h3>
      <span class="transform rotate-45 mt-8">{card.contribution}</span>
    </div>
    <p class="mt-2">
      {card.description}
    </p>
    <div class="flex items-center justify-between">
      <div class="text-sm">
        <p class="mt-2">
          {card.tasks}
        </p>
        <p
          class="text-sm text-gray-400 uppercase tracking-wide font-semibold mt-2"
        >
          {card.stack} &bull; {card.year}
        </p>
      </div>
      {#if card.githubURL}
        <a href={card.githubURL}>
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
      {/if}
    </div>
  </div>
</a>
