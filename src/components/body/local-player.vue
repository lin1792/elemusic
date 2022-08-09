<!-- eslint-disable prefer-destructuring -->
<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
const { player } = useStore()
const { localsongurl } = storeToRefs(player)
const { localplay } = player
// const audio = ref()
const Url = ref('')
const input = ref()

onMounted(() => {
  console.log(input.value)
  input.value.onchange = () => {
    const file = input.value.files[0]
    console.log(file)
    const url = URL.createObjectURL(file)
    console.log(url)
    // localsongurl.value = url
    Url.value = url
  }
})

</script>

<template>
  <div>
<input ref="input" id="audio_file" type="file" accept="audio/*" />
<button @click="localplay(Url)">点击播放</button>
  </div>
</template>
<style lang="less" scoped>
button{
  width: 100px;
  height: 100px;
  background-color:pink;
  cursor: pointer
}
button:hover{
    color: red;
  }
</style>
