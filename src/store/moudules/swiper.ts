
import { defineStore } from 'pinia'

export const useSwiper = defineStore({
  id: 'swiper',
  state: () => ({ bannerNum: 4 }),
})
