export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'African Safari Animals in action at their best | Animal Action Safaris',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "p:domain_verify", content:"390b450047e04450b6b650357cdf4d19" } // pinterest meta
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file for the whole project
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/fontawesome.js', mode: 'client' },
    { src: '@/plugins/tawk.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        solid: ['faSpinner', 'faPaw', 'faHeadset', 'faMapMarkerAlt', 'faAngleRight', 
          'faPhoneAlt', 'faUserSecret', 'faCircleNotch', 'faBars'],
        regular: ['faBuilding'],
        brands: ['faFacebook', 'faInstagram', 'faWhatsapp','faSkype','faLinkedin']
      }
    }],
    ['nuxt-facebook-pixel-module', {
      track: 'PageView',
      pixelId: 'ID567931921428297',
      autoPageView: true,
      disabled: false
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics'
    // ['@nuxtjs/google-fonts', {
    //   googleFonts: {
    //     families: {
    //       'Dancing+Script': true,
    //       Licorice: true,
    //       'Noto+Serif': true,
    //       'Square+Peg': true,
    //       'Yanone+Kaffeesatz': true,
    //       Lato: [100, 300],
    //       Raleway: {
    //         wght: [100, 400],
    //         ital: [100]
    //       },
    //     },
    //     display: 'swap',
    //     // preconnect: true,
    //     // prefetch: true,
    //     // preload: true
    //     download: true,
    //     base64: false,
    //     fontsDir: 'fonts',
    //     inject: true,
    //     overwriting: false,
    //     // outputDir: '~assets/css',
    //     // stylePath: 'css/fonts.css',
    //     // fontsPath: '~assets/fonts'
    //   }
    // }]
  ],
  // Google Analytics configurations
  googleAnalytics: {
    id: 'G-1KSY3YVCRX'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: ''
  },
  // loading progress bar
  loading: {
    padding: '10px',
    color: 'orange',
    height: '2px',
    continuous: true
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  }
}
