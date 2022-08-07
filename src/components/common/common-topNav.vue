<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
// import { useRoute } from 'vue-router'
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
import SearchSuggest from '../small-panel/search-suggest.vue'
import router from '@/router'
import UserLogin from '../small-panel/user-login.vue'
import { append } from 'dom7'
// const router = useRoute()
const clickHot = (text: string) => {
  searchkeyword.value = text
}
const clearinput = () => {
  searchkeyword.value = ''
}
const { search, login } = useStore()
const { hotsearch } = search
const { hotData, searchkeyword, showHot } = storeToRefs(search)
hotsearch()

// 前进后退跳转功能
const back = () => {
  router.go(-1)
}
const prev = () => {
  router.go(1)
}

// 登录操作
const { kaiguan } = storeToRefs(login)
const uselogin = () => {
  kaiguan.value = !kaiguan.value
}
</script>

<template>
<div class="main">
  <div class="left">
    <span class="iconfont icon-shangyige" @click="back"></span>
    <span class="iconfont icon-xiayige" @click="prev"></span>
    <!-- 下拉组件 -->
  <el-row class="block-col-2">
    <el-col :span="8">
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <!-- 输入框 -->
          <div class="demo-input-size">
            <el-input
             v-model="searchkeyword"
             class="w-50 m-2"
                  placeholder="Please Input"
             :prefix-icon="Search"
            />
            <span class="delete iconfont icon-shanchu2" @click="clearinput"></span>
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="search-dropdown">
            <!-- 热搜推荐组件 -->
            <div v-if="showHot">
              <div class="title">热门搜索</div>
            <el-dropdown-item class="list" v-for="(item,index) in hotData" :key="item.searchWord" @click="clickHot(item.searchWord)">
                <div class="info">{{index+1}}、{{item.searchWord}}</div>
            <div class="num">{{item.score.numberFormat()}}</div>
            </el-dropdown-item>
            </div>
            <!-- 搜索建议组件 -->
            <SearchSuggest v-else/>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
  </div>
  <div class="right">
    <span class="login"><span class="iconfont icon-denglu"></span><span class="name" @click="uselogin">点击登录</span></span>
    <span class="mail iconfont icon-youjian" style="font-weight: 600;font-size: 20px;"></span>
    <span class="skin iconfont icon-pifu"></span>
    <span class="meun iconfont icon-liebiao"></span>
<transition name="fade">
<UserLogin v-if="kaiguan" class="loginPop" />
</transition>
  </div>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.fade-leave {
    opacity: 1
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opacity: 0
}
.main{
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 307.2px);
  height: 76.78px;
  padding:15px 25px 0 25px;
.left{
  display: flex;
  justify-content: left;
  span{
  display:inline-block;
  width: 50px;
  height: 50px;
  font-size: 35px;
  color: rgb(191, 186, 186);
}

span:hover{
color:#54a8ff;
cursor: pointer;
  }
.demo-input-size{
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 9999px;
  /deep/ .el-input__inner{
    padding-right: 17px;
  }
.delete{
  position: absolute;
  top: 12px;;
  right: 16px;
  width: 10px;
  height: 10px;
  font-size: 15px;
}
}
.demo-input-size /deep/ .el-input__wrapper{
  border-radius: 9999px;
height: 40px;
}
}
.right{
  position: relative;
  display: flex;
  justify-content: right;
  .icon-denglu{
    font-size: 20px;
  }
  span{
    width: 30px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #87898b;
  }
  span:hover{
    color: #54a8ff;
    cursor: pointer;
  }
  .login{
    display: flex;
    width: 100px;
    span{
      font-weight: 600;
      font-size: 27px;
    }
    .name{
      width: 100px;
      font-size: 15px;
      font-weight: 700;
    }
  }
  .loginPop{
position: absolute;
top: 100px;
right: 635px;
width: 500px;
height: 300px;
background-color:@hovercolor;
border-radius: 50px;
z-index: 999;
  }
}
}
</style>
<style lang="less">
    .search-dropdown{
  width: 250px;
  height: 400px;
  .title{
padding:4px 15px 8px 15px;
font-size: 15px;
  }
    .list{
    display: flex;
    justify-content: space-between;
    color: aqua;
  }
  .list:hover{
    font-size: 20px;
  }

}
</style>
