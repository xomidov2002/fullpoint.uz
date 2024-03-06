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
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'Product',
          path: '/product',
        },
        {
          id: 3,
          name: 'Services',
          path: '/services',
        },
        {
          id: 4,
          name: 'Our clients',
          path: '/clients',
        },
        {
          id: 5,
          name: 'contact',
          path: '/contact',
        }
      ]
    }
  }
})
