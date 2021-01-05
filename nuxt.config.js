export default {
  // Auto-load components/
  components: true,
  modules: ["@nuxtjs/style-resources"],
  buildModules: ["@nuxtjs/tailwindcss"],
  router: {
    linkActiveClass: "text-gray-900",
  },
};
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
// };
