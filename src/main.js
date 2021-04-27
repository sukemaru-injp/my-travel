import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/Number.vue'
import NextHeader from './components/NextHeader.vue'


Vue.config.productionTip = false
Vue.component('Num', LikeNumber);
Vue.component('Next', NextHeader);

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('app');
