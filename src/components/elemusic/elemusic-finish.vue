<script setup lang="ts">
import CommonLeftNav from '@/components/common/common-leftNav.vue'
import CommonTopNav from '@/components/common/common-topNav.vue'
import CommonBottomplayer from '@/components/common/common-bottomplayer.vue'
import CommonMain from '@/components/common/common-main.vue'
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
<CommonBottomplayer class="bottom"/>
</div>
</div>

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
