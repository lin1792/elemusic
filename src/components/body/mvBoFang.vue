<script setup lang="ts">
import { useMvUrl } from '@/utils/api'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { MvUrl } from '@/models/mv'
const route = useRoute()
const id = Number(route.query.id)
const mvUrl = ref<MvUrl>()
onMounted(async () => {
  mvUrl.value = await useMvUrl(id)
})
</script>
<template>
   <div>
    MV详情
    <div class="main" v-if="mvUrl">
        <video class="shipin" :src="mvUrl?.url" autoplay controls/>
  </div>
   </div>
</template>
<style lang="less" scoped>
.main{
  margin: auto;
  width: 50vw;
  overflow: hidden;
  .shipin{
    width: 100%;
  }
}
</style>
