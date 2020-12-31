export default {
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
      scss: [
        './assets/scss/vars/*.scss',
        ]
    },
    css: [
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/fontawesome-all.min.css',
        '~/assets/scss/style.scss'
    ],
    js:[
        '~/assets/js/bootstrap.min.js'
    ]
};
