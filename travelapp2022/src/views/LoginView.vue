<template>
 <div class="login">
<van-nav-bar
  title="登录"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  <div class="20px" style="height:20px"></div>

    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="userinfo.cellphone"
      name="手机"
      label="手机"
      placeholder="手机"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="userinfo.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 50px 50px;">
    <van-button round block type="success" native-type="submit" @click="login">
      登录
    </van-button>
  <div class="20px" style="height:20px"></div>

    <van-button round block type="primary" native-type="submit" @click="toRegister">
      去注册
    </van-button>
  </div>
</van-form>

 </div>
</template>
<script>
export default {
data(){
  return{
    userinfo:{
      cellphone:'',
      password:''
    }
  }
},
methods:{
  login(){
    this.$store.dispatch("login",JSON.stringify(this.userinfo))
  },
  onClickLeft(){
      this.$router.push('/home')
      this.$store.commit('changeTabbaractive',0)
  },
  toRegister(){
    this.$router.push('/register')
  }
}

}
</script>
<style lang="scss" scoped>


</style>