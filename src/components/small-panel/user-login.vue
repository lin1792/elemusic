<script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useYanZhenMa, useLoginfunction, useLoginStatus, useYanZhen } from '@/utils/api'
const { login } = useStore()
const { kaiguan } = storeToRefs(login)
const useKaiguan = () => {
  kaiguan.value = !kaiguan.value
}
const phone = ref('')
const captcha = ref('')
const getLoginStatus = async () => {
  const res = await useLoginStatus()
  console.log(res)

}
</script>

<template>
  <div class="main">
    <div class="dengluTitle">请登录账户</div>
    <div class="guanbi cur" @click="useKaiguan">关闭</div>
    <!-- 账户 -->
     <div class="inp zhanghu">
      电  话 <input type="text" class="cur"  v-model="phone" @dblclick="getLoginStatus">
     </div>
  <!-- 密码 -->
  <div class="inp mima">
      <div class="getyanzhen cur" @click="useYanZhenMa(phone)">点击获取验证码</div><input type="text" class="cur" v-model="captcha">
  </div>
  <div class="quereng cur" @click="useLoginfunction(phone,captcha,'')">登录</div><div @click="useYanZhen(phone,captcha)">验证</div>
  </div>
</template>

<style lang="less" scoped>
  @bottomcolor:#334055;
@hovercolor:#409eff;
@mockcolor:#ecf5ff;
.main{
  position: relative;
  flex-direction: column;
  justify-content: start;
  .dengluTitle{
    position: absolute;
    top: 30px;
    left: 120px;
    width: 250px;
    height: 60px;
    background-color: bisque;
    font-size: 40px;
  }
.guanbi{
  position: absolute;
    top: 20px;
    right:20px;
    width: 70px;
    height: 30px;
    background-color: bisque;
    font-size: 20px;
}
  .inp{
    position: absolute;
    left: 107px;
    background-color: pink;
    width: 370px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  }
  input{
    height: 100%;
    width: 230px;
  border-radius: 999px;
  border: 1px solid rgba(128, 128, 128, 0.453);
  padding: 0 20px;
font-size: 20px;
  }
  .zhanghu{
top: 107px;
margin-left: 5px;
}
.mima{
  display: flex;
top: 180px;
}
.quereng{
  position: absolute;
  top: 240px;
  left: 120px;
  width: 100px;
  height: 40px;
  background-color: aquamarine;
  font-size: 25px;
}
.cur:hover{
   cursor: pointer;
  color: @hovercolor;
}
}

</style>
