<script>
  import Card from "../Card.svelte";

  let cards = [
    {
      projectUrl: "https://jozseftar.netlify.app/",
      id: 0,
      bgImage: "portfolio-page.jpg",
      title: "This current web page",
      contribution: "Solo work",
      description:
        "Portfolio page to demonstrate my skills and other projects.",
      tasks: "UI/UX design, development, hosting, maintenance.",
      stack: "SvelteKit, TailwindCSS, PostCSS, Netlify",
      githubURL: "https://github.com/szurilo/portfolio-page-v2",
      year: 2024,
    },
    {
      id: 1,
      bgImage: "OTP-newsletter-admin.jpg",
      title: "OTP Global Markets Newsletter Admin",
      contribution: "Solo work",
      description:
        "A back office bank application that offers administrators to create, edit and send out newsletters to subscribers.",
      tasks: "UI/UX design, development, maintenance.",
      stack:
        "Angular, Angular Material, TailwindCSS, Spring Boot, Java, Oracle DB",
      year: 2023,
    },
    {
      projectUrl: "https://www.tarengineering.hu/",
      id: 2,
      bgImage: "tarengineering.jpg",
      title: "Tar Engineering",
      contribution: "Solo work",
      description:
        "Small business page with responsive mobile first design. Rendered by SSG with excellent SEO. Google Maps integration, contact form.",
      tasks: "UI/UX design, development, hosting, maintenance.",
      stack: "Nuxt.js, Vue.js, TailwindCSS, Netlify, Serverless Functions",
      githubURL: "https://github.com/szurilo/tarcomp",
      year: 2021,
    },
    {
      projectUrl: "https://otpbusiness.hu/face-ui/lobby/landing#!landing",
      id: 3,
      bgImage: "OTP_business.jpg",
      title: "OTP Business",
      contribution: "Team work",
      description:
        "A bank application that offers entrepreneurs to open their business account online.",
      tasks: "Frontend development",
      stack: "Angular, Bootstrap, Typescript, Spring Boot, Java",
      year: 2021,
    },
    {
      projectUrl: "https://web-rtc-videochat-indol.vercel.app/",
      id: 4,
      bgImage: "chat-app.jpg",
      title: "Video chat",
      contribution: "Solo work",
      description: "Showcase of a basic video chat app.",
      tasks: "UI/UX design, development, hosting, maintenance.",
      stack: "WebRTC, Firebase, Vite, Vanilla JS, TailwindCSS, Vercel",
      githubURL: "https://github.com/szurilo/WebRTC-videochat",
      year: 2022,
    },
  ];
</script>

<div class="max-w-4xl mx-auto">
  {#each cards as card}
    <Card {card}></Card>
  {/each}
</div>
