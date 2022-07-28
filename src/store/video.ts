import { defineStore } from 'pinia'
import { ref } from 'vue'
import { PersonalizedMv } from '@/models/personalized'
import { usePersonalizedMv } from '@/utils/api'

export const useVideoStore = defineStore('video', () => {
  const PersonalizedMv = ref<PersonalizedMv[]>([])
  const getPersonalizedMv = async () => {
    if (PersonalizedMv.value.length) return
    PersonalizedMv.value = await usePersonalizedMv()
  }
  return { PersonalizedMv, getPersonalizedMv }
})
