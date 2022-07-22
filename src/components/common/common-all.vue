<script setup lang="ts">
import CommonLeftNav from './common-leftNav.vue'
import CommonTopNav from './common-topNav.vue'
import CommonBottomplayer from './common-bottomplayer.vue'
import CommonMain from './common-main.vue'

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
    // position: relative;
width: 307.2px;
height: 100vh;
// .left{
//   position: absolute;
//   top: 0;
//   left: 0;
// }
  }
}
.bottom{
  position: fixed;
bottom: 0;
right: 0;
}

</style>
