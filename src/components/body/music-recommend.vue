<script setup lang="ts">
</script>

<template>
  <el-scrollbar height="100%">
    <div class="scrollbar-demo-item">
      <!-- 推荐 -->
     <div class="tuijian">
       <div class="header">推荐</div>
<div class="body">
  <!-- 推荐左布局 -->
 <div class="left">
   <el-carousel :interval="4000" type="card" height="204px">
    <el-carousel-item class="el-carousel-item" v-for="item in 6" :key="item">123
    </el-carousel-item>
  </el-carousel>
 </div>
 <!-- 推荐右模块布局 -->
 <div class="right">
  <div class="title">排行榜</div>
  <div v-for="item in 4" :key="item" class="info">
    <span>{{item}}、许嵩</span>
    <span class="num">63.8万</span>
  </div>
 </div>
</div>
     </div>
  <!-- 你的专属歌单 -->
  <div class="zhuangshu">
    <div class="header">你的专属歌单<span class="iconfont icon-gengduo"></span></div>
    <div class="body">
      <span v-for="item in 10" :key="item">
      <span class="img"><span class="num iconfont icon-24gf-headphones">1.2千万</span>
      <span class="cover iconfont icon-24gl-play"></span></span>
      <p>荣耀剑下取,均衡乱中求</p></span>
    </div>
  </div>
  <!-- 推荐新音乐 -->
  <div class="xinyinyue">
    <div class="header">推荐新音乐<span class="iconfont icon-gengduo"></span></div>
    <div class="body">
   <el-row>
    <el-col v-for="item in 10" :key="item" :span="24"><div class="grid-content ep-bg-purple-dark">
      <img src="@/assets/推荐新音乐.png" alt="">
      <div class="info">
<div class="music-name">好好学习，天天向上</div>
<div class="human-name">赵静</div>
      </div>
    </div></el-col>
  </el-row>
    </div>
  </div>
  <!-- 推荐MV -->
  <div class="MV">
    <div class="header">推荐MV<span class="iconfont icon-gengduo"></span></div>
    <div class="body">
      <el-row>
    <el-col v-for="item in 4" :key="item" :span="24"><div class="grid-content ep-bg-purple-dark">
      <!-- <img src="@/assets/推荐MV.png" alt=""> -->
        <span class="img">
        <span class="num iconfont icon-bofang"> 134</span>
      <span class="cover iconfont icon-24gl-play"></span>
      </span>
      <div class="info"><div class="music-name">好好学习，天天向上</div>
<div class="human-name">赵静</div></div></div></el-col>
  </el-row>
    </div>
  </div>
  <!-- 123 -->
      <!-- <div v-for="item in 100" :key="item">{{item }}</div> -->
    </div>
  </el-scrollbar>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.scrollbar-demo-item {
  height: 50px;
  margin: 10px;
  padding: 0 50px  20px;
  color: @bottomcolor;
  div{
margin: 10px 0;

  }
  .header{
    font-size: 25px;
    span{
      font-size: 25px;
    }
  }
  // 推荐
.tuijian{
   .header{
  font-size: 40px;
  font-weight: 700;
 }
.body{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 220px;
  width: 100%;
  .left{
    width: 70%;
.el-carousel-item{
  background-image: url('@/assets/推荐.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.el-carousel__item:nth-child(n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(n+1) {
  background-color: #d3dce6;
}
  }
  .right{
    width: 27%;
    height: 90%;
    background-color: #109ff85c;
    border-radius: 10px;
    line-height: 100%;
    padding: 10px 10px;
    .title{
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 5px;
    }
    .info{
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      padding: 5px 5px;
      border-radius: 10px;
      transition: all 0.3s linear;
    }
    .info:nth-child(2n){
      background-color: #40a0ff25;
    }
    .info:hover {
      cursor: pointer;
      background-color: #40a0ffc8;
      font-size:21px ;
    }
  }
}
}

// 你的专属歌单
.zhuangshu{
  .body{
    display: flex;
    justify-content: space-between;
    height: 160px;
    // background-color: pink;
    span{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      width: 136px;
      // background-color: red;
.img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 136px;
  background-image: url('@/assets/你的专属歌单.png');
  background-size: contain;
  border-radius: 10px;
  margin-bottom:2px;
  transition: all 0.3s linear;
  .cover{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0);
    border-radius: 10px;
    font-size: 0;
    color: #ffffff;
    line-height: 136px;
    text-align: center;
    transition: all 0.3s linear;
  }
};
.img:hover{
  top: -5px;
  cursor: pointer;
}
.img .cover:hover{
    background-color:rgba(0, 0, 0, 0.5);
    font-size: 40px;
    color: @hovercolor;

}

p{
       font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
     }
.num{
  flex-direction: row;
  position: absolute;
  top: 110px;
  right: 5px;
  width: auto;
  height: 20px;
  background-color:rgba(0, 0, 0, 0.5);
  border-radius: 9999px;
  padding: 2px 6px;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  transition: all 0.3s linear;
}
    }
  }
}

// 推荐新音乐
.xinyinyue{
.body{
  .el-row {
    display: flex;
    justify-content: space-between;
    margin: 0;
}
.el-col {
  max-width: 19%;
  margin: 0;
  border-radius: 4px;
  // background-color: pink;
}
.el-col:nth-last-of-type(n+6){
  margin-bottom: 7px;
}

.grid-content {
  display: flex;
  margin: 0;
  border-radius: 4px;
  min-height: 36px;
  // background-color: #d3dce6;
img{
  border-radius:5px;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 7px 0;
  .music-name{
    margin: 2px;
  }
  .human-name{
      margin: 2px;
      color: #898888;
  }
}
}
.grid-content:hover{
  background-color:@mockcolor;
  cursor: pointer;
}
}
}

// 推荐MV
.MV{
  .body{
    height: 250px;
    // background-color: pink;
    .el-row {
      display: flex;
      justify-content: space-between;
      height: 100%;
      margin: 0;
     }
.el-col {
  // background-color:red;
  max-width: 24%;
      margin: 0;
}

.grid-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  height: 100%;
  border-radius: 4px;
  min-height: 36px;
  margin: 0;

    .img{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    background-image: url('@/assets/推荐MV.png');
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s linear;
     .cover{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0;
    color: #ffffff;
    line-height: 200px;
    text-align: center;
    transition: all 0.3s linear;
  }
  }
.num{
  position: absolute;
  top: 171px;
  right: 6px;
  width: auto;
  background-color:rgba(0, 0, 0, 0.5);
  border-radius: 9999px;
  padding: 2px 5px;
  font-size: 14px;
  color: #ffffff;
    transition: all 0.3s linear;
}
.img:hover{
  top: -5px;
  cursor: pointer;
}
.img .cover:hover{
    background-color:rgba(0, 0, 0, 0.5);
    font-size: 40px;
    color: @hovercolor;

}

}
.info{
  margin: 0;
  .music-name{
    margin:2px 0;
    }
    .human-name{
      margin:2px 0 ;
      color:#898888;
    }
}
}
  }
}

</style>
