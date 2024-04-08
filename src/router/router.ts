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
            component: () => import('@/views/services/serviceName/marketing/marketingMain.vue'),
            children: [
              {
                path: '',
                name: 'Marketing main',
                component: () => import('@/views/services/serviceName/marketing/marketing.vue')
              },
              {
                path: ':id',
                name: 'one of  marketing',
                component: () => import('@/views/services/serviceName/marketing/baseInfo.vue')
              }
            ]
          },
          {
            path: 'moliya',
            component: () => import('@/views/services/serviceName/moliya/moliyaMain.vue'),
            children: [
              {
                path: '',
                name: 'Moliya main',
                component: () => import('@/views/services/serviceName/moliya/moliya.vue')
              },
              {
                path: ':id',
                name: 'one of finance',
                component: () => import('@/views/services/serviceName/moliya/baseInfo.vue')
              }
            ]
          },
          {
            path: 'buxgalteriya',
            component: () => import('@/views/services/serviceName/buxgalteriya/buxgalteriyaMain.vue'),
            children: [
              {
                path: '',
                name: 'Buxgalteriya main',
                component: () => import('@/views/services/serviceName/buxgalteriya/buxgalteriya.vue')
              },
              {
                path: ':id',
                name: 'one of accounting',
                component: () => import('@/views/services/serviceName/buxgalteriya/baseInfo.vue')
              }
            ]
          },
          {
            path: 'arxitektura',
            component: () => import('@/views/services/serviceName/arxitektura/arxitekturaMain.vue'),
            children: [
              {
                path: '',
                name: 'Arxitektura main',
                component: () => import('@/views/services/serviceName/arxitektura/arxitektura.vue')
              },
              {
                path: ':id',
                name: 'one of architecture',
                component: () => import('@/views/services/serviceName/arxitektura/baseInfo.vue')
              }
            ]
          },
          {
            path: 'qurilish',
            component: () => import('@/views/services/serviceName/qurilish/qurilishMain.vue'),
            children: [
              {
                path: '',
                name: 'Qurilish main',
                component: () => import('@/views/services/serviceName/qurilish/qurilish.vue')
              },
              {
                path: ':id',
                name: 'one of construction',
                component: () => import('@/views/services/serviceName/qurilish/baseInfo.vue')
              }
            ]
          },
          {
            path: 'it',
            component: () => import('@/views/services/serviceName/dasturlash/itMain.vue'),
            children: [
              {
                path: '',
                name: 'It main',
                component: () => import('@/views/services/serviceName/dasturlash/it.vue')
              },
              {
                path: ':id',
                name: 'one of  it',
                component: () => import('@/views/services/serviceName/dasturlash/baseInfo.vue')
              }
            ]
          },
          {
            path: 'kamera',
            component: () => import('@/views/services/serviceName/kamera/kameraMain.vue'),
            children: [
              {
                path: '',
                name: 'Kamera main',
                component: () => import('@/views/services/serviceName/kamera/kamera.vue')
              },
              {
                path: ':id',
                name: 'one of camera',
                component: () => import('@/views/services/serviceName/kamera/baseInfo.vue')
              }
            ]
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
