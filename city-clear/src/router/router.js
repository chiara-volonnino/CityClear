import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/district-login',
      name: 'district-login',
      component: () => import('../components/DistrictLogin.vue')
    },
    {
      path: '/map/:address',
      name: 'map',
      component: () => import('../components/DecorMap.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../components/DecorMap.vue')
    },
    {
      path: '/urban-decore-tag',
      name: 'urban-decore-tag',
      component: () => import('../components/UrbanDecorTag.vue')
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: () => import('../components/UserProfile.vue')
    }, 
    {
      path: '/add',
      name: 'add-marker',
      component: () => import('../components/AddMarker.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('../components/Forum.vue')
    },
    {
      path: '/avatar',
      name: 'avata',
      component: () => import('../components/Avatar.vue')
    }
  ]
})
