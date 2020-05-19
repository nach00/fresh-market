// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ffc573',
        secondary: '#3a7237',
        tertiary: '#6e8f60',
        accent: '#a0c391',
      },
    },
  },
})
