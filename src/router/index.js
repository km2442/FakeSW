import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../components/List.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.isUserAuthenticated) {
        next();
      }
      else {
        next('/login');
      }
    }
  },
  { path: '*', redirect: '/login' }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
