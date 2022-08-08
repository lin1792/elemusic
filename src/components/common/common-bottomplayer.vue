<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { useFormatDuring } from '@/utils/number'
import useStore from '@/store/index'
import { defaultboFang } from '@/assets/defaultBoFang'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const { player } = useStore()
const { loopType, isPause, volume, duration, currentTime, song, playListCount, playList, choose } = storeToRefs(player)
const { toggleLoop, next, prev, togglePlay, setVolume, onSliderInput, onSliderChange, play, clearPlayList } = player

// }
</script>

<template>
<div class="main">
  <!-- 进度条 -->
<div class="slider">
  <div class="slider-demo-block">
     <el-slider :min="0" v-model="currentTime" :max="duration" @change="onSliderChange" @input="onSliderInput"/>
  </div>
</div>

  <!-- 播放组件 -->
  <div class="left">
    <img :src="song.al?.picUrl || defaultboFang" alt="">
    <div class="info">
      <div class="title">
        <span class="maintitle cur">{{song.name || '开源音乐'}}</span>
        <span v-for="item in song.ar" :key="item?.id" class="subtitle cur">-{{item?.name || 'kaiyuanxiaokeai'}}</span>
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
    <span :class="'loop'+' iconfont'+(loopType===0?' icon-24gl-repeatOnce2':loopType===1?' icon-24gl-repeat2':' icon-xunhuan')+' cur'" @click="toggleLoop"></span>
    <span class="pre iconfont icon-shangyishou_huaban cur" @click="prev"></span>
    <span :class="'play'+' iconfont'+(isPause?' icon-bofang':' icon-zanting')+' cur'" @click="togglePlay"></span>
    <span class="next iconfont icon-xiayishou_huaban cur" @click="next"></span>
      <!-- 音量弹窗 -->
      <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      <span class="vol iconfont icon-shengyin cur"></span><el-icon class="el-icon--right"></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu id="volpanel">
        <!-- ↓音量滑块 -->
        <div id="yinliang">
          <div class="slider-demo-block">
    <el-slider vertical height="200px" v-model="volume" @input="setVolume"/>
  </div></div>
        <!-- ↑音量滑块 -->
        <el-dropdown-item class="iconfont icon-shengyin"></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
  <div class="right">
    <!-- 进度时间 -->
    <span v-if="song?.dt" class="prossive">{{useFormatDuring(currentTime)}}/{{useFormatDuring(duration)}}</span>
    <span v-else class="prossive">00:00/00:00</span>
    <!-- 歌词 -->
    <span class="text iconfont icon-wenzi cur"></span>
    <!-- 播放列表组件 -->
      <el-row class="block-col-2">
    <el-col :span="8">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- 播放列表图标 -->
          <div class="list iconfont icon-gengduo3 cur">
      <!-- 列表数量 -->
      <div class="number">{{playListCount}}</div></div>
        </span>
        <template #dropdown>
          <div class="scrollbar-title" >播放列表</div>
          <div class="scrollbar-total"><span>共{{playListCount}}首歌曲</span><span class="iconfont icon-shanchu qingkong" @click="clearPlayList">清空</span></div>
          <el-dropdown-menu style="width: 400px;height: 600px;">
 <el-scrollbar height="590px">
      <!-- 列表单曲 -->
    <p v-for="song in playList" :key="song.id" :class="'scrollbar-demo-item'+(choose===song?.id?' chosen':'')" style="height: 74.5px ;" @click="play(song.id)">
    <el-dropdown-item >
      <!-- 列表歌曲信息 -->
      <div>
        <span class="info">
          <img :src="song.al?.picUrl || defaultboFang" alt="">
          <span class="name">
            <span class="music-name">{{song.name}}</span>
            <span class="human-name"><span v-for="item in song?.ar" :key="item?.id" class="human-name">-{{item.name}}</span></span>
          </span>
        </span>
        <span class="time">03:58</span>
    </div>
    </el-dropdown-item>
</p>
  </el-scrollbar>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
  </div>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.main{
  position: relative;
  display: flex;
  width: calc(100% - 307.2px);
  height: 95.13px;
background-color: #fff;
padding: 24px 25px 15px 25px;
.slider{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 9px;
  padding-right: 30px;
  // background-color: #3091cd;
  .slider-demo-block {
  display: flex;
  align-items: center;
  .el-slider{
    height: 12px;
  }
}
}
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
    margin-right: 5px;
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
  .el-dropdown{
    padding: 0;
  }
  .el-dropdown-link{
    margin: 4px -14px 0 0 ;
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
  position: relative;
  display: flex;
  align-items: center;
  font-size: 25px;
  .number{
  margin: 0;
  font-size: 5px;
}
}

}
}
</style>
<style lang="less">
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.scrollbar-title{
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  color: @bottomcolor;
}
.scrollbar-total{
  display: flex;
  justify-content: space-between;
  padding: 10px 25px 5px 10px;
  span{
    font-size: 10px;
  color: @bottomcolor;
  }
.qingkong:hover{
  cursor: pointer;
  color: @hovercolor;
}
}
.el-dropdown-menu{
.scrollbar-demo-item {
display: flex;
    align-items: center;
    white-space: nowrap;
    list-style: none;
    line-height: 22px;
    padding: 5px 10px 5px 5px;
    margin: 0;
    font-size: var(--el-font-size-base);
    color: var(--el-text-color-regular);
    cursor: pointer;
    outline: 0;
    width: 100%;
    .el-dropdown-menu__item{
      width: 100%;
    }
    div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info{
        display: flex;
        img{
          border-radius: 5px;
          margin-right: 5px;
          width: 49px;
          height: 49px;
        }
        .name{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .human-name{
          display: flex;
flex-direction: row;
          }
        }
      }
    }
    }
}
.el-scrollbar .chosen{
  border-left: solid #0091ea 2px;
  background-color: #ecf5ff;
  span{
  color: #409eff !important;
  }
  }
</style>
<style lang="less">
#volpanel{
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#yinliang{
  padding-top: 10px;
  margin-bottom: 5px;
.slider-demo-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
}
.el-popper.is-dark{
  top: 0;
  left: 0;
  background-color:#ecf5ff;
  border-color:#ecf5ff;
  color:#334055 !important ;
.el-popper__arrow::before{
 background-color: #ecf5ff;
 border-color: #ecf5ff;
  }
}
</style>
