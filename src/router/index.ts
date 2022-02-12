import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@v/home.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('@v/preview.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
