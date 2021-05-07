import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import France from './views/France.vue'
import Thai from './views/Thai.vue'
import Portugal from './views/Portugal.vue'
import Yakushima from './views/Yakushima.vue'
import Spain from './views/Spain.vue'
import UnitedKingdom from './views/Uk.vue'




Vue.use(Router)

export default
new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/france', component: France},
    {path: '/thai', component: Thai},
    {path: '/portugal', component: Portugal},
    {path: '/yakushima', component: Yakushima},
    {path: '/spain', component: Spain},
    {path: '/uk', component: UnitedKingdom},

  ]
})