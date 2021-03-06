import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.filter('upperCase', function(val) {
  return val.toUpperCase();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
