import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './vuetify'
import router from './router'
import store from './store'
import i18n from './i18n'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'

Vue.use(VueCompositionApi)

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
