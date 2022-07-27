<script setup lang="ts">
import ElemusicEnd from './components/elemusic/elemusic-end.vue'
import { userPlayerInit } from '@/store/moudules/player'
userPlayerInit()
</script>

<template>
    <elemusic-end />
</template>

<style lang="less" scoped>

</style>
