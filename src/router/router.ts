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
        component: () => import('@/views/services/index.vue')
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/views/projects/main.vue'),
        children: [
          {
            path: '',
            name: 'main',
            component: () => import('@/views/projects/index.vue')
          },
          {
            path: 'marketing',
            component: () => import('@/views/projects/projectName/marketing/marketingMain.vue'),
            children: [
              {
                path: '',
                name: 'Marketing main',
                component: () => import('@/views/projects/projectName/marketing/marketing.vue')
              },
              {
                path: ':id',
                name: 'one of  marketing',
                component: () => import('@/views/projects/projectName/marketing/baseInfo.vue')
              }
            ]
          },
          {
            path: 'moliya',
            component: () => import('@/views/projects/projectName/moliya/moliyaMain.vue'),
            children: [
              {
                path: '',
                name: 'Moliya main',
                component: () => import('@/views/projects/projectName/moliya/moliya.vue')
              },
              {
                path: ':id',
                name: 'one of finance',
                component: () => import('@/views/projects/projectName/moliya/baseInfo.vue')
              }
            ]
          },
          {
            path: 'buxgalteriya',
            component: () => import('@/views/projects/projectName/buxgalteriya/buxgalteriyaMain.vue'),
            children: [
              {
                path: '',
                name: 'Buxgalteriya main',
                component: () => import('@/views/projects/projectName/buxgalteriya/buxgalteriya.vue')
              },
              {
                path: ':id',
                name: 'one of accounting',
                component: () => import('@/views/projects/projectName/buxgalteriya/baseInfo.vue')
              }
            ]
          },
          {
            path: 'arxitektura',
            component: () => import('@/views/projects/projectName/arxitektura/arxitekturaMain.vue'),
            children: [
              {
                path: '',
                name: 'Arxitektura main',
                component: () => import('@/views/projects/projectName/arxitektura/arxitektura.vue')
              },
              {
                path: ':id',
                name: 'one of architecture',
                component: () => import('@/views/projects/projectName/arxitektura/baseInfo.vue')
              }
            ]
          },
          {
            path: 'qurilish',
            component: () => import('@/views/projects/projectName/qurilish/qurilishMain.vue'),
            children: [
              {
                path: '',
                name: 'Qurilish main',
                component: () => import('@/views/projects/projectName/qurilish/qurilish.vue')
              },
              {
                path: ':id',
                name: 'one of construction',
                component: () => import('@/views/projects/projectName/qurilish/baseInfo.vue')
              }
            ]
          },
          {
            path: 'it',
            component: () => import('@/views/projects/projectName/dasturlash/itMain.vue'),
            children: [
              {
                path: '',
                name: 'It main',
                component: () => import('@/views/projects/projectName/dasturlash/it.vue')
              },
              {
                path: ':id',
                name: 'one of  it',
                component: () => import('@/views/projects/projectName/dasturlash/baseInfo.vue')
              }
            ]
          },
          {
            path: 'kamera',
            component: () => import('@/views/projects/projectName/kamera/kameraMain.vue'),
            children: [
              {
                path: '',
                name: 'Kamera main',
                component: () => import('@/views/projects/projectName/kamera/kamera.vue')
              },
              {
                path: ':id',
                name: 'one of camera',
                component: () => import('@/views/projects/projectName/kamera/baseInfo.vue')
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
