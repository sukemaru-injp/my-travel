import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import France from './views/France.vue'
import Thai from './views/Thai.vue'
import Portugal from './views/Portugal.vue'
import Yakushima from './views/Yakushima.vue'
import Spain from './views/Spain.vue'
import UnitedKingdom from './views/Uk.vue'
import Belgium from './views/Belgium.vue'
import Taiwan from './views/Taiwan.vue'
import Okayama from './views/Okayama.vue'
import Coming from './views/Coming.vue'
import HongKong from './views/HongKong.vue'



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
    {path: '/belgium', component: Belgium},
    {path: '/taiwan', component: Taiwan},
    {path: '/okayama', component: Okayama},
    {path: '/coming', component: Coming},
    {path: '/hongkong', component: HongKong},
  ]
})