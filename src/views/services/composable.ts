import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";
export function useServiceCard() {
  const {t} = useI18n()
  const serviceCards = computed(() => [
    {
      id: 0,
      title: t('ourServices.marketing'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.',
      info1: t('services.marketing')
    },
    {
      id: 1,
      title: t('ourServices.moliya'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.',
      info1: t('services.finance.info1'),
      info2: t('services.finance.info2')
    },
    {
      id: 2,
      title: t('ourServices.buxgalteriya'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.',
      info1: t('services.accounting.info1'),
      info2: t('services.accounting.info2')
    },
    {
      id: 3,
      title: t('ourServices.arxitektura'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 4,
      title: t('ourServices.qurilish'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 5,
      title: t('ourServices.it'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 6,
      title: t('ourServices.kamera'),
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    }
  ])
  return{
    serviceCards
  }
}
    