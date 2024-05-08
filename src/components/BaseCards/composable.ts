import { type Services } from '@/interfaces'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useServicesPage() {
  const { t } = useI18n()
  const services = ref<Services[]> ([
    {
      id: 1,
      icon: '/services/marketing.png',
      num: "Investitsiyalar va moliyalashtirishni jalb qilish, savdoni moliyalashtirish xizmatlari, eksport-import operatsiyalari, Tenderlarni qo'llab quvvatlash va xorijiy kompaniyalar manfaatlarini ifodalash",
      name: t('ourServices.marketing')
    },
    {
      id: 2,
      icon: '/services/finance.png',
      num: 'Moliyaviy modellashtirish, kompaniyaning moliyaviy holati tahlili xizmatlari bor',
      name: 'Moliya'
    },
    {
      id: 3,
      icon: '/services/accounting.png',
      num: "Buxgalteriya hisobini yo'lga qo'yish, buxgalteriya hisobini tiklash, hisobotlarni topshirish",
      name: 'Buxgalteriya'
    },
    {
      id: 4,
      icon: '/services/architecture.png',
      num: "Arxitektura-dizayn xizmatlari, me'moriy loyihalash, landshaft dizayni xizmatlari, fasadni bezatish, loyiha-smeta hujjatlarini tayyorlash va ishlab chiqish",
      name: 'Arxitektura'
    },
    {
      id: 5,
      icon: '/services/construction.png',
      num: "Ta'mirlash-qurilish xizmatlari, sanoat obyektlarini qurish, loyiha-qurilish xizmatlari, ko'chmas mulkni obodonlashtirish, boshqa qurilish xizmatlari",
      name: 'Qurilish'
    },
    {
      id: 6,
      icon: '/services/it.png',
      num: 'Vebsayt yaratish, Internet magazin, reklama sayti, (Frontend, Backend, Dizayn)',
      name: 'IT'
    },
    {
      id: 6,
      icon: '/services/camera.png',
      num: 'Vebsayt yaratish, Internet magazin, reklama sayti, (Frontend, Backend, Dizayn)',
      name: "Kamera o'rnatish"
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