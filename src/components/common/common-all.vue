<script setup lang="ts">
import CommonLeftNav from './common-leftNav.vue'
import CommonTopNav from './common-topNav.vue'
import CommonBottomplayer from './common-bottomplayer.vue'
import CommonMain from './common-main.vue'
import '@/assets/font_3541026_3h5dz7qeice/iconfont.css'

</script>

<template>


<div class="panel">
   <div class="leftpanel">
    <CommonLeftNav class="left"/>
   </div>
<div class="right">
<CommonTopNav />
<CommonMain />
</div>
</div>
<CommonBottomplayer class="bottom"/>

</template>

<style lang="less" scoped>
body{
  position: relative;
}
.panel{
  display: flex;
  .leftpanel{
width: 307.2px;
height: 100vh;

}}
.bottom{
  position: fixed;
bottom: 0;
right: 0;
}

</style>
