import Vue from 'vue'
import App from './App.vue'
import number from './components/number.vue'

Vue.config.productionTip = false
Vue.component('LikeNum', number);

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('app');
