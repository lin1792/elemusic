import { Personalized, PersonalizedNewSong } from '@/models/personalized'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePersonalized, usePersonalizedNewsong } from '@/utils/api'

export const useMusicStore = defineStore('music', () => {
  // 专属歌单
  const personalized = ref<Personalized[]>([])
  const getPersonalized = async () => {
    if (personalized.value.length) return
    personalized.value = await usePersonalized()
  }
  // 推荐新音乐
  const personalizedNewSongs = ref<PersonalizedNewSong[]>([])
  const getPersonalizedNewSong = async () => {
    if (personalizedNewSongs.value.length) return
    personalizedNewSongs.value = await usePersonalizedNewsong()
  }

  return {
    personalized,
    getPersonalized,

    personalizedNewSongs,
    getPersonalizedNewSong
  }
})
