import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/Number.vue'


Vue.config.productionTip = false
Vue.component('Num', LikeNumber);
Vue.directive('border', function(el, binding) {
  el.style.border = "solid black 2px"
  el.style.borderWidth = binding.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('app');
