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
          route: '#home'
        },
        {
          id: 2,
          name: 'Product',
          route: '#product'
        },
        {
          id: 3,
          name: 'Services',
          route: '#services'
        },
        {
          id: 4,
          name: 'Practice advice',
          route: '#advice'
        },
        {
          id: 5,
          name: 'contact',
          route: '#contact'
        }
      ]
    }
  }
})
