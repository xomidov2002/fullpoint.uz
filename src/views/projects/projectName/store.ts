import { defineStore } from 'pinia'
export const useAnnouncementStore = defineStore('announcement', {

  state: () => {
    return {
      marketingId: 0,
      moliyaId: 0,
      buxgalteriyaId: 0,
      arxitekturaId: 0,
      qurilishId: 0,
      itId: 0,
      kameraId: 0
    }
  },
})