<!-- eslint-disable no-duplicate-imports -->
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
import { toRefs, onMounted } from 'vue'
import { Mvtupian } from '@/assets/defaultBoFang'
import { useVideoStore } from '@/store/video'
import { useBannerStore } from '@/store/banner'
import { Tuijian } from '@/assets/defaultBoFang'
import { Banner } from '@/models/banner'
import { useMusicStore } from '@/store/music'
const { search, player, useswiper } = useStore()
const { searchkeyword } = storeToRefs(search)
const { getPersonalizedMv } = useVideoStore()
const { PersonalizedMv } = toRefs(useVideoStore())
const { getBanners } = useBannerStore()
const { banners } = toRefs(useBannerStore())
const { play } = player
onMounted(async() => {
  await getPersonalizedMv()
})
// 推荐
onMounted(async () => {
  await getBanners()
})
const clickBanner = (banner:Banner) => {
  if (banner.targetType === 1) {
    play(banner.targetId)
  }
}
// 搜索排行版内容
const searchTop = (topText:string) => {
  searchkeyword.value = topText
}
// 推荐专属歌单
const { personalized } = toRefs(useMusicStore())
const { getPersonalized } = useMusicStore()
onMounted(async () => {
  await getPersonalized()
})
// 推荐新音乐
const { personalizedNewSongs } = toRefs(useMusicStore())
const { getPersonalizedNewSong } = useMusicStore()
onMounted(async () => {
  await getPersonalizedNewSong()
})
// swiper轮播图内容
const { bannerNum } = storeToRefs(useswiper)
onMounted(window.onresize = () => {
  console.log(document.body.clientWidth)
  if (document.body.clientWidth <= 990) { bannerNum.value = 1 } else if (document.body.clientWidth <= 1200) { bannerNum.value = 2 } else if (document.body.clientWidth <= 1500) { bannerNum.value = 3 } else {
    bannerNum.value = 4
  }
})
</script>

<template>
  <el-scrollbar height="100%">
    <div class="scrollbar-demo-item">
      <!-- 推荐 -->
     <div class="tuijian">
       <div class="header">推荐</div>
<div class="body">
  <!-- 推荐左布局 -->s
 <div class="left">
  <swiper
    :slides-per-view="bannerNum"
    :space-between="20"
  >
    <swiper-slide  v-for="item in banners" :key="item.bannerId"><img :src="item.imageUrl || Tuijian" alt="" @click="clickBanner(item)"></swiper-slide>
  </swiper>
 </div>
 <!-- 推荐右模块布局 -->
 <!-- <div class="right">
  <div class="title">搜索排行榜</div>
  <div v-for="(item,index) in hotData.slice(0,4)" :key="index" class="info" @click="searchTop(item.searchWord)">
    <span>{{index + 1}}、{{item.searchWord}}</span>
    <span class="num">{{item.score.numberFormat()}}</span>
  </div>
 </div> -->
</div>
     </div>
  <!-- 你的专属歌单 -->
  <div class="zhuangshu">
    <div class="header">你的专属歌单<span class="iconfont icon-gengduo"></span></div>
    <div class="body">
      <span class="xunhuan" v-for="item in personalized" :key="item.id">
      <router-link :to="{path:'/playlistDetail',query:{id:item.id}}">
        <span class="img">
        <img :src="item.picUrl" alt="">
        <span class="num iconfont icon-24gf-headphones">{{item.playCount.numberFormat()}}</span>
      <span class="cover iconfont icon-24gl-play"></span>
      </span>
      </router-link>
      <p>{{item.name}}</p></span>
    </div>
  </div>
  <!-- 推荐新音乐 -->
  <div class="xinyinyue">
    <div class="header">推荐新音乐<span class="iconfont icon-gengduo"></span></div>
    <div class="body">
   <el-row>
    <el-col v-for="item in personalizedNewSongs" :key="item.id" :span="24" @click="play(item.id)"><div class="grid-content ep-bg-purple-dark">
      <img :src="item.picUrl" alt="">
      <div class="info">
<div class="music-name">{{item.name}}</div>
<div class="human-name">{{item.song.artists[0].name}}</div>
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
    <el-col v-for="item in PersonalizedMv" :key="item.id" :span="24"><div class="grid-content ep-bg-purple-dark">
        <router-link :to="{ path: '/MvDetail', query: {id:item.id } }">
          <span class="img">
        <img class="tu" :src="item.picUrl || Mvtupian" alt="">
      <span class="cover iconfont icon-24gl-play"></span>
      <span class="num iconfont icon-bofang"> 134</span>
      </span>
        </router-link>
      <div class="info"><div class="music-name">{{item.name}}</div>
<div class="human-name">{{item.artistName}}</div></div></div></el-col>
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
  height: 180px;
  width: 100%;
  .left{
    width: 100%;
img{
  width: 100%;
  border-radius: 20px;
}
  }
  // .right{
  //   @media screen and (max-width:1500px){
  //     display: none;
  //   }
  //   width: 27%;
  //   height: 90%;
  //   background-color: #109ff85c;
  //   border-radius: 10px;
  //   line-height: 100%;
  //   padding: 10px 10px;
  //   .title{
  //     font-size: 25px;
  //     font-weight: 500;
  //     padding-bottom: 5px;
  //   }
  //   .info{
  //     display: flex;
  //     justify-content: space-between;
  //     font-size: 20px;
  //     padding: 5px 5px;
  //     border-radius: 10px;
  //     transition: all 0.3s linear;
  //     background-color: #40a0ff25;
  //   }
  //   .info:hover {
  //     cursor: pointer;
  //     background-color: #40a0ffc8;
  //     font-size:21px ;
  //   }
  // }
}
}

// 你的专属歌单
.zhuangshu{
  .body{
    @media only screen and (max-width:1600px){
      justify-content: start;
      flex-wrap: wrap;
      height: 450px;
      .xunhuan{
        width: 190px !important;
        margin-right: 10px;
      &:nth-child(-n+5){
        margin-bottom: 10px;
      }
      .img{
        height: 190px !important;
      }
      }
    }
    @media only screen and (max-width: 1420px){
      height: 400px;
      .xunhuan{
        width: 160px !important;
      .img{
        height: 160px !important;
      }
      }
      }
       @media only screen and (max-width: 1280px){
      height: 270px;
      .xunhuan{
        width: 100px !important;
      .img{
        height: 100px !important;
      }
      }
       }

    display: flex;
    justify-content: space-between;
    height: 160px;
    // background-color: pink;
    .xunhuan{
      position: relative;
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
        transition: all 0.3s linear;
        border-radius: 10px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
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
        }
        .cover{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding-top: 50px;
          background-color:rgba(0, 0, 0, 0);
          font-size: 0;
          color: #ffffff;
          text-align: center;
        transition: all 0.3s linear;

        }
        .cover:hover{
          background-color:rgba(0, 0, 0, 0.5);
          font-size: 40px;
          color: #409eff;
        }
      }
      .img:hover{
        top: -5px;
        cursor: pointer;
      }


p{
       font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
  width: 100%;
  min-height: 36px;
  // background-color: #d3dce6;
img{
  width: 20.135%;
  height: 20.135%;
  border-radius:5px;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 7px 0;
  .music-name{
    margin: 2px;
      // 文字溢出隐藏
    overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
  }
  .human-name{
      margin: 2px;
      color: #898888;
      // 文字溢出隐藏
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
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
     @media only screen and (max-width: 1280px){
      height: 270px;
     }
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
    overflow: hidden;
    transition: all 0.3s linear;}
  img{
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
.cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0);
    font-size: 0;
    color: #ffffff;
    line-height: 200px;
    text-align: center;
    transition: all 0.3s linear;
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
.cover:hover{
    background-color:rgba(0, 0, 0, 0.5);
    font-size: 40px;
    color: @hovercolor;
}
.img:hover{
  top: -5px;
  cursor: pointer;
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
