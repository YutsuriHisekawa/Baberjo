export default {
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
      }
    ]
  }
}