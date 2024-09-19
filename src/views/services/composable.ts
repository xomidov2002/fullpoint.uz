import { computed } from "vue";
import { useI18n } from "vue-i18n";
export function useServiceCard() {
  const {t} = useI18n()
  const serviceCards = computed(() => [
    {
      id: 0,
      title: t('ourServices.marketing'),
      icon: 'marketing',
      info1: t('services.marketing')
    },
    {
      id: 1,
      title: t('ourServices.moliya'),
      icon: 'finance',
      info1: t('services.finance.info1'),
      info2: t('services.finance.info2')
    },
    {
      id: 2,
      title: t('ourServices.buxgalteriya'),
      icon: 'accounting',
      info1: t('services.accounting.info1'),
      info2: t('services.accounting.info2')
    },
    {
      id: 3,
      title: t('ourServices.arxitektura'),
      icon: 'teo',
      info1: t('services.architecture.info1'),
      info2: t('services.architecture.info2')
    },
    {
      id: 4,
      title: t('ourServices.qurilish'),
      icon: 'sale',
      info1: t('services.construction.info1'),
      info2: t('services.construction.info2')
    },
    {
      id: 5,
      title: t('ourServices.it'),
      icon: 'it',
      info1: t('services.it.info1'),
      info2: t('services.it.info2')
    },
    {
      id: 6,
      title: t('ourServices.kamera'),
      icon: 'business',
      info1: t('services.camera.info1')
    }
  ])
  return{
    serviceCards
  }
}
    