import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('../views/home/mainPage.vue')
        },
        {
          path: 'clients',
          name: 'Our clients',
          component: () => import('@/views/clients/index.vue')
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/views/services/index.vue')
        },
        {
          path: 'contact',
          name: 'Contact us',
          component: () => import('@/views/home/contact.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/notFoundPage.vue')
    }
  ]
})

export default router
