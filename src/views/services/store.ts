import { defineStore } from 'pinia'
export const useServiceStore = defineStore('announcement', {

  state: () => {
    return {
      serviceId: 0
    }
  },
})