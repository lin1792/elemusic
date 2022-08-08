<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFormatDuring } from '@/utils/number'

import { useRoute } from 'vue-router'
import { PlayListDetail } from '@/models/playList'
import { Song } from '@/models/Song'
import { usePlaylistDetail, usePlaylistTrackAll } from '@/utils/api'
import useStore from '@/store/index'

const activeName = ref('first')
const { player } = useStore()
const { play, pushPlayList } = player


const router = useRoute()
const id = Number(router.query.id)
// 使用歌单信息
const playlistDetail = ref<PlayListDetail>()
onMounted(async () => {
  playlistDetail.value = await usePlaylistDetail(id)
})
// 获取歌曲
const songs = ref<Song[]>([])
onMounted(async () => {
  songs.value = await usePlaylistTrackAll(id)
})
// 播放全部
const playAll = () => {
  pushPlayList(false, ...songs.value)
  // console.log(...songs.value)
  play(songs.value[0].id)
}
</script>
<template>
  <div class="container" v-if="playlistDetail">
     <div class="common-layout">
    <el-container>
      <!-- 头 -->
      <el-header class="bigHeader">
        <div class="common-layout">
    <el-container>
      <el-aside class="upAside" width="200px"><img :src="playlistDetail.coverImgUrl" alt=""></el-aside>
      <el-container>
        <el-header class="artistName">{{playlistDetail?.name}}</el-header>
        <div class="writer">
          <div class="name">
            <img :src="playlistDetail.creator.avatarUrl" alt="">
            <div class="text">{{playlistDetail.creator.nickname}}</div>
          </div>
          <div class="type">
            <div v-for="item in playlistDetail.creator.expertTags" :key="item" class="typeList">#{{item}}</div>
          </div>
        </div>
        <el-main class="desc">{{playlistDetail.description}}</el-main>
        <el-footer class="btns">
          <div class="bt1 iconfont icon-24gl-play" @click="playAll">播放全部</div>
          <div class="bt2 iconfont icon-xihuan-xianxing">收藏</div>
          <div class="bt3 iconfont icon-gengduo1"></div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
      </el-header>
      <!-- 菜单 -->
      <div class="menu">
        <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick"> -->
        <el-tabs v-model="activeName" class="demo-tabs">

    <el-tab-pane label="歌曲" name="first" class="men menu2">
      <div class="li list2">
        <div class="mainTitle">
          <div class="songs">歌曲</div>
          <div class="artists">歌手</div>
          <div class="albums">专辑</div>
          <div class="time"><div>时长</div></div>
        </div>
        <!-- 内容主体 -->
        <div class="frame">
          <el-scrollbar>
    <p class="scrollbar-demo-item">
<div v-for="item in songs" :key="item.id" class="content" @dblclick="play(item.id)">
          <div class="song">
            <div class="left">
              <div class="love iconfont icon-xihuan-xianxing"></div>
              <div class="text" @click="play(item.id)">{{item.name}}</div>
            </div>
            <div class="right">
              <div class="play iconfont icon-24gl-play"></div>
              <div class="add iconfont icon-tianjia"></div>
              <div class="download iconfont icon-xiazai1"></div>
              <div class="more iconfont icon-gengduo4"></div>
            </div>
          </div>
          <div class="artist"><router-link :to="{path:'/artistDetail',query:{id:item.al.id}}"><span class="name">{{item.ar[0].name}}</span></router-link></div>
          <div class="album"><span class="name">{{item.al.name}}</span></div>
          <div class="time"><div>{{useFormatDuring(item.dt / 1000)}}</div></div>
        </div>
        </p>
  </el-scrollbar>
        </div>
      </div>
    </el-tab-pane>

    <el-tab-pane label="评论" name="second" class="men menu3">
      <div class="li list3">评论内容暂未开发</div>
    </el-tab-pane>
  </el-tabs>
      </div>
      </el-container>
  </div>
  </div>
</template>
<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.container{
  padding: 10px 200px 10px 20px;
  // 大头
  .bigHeader{
    margin-bottom: 200px;
    height: 0px;
    .upAside{
      width: 180px;
      height: 180px;
      border-radius: 10px;
      overflow: hidden;
      img{
       height: 180px;
        // border-radius: 50%;
      }
    }
    .artistName{
      height: 45px;
      font-size: 30px;
      font-weight: 700;
      color: @bottomcolor;
       overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
    }
    .writer{
      display: flex;
      margin: 5px 0 10px 20px;
      .name{
        display: flex;
        margin-right: 20px;
        div{
      color: gray;
        }
        img{
          width: 25px;
          height: 25px;
          background-color: #067bf1;
          margin-right: 5px;
          border-radius: 50%;
        }
      }
      .type{
        display: flex;
        .typeList{
          margin-right: 5px;
      color: gray;

        }
      }
    }
    .desc{
      height: 40px;
      min-height:0;
      padding:0 20px ;
      margin-bottom: 25px;
      // background-color: pink;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
       font-size: 15px;
      // white-space: nowrap;
    }
    .btns{
      // margin-top: 5px;
      display:flex;
      div{
        margin-right: 10px;
        border:1px solid #3340553f ;
        border-radius: 9999px;
        text-align: center;
        line-height: 30px;
      }
      .bt1{
        width: 120px;
        height: 30px;
        padding: 0 10px;
        background-color: @hovercolor;
        border-color:#40a0ff4c;
        color:#ffffff
      }
      .bt2{
        width: 120px;
        height: 30px;
        padding: 0 10px;

      }
      .bt3{
        width: 30px;
        height:30px;
      }
      .bt1:hover{
        cursor: pointer;
        background-color:#067bf1;
        border-color: @hovercolor;
      }
      .bt2:hover{
        cursor: pointer;
        color: @hovercolor;
        border-color: @hovercolor;
      }
      .bt3:hover{
        cursor: pointer;
        color: @hovercolor;
        border-color: @hovercolor;
      }
    }
  }
  // 菜单
 .menu{
   .demo-tabs{
    padding: 0 30px;
    font-size: 30px;
    .men{
      .li{
        width: 100%;
        height: 52vh;
        // background-color: pink;
      }
    }
    .menu2{
      .smallHeader{
        display: flex;
        justify-content: space-between;
        .left{
        display: flex;

        div{
          width: 100px;
          height: 25px;
          border: 1px solid rgba(167, 165, 165, 0.688);
          margin-right: 10px;
          border-radius: 999px;
          text-align: center;
          font-size: 15px;
        }
        div:hover{
          color:@hovercolor;
          border-color: @hovercolor;
          cursor: pointer;
        }
        }
        .right{
          display: flex;
          font-size: 15px;
          margin-right: 25px;
          div{
          height: 25px;
          margin-left: 10px;
          line-height: 25px;
          }
          div:hover{
            color:@hovercolor;
            cursor: pointer;
          }
        }
      }
      .mainTitle{
        display: flex;
        justify-content: space-between;
        font-size: 17px;
        height: 30px;
        // background-color: #067bf1;
        line-height: 30px;
        .songs{
          flex: 6 ;
          color: rgba(106, 105, 105, 0.627);
        }
        .artists{
          flex: 2;
          color: rgba(106, 105, 105, 0.627);
        }
        .albums{
          flex: 2;
          color: rgba(106, 105, 105, 0.627);
        }
        .time{
          display: flex;
          flex: 1;
          justify-content: end;
          margin-right: 42px;
          div{
          color: rgba(106, 105, 105, 0.627);
          }
        }
      }
      // 内容主体
      .frame{
        // background-color:blue;
        height: 46.2vh;
        .content{
        display: flex;
        justify-content: space-between;
        font-size: 17px;
        height: 30px;
        // background-color: #067bf1;
        line-height: 30px;
        .song{
          display: flex;
          justify-content: space-between;
          flex: 6 ;
        color:@bottomcolor;
        .left{
          display: flex;
          .love{
            padding-right: 5px;
          }
          .text{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
        .left div:hover{
          cursor: pointer;
          color:@hovercolor;
        }
        .right{
          display: flex;
          .iconfont{
            margin: 0 5px;
          }
          .more{
            margin-right: 20px;
          }
        }
        .right .iconfont:hover{
          cursor: pointer;
          color:@hovercolor;
        }
        }
        .artist{
          display: flex;
          flex: 2;
        color: @bottomcolor;
        .name{
           overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        }
        .artist .name:hover{
          cursor: pointer;
          color:@hovercolor;
        }
        .album{
          display: flex;
          flex: 2;
        color: @bottomcolor;
        margin-right: 5px;
        .name{
           overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        }
        .album .name:hover{
          cursor: pointer;
          color:@hovercolor;
        }
        .time{
          display: flex;
          flex: 1;
          justify-content: end;
          margin-right: 35px;
        color: @bottomcolor;
        }
      }
      .content:hover{
        background-color:@mockcolor;
      }
      }
    }
   }
 }
}
</style>
