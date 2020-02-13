import Vue from 'vue'
import Router from 'vue-router'
import { isMobile } from "./utils/ua";
console.log('===', isMobile);

if(isMobile) import('./utils/rem');

let loadView = viewName => isMobile ? import('./views/mobile/' + viewName) : import('./views/pc/' + viewName);

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => loadView('Home.vue')
    },
    {
      path: '/applicationscenaios',
      name: 'applicationscenaios',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => loadView('ApplicationScenarios.vue')
    },
    {
      path: '/newsList',
      name: 'newsList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => loadView('NewsList.vue')
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => loadView('NewsDetail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
