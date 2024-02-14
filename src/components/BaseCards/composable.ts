import { type Services } from '@/interfaces'
import { ref } from 'vue'

export function useServicesPage() {
  const services = ref<Services[]> ([
    {
      id: 1,
      icon: '/services/marketing.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Marketing'
    },
    {
      id: 2,
      icon: '/services/finance.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Finance'
    },
    {
      id: 3,
      icon: '/services/accounting.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Accounting'
    },
    {
      id: 4,
      icon: '/services/architecture.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Architecture'
    },
    {
      id: 5,
      icon: '/services/construction.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Construction'
    },
    {
      id: 6,
      icon: '/services/it.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'IT'
    },
    {
      id: 7,
      icon: '/services/service.png',
      num: 'When using shadows on a colored background, colored shadows can often look more natural than the default black-based shadows, which tend to appear gray and washed-out.',
      name: 'Services'
    }
  ])
  return {
    services
  }
}