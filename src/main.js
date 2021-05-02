import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/Number.vue'


Vue.config.productionTip = false
Vue.component('Num', LikeNumber);
Vue.directive('border', function(el, binding) {
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  el.style.borderStyle = binding.arg
})

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('app');
