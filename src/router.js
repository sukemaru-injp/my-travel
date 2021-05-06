import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import France from './views/France.vue'
import Thai from './views/Thai.vue'



Vue.use(Router)

export default
new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/france', component: France},
    {path: '/thai', component: Thai},
  ]
})