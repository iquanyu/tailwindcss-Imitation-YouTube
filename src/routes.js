import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Explore from './pages/feed/Explore.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: Home
    },
    {
      path: '/feed/explore',
      name: 'explore',
      component: Explore
    },
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
 
export default router
