import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/login.vue'
import Main from '../views/Main.vue'
import Search from '../views/Search.vue'
import TuiJian from '../views/TuiJianMusic.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Main'
    },

    {
      path: '/login',
      component: login
    },
    {
      path: '/Main',
      component: Main,
      children: [{
        path: '/Main/home',
        component: home
      }, {
        path: '/Main/Liest',
        component: TuiJian
      }, {
        path: '/Main/Search',
        component: Search
      }]
    }
  ]
})