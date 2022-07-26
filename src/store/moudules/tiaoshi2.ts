import { defineStore } from 'pinia'
import { useDetail } from '@/utils/api'
import { id } from 'element-plus/es/locale'

export const tiaoshi2Store = defineStore({
  id: 'tiaoshi2',
  state: () => ({
    list: [{
      id: 111,
      name: '吃饭'
    }, { id: 1112 }, { id: 44 }, { id: 44 }
    ]
  }),
  getters: {
    getlist(): number {
      return this.list[1].id
    }
  },
  actions: {
    dada() {
      useDetail()

    }
  }
})
