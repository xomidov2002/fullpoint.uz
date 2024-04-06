export const routers = [
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
        component: () => import('@/views/services/main.vue'),
        children: [
          {
            path: '',
            name: 'main',
            component: () => import('@/views/services/index.vue')
          },
          {
            path: 'marketing',
            component: () => import('@/views/services/serviceName/marketingMain.vue'),
            children: [
              {
                path: '',
                name: 'Marketing main',
                component: () => import('@/views/services/serviceName/marketing.vue')
              },
              {
                path: ':id',
                name: 'one of  upcoming-event',
                component: () => import('@/views/services/serviceName/baseInfo.vue')
              }
            ]
          },
          {
            path: 'moliya',
            component: () => import('@/views/services/serviceName/moliya.vue')
          },
          {
            path: 'buxgalteriya',
            component: () => import('@/views/services/serviceName/buxgalteriya.vue')
          },
          {
            path: 'arxitektura',
            component: () => import('@/views/services/serviceName/arxitektura.vue')
          },
          {
            path: 'qurilish',
            component: () => import('@/views/services/serviceName/qurilish.vue')
          },
          {
            path: 'it',
            component: () => import('@/views/services/serviceName/it.vue')
          },
          {
            path: 'kamera',
            component: () => import('@/views/services/serviceName/kamera.vue')
          },
          {
            path: 'boshqa_servislar',
            component: () => import('@/views/services/serviceName/boshqa_servislar.vue')
          }
        ]
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
