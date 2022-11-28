import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../components/home/Home.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../components/main/Main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
