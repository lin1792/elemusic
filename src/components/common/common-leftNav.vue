<script setup lang="ts">
import '@/assets/font_3541026_rqeq4fvo72/iconfont.css'
</script>

<template>
<div class="fr">
<el-scrollbar class="text">
    <p class="fb">在线音乐</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-tuijianma"></i>&nbsp;推荐</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-yinle"></i>&nbsp;音乐馆</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-shipin"></i>&nbsp;视频</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-diantai"></i>&nbsp;电台</p>
    <p class="scrollbar-demo-item ct"></p>
    <p class="fb">我的音乐</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-xihuan-xianxing"></i>&nbsp;我喜欢</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-bendi1x"></i>&nbsp;本地歌曲</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-xiazai-wenjianxiazai-07"></i>&nbsp;下载歌曲</p>
    <p class="scrollbar-demo-item lianjie"><i class="iconfont icon-zuijinyuedu"></i>&nbsp;最近播放</p>
    <p class="scrollbar-demo-item end"></p>
  </el-scrollbar>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.fr{
  width: 307.2px;
height: 100vh;
padding-left: 20px;
background-color: #f9fafb;
overflow: hidden;
.text{
margin-top: 76.78px;
width: 93%;
.end{
  height: 65px;
}
.fb{
  color: @bottomcolor;
}
.ct{
  height: 20px;
}
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 80%;
  height: 50px;
  margin: 10px;
  padding-left: 20px;
  text-align: center;
  border-radius: 4px;
  background: #f9fafb;
  color: @bottomcolor;
}
.lianjie,.iconfont{
  font-size: 25px;
}
.lianjie:hover{
  background-color: @mockcolor;
  color: @hovercolor;
  cursor: pointer;
}
}

</style>
