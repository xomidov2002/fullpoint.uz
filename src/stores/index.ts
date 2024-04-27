import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n';
import { type NavLink } from '@/interfaces'
interface StateHeader {
  ipadNavs: boolean
  allMenus: boolean
  navLinks: NavLink[]
  phoneView: number
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    const { t } = useI18n();
    return {
      phoneView: 1,
      ipadNavs: false,
      allMenus: false,
      navLinks: [
        {
          id: 1,
          name: t('navbar.mainPage'),
          path: '/',
        },
        {
          id: 2,
          name: t('navbar.projects'),
          path: '/projects',
        },
        {
          id: 3,
          name: t('navbar.services'),
          path: '/services',
        },
        {
          id: 4,
          name: t('navbar.clients'),
          path: '/clients',
        },
        {
          id: 5,
          name: t('navbar.contact'),
          path: '/contact',
        }
      ]
    }
  }
})
