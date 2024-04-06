import { defineStore } from 'pinia'
export const useAnnouncementStore = defineStore('announcement', {

  state: () => {
    return {
      newsId: 0
    }
  },
})