import { type ServiceCard, type Templates } from '@/interfaces'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function usePracticePage() {
  const { t } = useI18n()
  
  const serviceCard = computed(() => [
    {
      id: 1,
      img: '/main.jpg',
      title: t('ourServices.marketing'),
      subtitle: t('ourServices.marketingTitle'),
      btn: t('table.info'),
      route: "/projects/marketing"
    },
    {
      id: 2,
      img: '/main.jpg',
      title: t('ourServices.moliya'),
      subtitle: t('ourServices.moliyaTitle'),
      btn: t('table.info'),
      route: "/projects/moliya"
    },
    {
      id: 3,
      img: '/main.jpg',
      title: t('ourServices.buxgalteriya'),
      subtitle: t('ourServices.buxgalteriyaTitle'),
      btn: t('table.info'),
      route: "/projects/buxgalteriya"
    },
    {
      id: 4,
      img: '/main.jpg',
      title: t('ourServices.arxitektura'),
      subtitle: t('ourServices.arxitekturaTitle'),
      btn: t('table.info'),
      route: "/projects/arxitektura"
    },
    {
      id: 5,
      img: '/main.jpg',
      title: t('ourServices.qurilish'),
      subtitle: t('ourServices.qurilishTitle'),
      btn: t('table.info'),
      route: "/projects/qurilish"
    },
    {
      id: 6,
      img: '/main.jpg',
      title: t('ourServices.it'),
      subtitle: t('ourServices.itTitle'),
      btn: t('table.info'),
      route: "/projects/it"
    },
    {
      id: 7,
      img: '/main.jpg',
      title: t('ourServices.kamera'),
      subtitle: t('ourServices.kameraTitle'),
      btn: t('table.info'),
      route: "/projects/kamera"
    }
  ])

  return {
    serviceCard
  }
}

