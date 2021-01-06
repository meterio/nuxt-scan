export default {
  // Auto-load components/
  components: true,
  modules: ["@nuxtjs/style-resources"],
  buildModules: ["@nuxtjs/tailwindcss"],
  router: {
    linkExactActiveClass: "text-indigo-700",
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/axios"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // Set the baseURL to JSONPlaceholder API
    baseURL: "http://bridge-api.meter.io:5000/api/",
  },

  //     styleResources: {
  //       scss: [
  //         './assets/scss/vars/*.scss',
  //         ]
  //     },
  //     css: [
  //         '~/assets/css/bootstrap.min.css',
  //         '~/assets/css/fontawesome-all.min.css',
  //         '~/assets/scss/style.scss'
  //     ],
  //     js:[
  //         '~/assets/js/bootstrap.min.js'
  //     ]
};
