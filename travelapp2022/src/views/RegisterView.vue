<template>
 <div class="register">

  <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

<div style="margin-top:20px"></div>
    <van-form>
      <van-cell-group inset>
    <van-field
      v-model="userinfo.username"
      name="pattern"
      label="用户名"
      placeholder="用户名"
      :rules="usernameRuls"
    />
    <van-field
      v-model="userinfo.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="passwordRuls"
    />
    <van-field
      v-model="userinfo.email"
      type="email"
      name="邮箱"
      label="邮箱"
      placeholder="邮箱"
      :rules="emailRuls"
    />
    <van-field
      v-model="userinfo.id"
      type="number"
      name="手机号"
      label="手机号"
      placeholder="手机号"
      :rules="cellphoneRuls"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" @click="register">
      注册
    </van-button>
    <div style="margin-top:20px;"></div>
    <van-button type="success" round block @click="toLogin">已有账号，去登录</van-button>
  </div>
    </van-form>
 </div>
</template>
<script>
export default {
  data(){
    return{
      userinfo:{
        username:'',
        password:'',
        email:'',
        id:""
      },
      usernameRuls:[
        {
          pattern:/^[a-zA-Z0-9_-]{3,4}$/,
          message:'请输入3-4个字符'
        }
      ],
      passwordRuls:[
        {
          pattern:/^[a-zA-Z0-9]{6,10}/,
          message:'请输入6-9位的密码'
        }
      ],
      cellphoneRuls:[
        {
          pattern:/^((13[0-9])|(14[5|7])|(17([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
          message:'请输入正确的手机号'
        }
      ],
      emailRuls:[
        {
          pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
          message:'请输入正确的邮箱'
        }
      ]
    }
  },
  methods:{
    register(){
      this.$store.dispatch("register",JSON.stringify(this.userinfo))
      this.$router.push('/login')
    },
    toLogin(){
      this.$router.push('/login')
    },
    onClickLeft(){
      this.$router.push('/home')
      this.$store.commit('changeTabbaractive',0)
    },
    // onFailed(value){
    //   console.log('failed', value);
    // }
  },
  
}

</script>
<style lang="scss" scoped>
.van-field{
  margin-top: 10px;
}

</style>