import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/mainPage.vue')
      // component: () => import('@/components/Spinner.vue')
    }
  ]
})

export default router
