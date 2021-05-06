import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import France from './components/France.vue'


Vue.use(Router)

export default
new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/france', component: France},
  ]
})