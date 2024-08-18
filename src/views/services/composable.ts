import { computed } from "vue";
import { useI18n } from "vue-i18n";
export function useServiceCard() {
  const {t} = useI18n()
  const serviceCards = computed(() => [
    {
      id: 0,
      title: t('ourServices.marketing'),
      img: '/service/marketing.jpg',
      info1: t('services.marketing')
    },
    {
      id: 1,
      title: t('ourServices.moliya'),
      img: '/service',
      info1: t('services.finance.info1'),
      info2: t('services.finance.info2')
    },
    {
      id: 2,
      title: t('ourServices.buxgalteriya'),
      img: '/service',
      info1: t('services.accounting.info1'),
      info2: t('services.accounting.info2')
    },
    {
      id: 3,
      title: t('ourServices.arxitektura'),
      img: '/service',
      info1: t('services.architecture.info1'),
      info2: t('services.architecture.info2')
    },
    {
      id: 4,
      title: t('ourServices.qurilish'),
      img: '/service',
      info1: t('services.construction.info1'),
      info2: t('services.construction.info2')
    },
    {
      id: 5,
      title: t('ourServices.it'),
      img: '/service',
      info1: t('services.it.info1'),
      info2: t('services.it.info2')
    },
    {
      id: 6,
      title: t('ourServices.kamera'),
      img: '/service',
      info1: t('services.camera.info1')
    }
  ])
  return{
    serviceCards
  }
}
    