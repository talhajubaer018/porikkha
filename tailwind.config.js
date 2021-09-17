  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors: {
           customBlue: {
             500: "#5AADFF",
             600: "#80D3FF",
             800: "#427EB9",
             1000: "#1E3F5A"
           },
         },
         maxWidth: {
          '75': '75%',
         },
         backgroundImage: {
           'home-bg': "url('/assets/images/home-bg.png')",
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }