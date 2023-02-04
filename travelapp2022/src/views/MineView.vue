<template>
 <div class="mine">
   <van-nav-bar>
      <template #left>
         个人信息
      </template>
      <template #right>
         <van-image src="../iconfont/设置.svg" width='20' height='20'></van-image>
      </template>
   </van-nav-bar>

   <div class="block"></div>

   <div class="userinfo">
      <van-row justify="center">
         <van-image src='../avatar/头像.jpeg' width='70' height='70' round></van-image>
      </van-row>
      <van-row justify="center">
         <span style="margin-top:20px;font-size:20px;">{{username}}</span>
      </van-row>
   </div>

   <van-cell-group inset>
      <van-cell title="单元格" value="内容" is-link/>
      <van-cell title="单元格" value="内容" is-link/>
      <van-cell title="单元格" value="内容" is-link/>
      <van-cell title="单元格" value="内容" is-link/>
      <van-cell title="注销" value="注销" is-link @click="logout"/>
   </van-cell-group>

 </div>
 
</template>
<script>
export default {
   data(){
      return{
         username:JSON.parse(localStorage.getItem("userinfo")).username
      }
   },
   methods:{
      logout(){
         this.$store.commit('logout');
      }
   }

}
</script>
<style lang="scss" scoped>
.mine{
   position: relative;
   background-color: whitesmoke;
}
.block{
   width: 100%;
   height: 250px;
   background-color: rgba($color: #5c7dc4, $alpha: 1.0);
   position: absolute;
   top: 0;
   border-radius:0 0 100% 100%;
}
.userinfo{
   position:absolute;
   width: 80%;
   height: 150px;
   background: white;
   top: 100px;
   left: 10%;
   border-radius: 10px;
}
.van-cell-group{
   margin-top: 250px;
}
</style>