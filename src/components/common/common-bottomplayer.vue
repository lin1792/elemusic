<script setup lang="ts">
</script>

<template>
<div class="main">
  <div class="left">
    <img src="@/assets/Snipaste.png" alt="">
    <div class="info">
      <div class="title">
        <span class="maintitle cur">饿了开源音乐</span>
        <span class="subtitle cur">-kaiyuanxiaokeai</span>
      </div>
      <div class="panel">
        <span class="iconfont icon-xihuan-xianxing cur"></span>
        <span class="iconfont icon-xiazai-wenjianxiazai-16 cur"></span>
        <span class="iconfont icon-gengduo4 cur"></span>
        <span class="iconfont icon-xiaoxi cur"><span class="num cur">999+</span></span>
      </div>
    </div>
  </div>
  <div class="center">
    <span class="loop iconfont icon-24gl-repeatOnce2 cur"></span>
    <span class="pre iconfont icon-shangyishou_huaban cur"></span>
    <span class="play iconfont icon-bofang cur"></span>
    <span class="next iconfont icon-xiayishou_huaban cur"></span>
    <span class="vol iconfont icon-shengyin cur"></span>
  </div>
  <div class="right">
    <span class="prossive">00:00/00:00</span>
    <span class="text iconfont icon-wenzi cur"></span>
    <div class="list iconfont icon-gengduo3 cur"><div class="number">0</div></div>
  </div>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.main{
  display: flex;
  width: calc(100% - 307.2px);
  height: 95.13px;
background-color: #fff;
padding: 15px 25px;
.cur:hover{
    cursor: pointer !important;;
    color: @hovercolor !important;;
  }
.left{
  display: flex;
  flex:1;
  // background-color: rgb(165, 164, 164);
img{
  margin-right: 12px;
  border-radius: 10px;
  cursor: pointer;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  .maintitle{
    margin-right: 15px;
    color:@bottomcolor;
  }
  .subtitle{
    font-size: 15px;
    color: rgb(137, 136, 136);
  }
  .panel{
    span{
      display: inline-block;
    margin-right: 20px;
    width: 20px;
  font-size: 20px;
  color:#8f9294;
    }
  .icon-xiaoxi{
    position: relative;
  font-weight: 700;
  .num{
    position: absolute;
    top: -9px;
    right: -22px;
    width: 30px;
    height: 17px;
    margin: 0;
    background-color: rgba(244, 240, 240, 0.8);
    transform: scale(0.7);
    border-radius: 9999px;
    font-size: 3px !important;
  font-weight: normal;
  color: @bottomcolor;

  }
}
  }
}
}
.center{
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
  // background-color: gray;
  span{
    margin: 0 10px;
    text-align: center;
  }
  .loop{
    width: 30px;
    font-size: 25px;
  }
  .pre{
    width: 40px;
    font-size: 35px;
  }
  .play{
    width: 50px;
    font-size: 50px;
    color: #3091cd;
  }
  .next{
    width: 40px;
    font-size: 35px;

  }
  .vol{
    width: 30px;
    font-size: 25px;
  }
}
.right{
  display:flex;
  flex:1;
  justify-content: right;
  align-items: center;
span{
  margin: 0 8px;
}
.list{
  display: flex;
  align-items: center;
  font-size: 25px;
}
.list .number{
  margin: 0;
  font-size: 5px;
}
}
}
</style>
