import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Banner } from '@/models/banner'
import { useBanner } from '@/utils/api'
export const useBannerStore = defineStore(
  'banner',
  () => {
    const banners = ref<Banner[]>([])
    const getBanners = async () => {
      if (banners.value.length) return
      banners.value = await useBanner()
    }
    return { banners, getBanners }
  }
)
