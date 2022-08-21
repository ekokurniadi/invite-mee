export default {
 // Global page headers: https://go.nuxtjs.dev/config-head
 head: {
  title: 'Undangan Pernikahan Online',
  htmlAttrs: {
      lang: 'en',
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
    {
      hid: 'title',
      name: 'title',
      content: `Undangan Pernikahan Online`,
    },
    {
      hid: 'author',
      name: 'author',
      content: 'nikahan',
    },
    {
      hid: 'language',
      name: 'language',
      content: 'Indonesia',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'undangan,pernikahan,online,website,wedding,invitation',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `Undangan Pernikahan Online`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Undangan Pernikahan Online',
    },
  ],
  link: [
      { rel: 'icon', type: 'image/x-icon', href: '/invitation.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tangerine&display=swap' }
  ],
  script: [
      { src: "//cdn.jsdelivr.net/npm/sweetalert2@11" },
      { src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" }
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/website.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
