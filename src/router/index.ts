import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/mainPage.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/views/clients/index.vue')
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/clients/marketing.vue')
    }
  ]
})

export default router
