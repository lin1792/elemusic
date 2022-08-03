import { defineStore } from 'pinia'
import { useYanZhenMa, useLoginfunction, useLoginStatus } from '@/utils/api'
export const useLogin = defineStore({
  id: 'login',
  state: () => ({ kaiguan: false }),

  // actions: {

  /*
   * async useYanZhenMa() {
   *   await useYanZhenMa()
   * }
   */
  // }
})
