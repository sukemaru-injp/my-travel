import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


Vue.config.productionTip = false
Vue.filter('upperCase', function(val) {
  return val.toUpperCase();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
