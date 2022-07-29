<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import type { TabsPaneContext } from 'element-plus'
import { useRoute } from 'vue-router'
import { ArtistDetail } from '@/models/artistDetail'
import { useArtistDetail } from '@/utils/api'
const activeName = ref('second')

/*
 * const handleClick = (tab: TabsPaneContext, event: Event) => {
 *   console.log(tab, event)
 * }
 */
const router = useRoute()
const id = Number(router.query.id)

// 使用用户信息.....接口请求不到先不写了
const artistDetail = ref<ArtistDetail>()
onMounted( async() => {
  artistDetail.value = await useArtistDetail(id)
  console.log(artistDetail)

})
</script>
<template>
  <div class="container">
     <div class="common-layout">
    <el-container>
      <!-- 头 -->
      <el-header class="bigHeader">
        <div class="common-layout">
    <el-container>
      <el-aside class="upAside" width="200px"><img src="@/assets/artist-pic.jpg" alt=""></el-aside>
      <el-container>
        <el-header class="artistName">许嵩</el-header>
        <el-main class="desc">著名作词人、作曲人、唱片制作人、歌手。内地独立音乐之标杆人物，有音乐鬼才之称。2009年独立出版首张词曲全创作专辑《自定义》，2010年独立出版第二张词曲全创作专辑《寻雾启示》，两</el-main>
        <el-footer class="btns">
          <div class="bt1">+关注</div>
          <div class="bt2 iconfont icon-diantai">歌手电台</div>
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

    <el-tab-pane label="精选" name="first" class="men menu1">
      <div class="li list1">精选内容暂未开发</div>
    </el-tab-pane>

    <el-tab-pane label="歌曲" name="second" class="men menu2">
      <div class="li list2">
        <div class="smallHeader">
          <div class="left">
            <div class="iconfont icon-24gl-play">播放</div>
          <div class="iconfont icon-xiazai-wenjianxiazai-07">下载</div>
          <div class="">√批量操作</div>
          </div>
          <div class="right">
            <div>最热</div>
            <div>最新</div>
          </div>
        </div>
        <div class="mainTitle">
          <div class="left">歌曲</div>
          <div class="center">专辑</div>
          <div class="right"><div>时长</div></div>
        </div>
        <!-- 内容主体 -->
        <div class="frame">
          <el-scrollbar>
    <p class="scrollbar-demo-item">
<div v-for="item in 100" :key="item" class="content">
          <div class="song">
            <div class="left">
              <div class="love iconfont icon-xihuan-xianxing"></div>
              <div class="text">牛牛牛牛虎虎虎</div>
            </div>
            <div class="right">
              <div class="play iconfont icon-24gl-play"></div>
              <div class="add iconfont icon-tianjia"></div>
              <div class="download iconfont icon-xiazai1"></div>
              <div class="more iconfont icon-gengduo4"></div>
            </div>
          </div>
          <div class="album"><span class="name">吱吱吱吱</span></div>
          <div class="time"><div>00:00</div></div>
        </div>
        </p>
  </el-scrollbar>
        </div>
      </div>
    </el-tab-pane>

    <el-tab-pane label="专辑" name="third" class="men menu3">
      <div class="li list3">专辑内容暂未开发</div>
    </el-tab-pane>

    <el-tab-pane label="视频" name="fourth" class="men menu4">
      <div class="li list4">视频内容暂未开发</div>
    </el-tab-pane>

    <el-tab-pane label="详情" name="fifth" class="men menu5">
      <div class="li list5">详情内容暂未开发</div>
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
      position: relative;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      overflow: hidden;
      img{
        position: absolute;
        top: 0;
        left: -20px;
       height: 180px;
        // border-radius: 50%;
      }
    }
    .artistName{
      font-size: 40px;
      font-weight: 700;
      color: @bottomcolor;
    }
    .desc{
      padding-left: 50px;
    }
    .btns{
      // margin-top: 10px;
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
        .left{
          flex: 4 ;
          color: rgba(106, 105, 105, 0.627);
        }
        .center{
          flex: 2;
          color: rgba(106, 105, 105, 0.627);
        }
        .right{
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
          flex: 4 ;
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
