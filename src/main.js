import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/Number.vue'

Vue.config.productionTip = false
Vue.component('Num', LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('app');
