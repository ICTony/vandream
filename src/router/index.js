import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

//导入子路由
import dashboard from './dashboard'
import about from './about'
import approvalList from './approvalList'
import todoList from './todoList'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: resolve => { require(['@/views/dashboard/dashboard'],resolve)},
      direct:dashboard
    },
    ...dashboard,
    ...about,
    ...approvalList,
    ...todoList
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: Home
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
