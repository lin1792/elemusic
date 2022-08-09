import { defineStore } from 'pinia'

export const useActiveStore = defineStore({
  id: 'active',
  state: () => ({ act: 1 }),
  actions: {
    useAct(i: number) {
      this.act = i
      const someVarName = this.act.toString()
      localStorage.setItem('someVarKey', someVarName)
    }
  }
})
