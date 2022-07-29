<template>
  <div v-for="item in list" :key="item.id" class="about">
    <el-button @click="getWangyi ">获取热门歌单</el-button>
    1233
  </div>
  123
</template>

<script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
const { tiaoshi2, search } = useStore()
const { tiaoshi } = tiaoshi2
const { list, getlist } = storeToRefs(tiaoshi2)
const { hotData } = storeToRefs(search)
const getWangyi = tiaoshi
console.log(hotData)


</script>
