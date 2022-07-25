<script setup lang="ts">
</script>

<template>
<div class="main">
   <h1>
  饿了音乐
</h1>
<el-scrollbar class="text">
    <p class="fb">在线音乐</p>
    <router-link to="/elerecommond" ><p class="scrollbar-demo-item lianjie active"><i class="iconfont icon-tuijianma"></i>&nbsp;推荐</p></router-link>
    <router-link to="/eleclub"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-yinle"></i>&nbsp;音乐馆</p></router-link>
    <router-link to="/elevideo"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-shipin"></i>&nbsp;视频</p></router-link>
    <router-link to="/elediantai"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-diantai"></i>&nbsp;电台</p></router-link>
    <p class="scrollbar-demo-item ct"></p>
    <p class="fb">我的音乐</p>
    <router-link to="/mylove"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-xihuan-xianxing"></i>&nbsp;我喜欢</p></router-link>
    <router-link to="/local"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-bendi1x"></i>&nbsp;本地歌曲</p></router-link>
    <router-link to="/download"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-xiazai-wenjianxiazai-07"></i>&nbsp;下载歌曲</p></router-link>
    <router-link to="/recentplay"><p class="scrollbar-demo-item lianjie"><i class="iconfont icon-zuijinyuedu"></i>&nbsp;最近播放</p></router-link>
    <p class="scrollbar-demo-item end"></p>
  </el-scrollbar>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.main{
  position: relative;
  width: 307.2px;
height: 100vh;
padding-left: 20px;
background-color: #f9fafb;
overflow: hidden;
h1{
  position: absolute;
  top: 0;
  left: 20px;
  // width: 116px;
width: 300px;
  height:  50px;
  margin-top: 15px;
  padding-left: 100px;
  // background-color: #409eff;
background-image: url(@/assets/logo.png);
background-size: contain;
background-repeat:no-repeat;
font-size: 45px;
line-height: 45px;
color: #0091ea;
}
.text{
margin-top: 76.78px;
width: 93%;
.fb{
  border: 0;
  background:none;
  color: @bottomcolor;
}
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
.active{
    background-color: @mockcolor;
  color: @hovercolor;
  }
.lianjie:hover{
  background-color: @mockcolor;
  color: @hovercolor;
  cursor: pointer;
}
}

</style>
