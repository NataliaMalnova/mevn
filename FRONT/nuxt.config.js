export default {
  ssr: true,

  server: {
    port: 3001,
    host: "localhost",
  },

  env: {
    baseUrl: 'http://localhost:3001',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pet project',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "theme-color",
        content: "#000000"
      }, {
        name: "format-detection",
        content: "telephone=no"
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    'swiper/swiper-bundle.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/reset.scss',
    '@/assets/scss/fonts.scss',
    '@/assets/scss/classes.scss'
  ],

  styleResources: {
    scss: [
      `@/assets/scss/variables.scss`,
      `@/assets/scss/layout-default.scss`,
      `@/assets/scss/layout-admin.scss`,
      `@/assets/scss/app-basic.scss`,
      `@/assets/scss/layout-visually.scss`,
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    'lodash',
    // [
    //   '@nuxtjs/yandex-metrika',
    //   {
    //     id: '',
    //     webvisor: true,
    //     // clickmap: true,
    //     // useCDN: false,
    //     // trackLinks: true,
    //     // accurateTrackBounce: true,
    //   }
    // ]

  ],

  sitemap: {
    hostname: '/',
    exclude: [
      "login",
      "/admin/**",
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //baseURL: 'http://localhost:3001',
    // proxy: true
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    transpile: [/^element-ui/],
  },
}
