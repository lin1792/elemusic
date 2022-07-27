/* eslint-disable prefer-destructuring */
import { defineStore } from 'pinia'
import { useTiaoshi } from '@/utils/api'
import { Key } from '@element-plus/icons-vue'
import { keys } from 'lodash'

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
    tiaoshi() {
      useTiaoshi()
    }
  }
})
