<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar
        :title="this.data.name"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon name="weapp-nav" size="18" />
          <div style="width: 10px"></div>
          <van-icon name="like-o" size="18" />
        </template>
      </van-nav-bar>

      <van-swipe
        class="my-swipe"
        :autoplay="2000"
        indicator-color="white"
        height="250"
      >
        <van-swipe-item v-for="(swipe, key) in data.swipe" :key="key">
          <img :src="swipe" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- <div style="height:20px;"></div> -->

    <van-row justify="space-between">
      <van-low style="font-size: 25px"> {{ this.data.name }} </van-low>
      <van-low>
        <van-rate v-model="this.data.rate" icon="like" void-icon="like-o" />
      </van-low>
    </van-row>

    <van-row justify="space-between">
      <van-low>
        <van-image
          src="../font/位置.svg"
          width="20"
          height="20"
          style="vertical-align: middle"
        >
        </van-image>
        <span class="span1">{{ this.data.position }}</span>
      </van-low>
      <van-low style="font-size: 15px; color: rgb(168, 157, 157)">
        距我10公里
      </van-low>
    </van-row>

    <div class="bot">
      <van-row>
        <van-low style="color: blue; font-size: 20px"> | </van-low>
        <van-low style="margin-left: 10px; font-size: 20px"> 简介 </van-low>
      </van-row>
      <van-row class="show">
        {{ this.data.desc }}
      </van-row>
    </div>
    <van-action-bar>
      <span style="margin-left: 20px; color: red">{{ this.data.price }}元</span>
      <van-action-bar-icon />
      <van-action-bar-icon />
      <van-action-bar-button
        type="danger"
        text="加入购物车"
        @click="addCart"
      />
      <van-action-bar-button
        type="sucess"
        text="去购物车"
        @click="toCart"

      />
    </van-action-bar>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  
  data() {
    return {
      data: [],
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    addCart() {
        Toast.success('加入购物车成功');
        this.$store.commit('pushOrder',JSON.stringify(this.data))
    },
    toCart(){
      if(localStorage.getItem('userinfo')){
        this.$store.commit('changeTabbaractive',2)
        this.$router.push('/cart')
      }else{
        Toast.success('请先登录');
        this.$router.push('/cart')
      }
    }
  },
  mounted() {
    this.$store.commit("changeTar", false);
    this.data = JSON.parse(this.$route.query.name);
  },
};
</script>
<style lang="scss" scoped>
.top {
  position: relative;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 250px;
  text-align: center;
  background-color: #39a9ed;
  border-radius: 0 0 10% 10%;
}
.van-swipe-item img {
  height: 100%;
  width: 100%;
  border-radius: 0 0 10% 10%;
}
.van-row {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.van-low {
  text-align: center;
}
.span1 {
  text-align: center;
  font-size: 15px;
  line-height: 24px;
  margin-left: 5px;
  color: rgb(168, 157, 157);
}
.show {
  width: 90%;
  height: 150px;
  word-break: break-word;
  white-space: pre-line;
  font-size: 15px;
  // border: 1px solid red;
  border-radius: 5%;
  background-color: rgba($color: #1989fa, $alpha: 0.3);
  padding-top: 10px;
  // padding-left: 10px;
  color: rgb(168, 157, 157);
}
.bot {
  margin-top: 10px;
  // margin-left: 20px;
  // margin-right: 20px;
}
</style>