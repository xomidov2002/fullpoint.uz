import { defineStore } from 'pinia'
import { type NavLink } from '@/interfaces'
interface StateHeader {
  ipadNavs: boolean
  allMenus: boolean
  navLinks: NavLink[]
  phoneView: number
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    return {
      phoneView: 1,
      ipadNavs: false,
      allMenus: false,
      navLinks: [
        {
          id: 1,
          name: 'Bosh sahifa',
          path: '/',
        },
        {
          id: 2,
          name: 'Loyihalar',
          path: '/projects',
        },
        {
          id: 3,
          name: 'Xizmatlar',
          path: '/services',
        },
        {
          id: 4,
          name: 'Mijozlarimiz',
          path: '/clients',
        },
        {
          id: 5,
          name: "Bog'lanish",
          path: '/contact',
        }
      ]
    }
  }
})
