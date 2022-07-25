<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input2 = ref('')
</script>

<template>
<div class="main">
  <div class="left">
    <span class="iconfont icon-shangyige"></span>
    <span class="iconfont icon-xiayige"></span>
    <!-- 下拉组件 -->
  <el-row class="block-col-2">
    <el-col :span="8">
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <!-- 输入框 -->
          <div class="demo-input-size">
            <el-input
             v-model="input2"
             class="w-50 m-2"
             placeholder="Please Input"
             :prefix-icon="Search"
            />
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="search-dropdown">
            <div class="title">热门搜索</div>
            <el-dropdown-item class="list" v-for="item in 10" :key="item">
                <div class="info">{{item}}、许嵩</div>
            <div class="num">65万</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
  </div>
  <div class="right">
    <span class="login"><span class="iconfont icon-denglu"></span> 点击登录</span>
    <span class="mail iconfont icon-youjian" style="font-weight: 600;font-size: 20px;"></span>
    <span class="skin iconfont icon-pifu"></span>
    <span class="meun iconfont icon-liebiao"></span>
  </div>
</div>
</template>

<style lang="less" scoped>
@bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
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
  width: 200px;
  height: 40px;
  border-radius: 9999px;
  // overflow: hidden;
}
// .el-input{
//   height: 40px;
// }
.demo-input-size /deep/ .el-input__wrapper{
  border-radius: 9999px;
height: 40px;
}
}
.right{
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
