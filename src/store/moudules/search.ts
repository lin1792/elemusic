import { defineStore } from 'pinia'
import { useHotsearch, useSearchSuggest } from '@/utils/api'
import { SearchHotDetail, SearchSuggest } from '@/models/search'

// 热搜
export const useSeachStore = defineStore({
  id: 'Hotseach',
  state: () => ({
    hotData: [] as SearchHotDetail[],
    suggestData: {} as SearchSuggest,
    searchkeyword: '',
  }),
  getters: { showHot: state => state.searchkeyword === '' },
  actions: {
    async hotsearch() {
      this.hotData = await useHotsearch()
    },

    async searchSuggest() {
      this.suggestData = await useSearchSuggest(this.searchkeyword)
    }
  }
})
