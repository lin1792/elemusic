import { defineStore } from 'pinia'

export const useActiveStore = defineStore({
  id: 'active',
  state: () => ({ act: 1 }),
  actions: {
    useAct(i: number) {
      this.act = i
    }
  }
})
