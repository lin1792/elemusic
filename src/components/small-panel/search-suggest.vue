<script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
const { search, player } = useStore()
const { suggestData } = storeToRefs(search)
const { searchSuggest } = search

const{ play } = player
searchSuggest()
const getTitle = (name: string) => {
  switch (name) {
  case 'songs':
    return '单曲'
  case 'artists':
    return '歌手'
  case 'albums':
    return '专辑'
  case 'playlists':
    return '歌单'
  default:
    return name
  }
}


</script>
<template v-if="suggestData">
<div  class="suggest" v-for="(order,index) in suggestData.order" :key="index">
  <!-- 小标题 -->
  <div class="title">{{getTitle(order)}}</div>
  <!-- 单曲 -->
  <div class="danqu" v-if="order === 'songs'" >
    <div v-for="item in suggestData.songs" :key="item.id" class="main" :title="item.name" @click="play(item.id)"><span class="name">{{item.name}}</span> <span v-for="ist in item.artists" :key="ist.id">-{{ist.name}}</span></div>
  </div>
<!-- 歌手 -->
<div  v-if="order === 'artists'">
  <div class="geshou" v-for="item in suggestData.artists" :key="item.id">
    <router-link to="/artistDetail"><div  class="main" :title="item.name"><img :src="item.img1v1Url" alt="" ><span>{{item.name}}</span></div></router-link>
  </div>
</div>
  <!-- 专辑 -->
  <div v-if="order === 'albums'">
    <div class="zhuanji"  v-for="item in suggestData.albums" :key="item.id" >
    <router-link to="/albumDetail"><div class="main" ><span class="name" :title="item.name" >{{item.name}}</span><span> -{{item.artist.name}}</span></div></router-link>
  </div>
  </div>
  <!-- 歌单 -->
  <div v-if="order === 'playlists'">
    <div class="gedan" v-for="item in suggestData.playlists" :key="item.id">
    <router-link to="playlistDtail"><div  class="main" :title="item.name" ><img :src="item.coverImgUrl" alt=""><span>{{item.name}}</span></div></router-link>
  </div>
</div>
  </div>
</template>
<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.suggest{
  .main{
    display: flex;
    align-items: center;
    padding: 5px 16px;
    font-size: 14px;
    line-height: 20px;
    .name{
      color: @hovercolor;
    }
    img{
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 5px;
    }
    // span{
    //   height: 20px;
    //   line-height: 20px;
    // }
  }
  .main:hover{
    background-color: @mockcolor;
    cursor: pointer;
    font-size: 20px;
          white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
}
</style>
