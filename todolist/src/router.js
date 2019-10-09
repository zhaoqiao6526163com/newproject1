import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login'
import Reg from './components/reg'

import about from './views/About'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    
  ]
})
