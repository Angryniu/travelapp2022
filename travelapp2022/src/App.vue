<template>
  

  <router-view />

  <van-tabbar v-model="tabbaractive" placeholder="true" v-if="show">
    <van-tabbar-item icon="home-o" replace  @click="toHome">首页</van-tabbar-item>
    <van-tabbar-item icon="star-o" replace  @click="toStar">收藏</van-tabbar-item>
    <van-tabbar-item icon="cart-o" replace  @click="toCart" :badge="length">订单</van-tabbar-item>
    <van-tabbar-item icon="manager-o" replace  @click="toMine">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    toHome(){
      this.$router.push('/home')
      this.$store.commit('changeTabbaractive',0)
    },
    toStar(){
      this.$router.push('/star')
      this.$store.commit('changeTabbaractive',1)
    },
    toCart(){
      this.$router.push('/cart')
      this.$store.commit('changeTabbaractive',2)
    },
    toMine(){
      this.$router.push('/mine')
      this.$store.commit('changeTabbaractive',3)
    },
  },
  computed:{
    show(){
      return this.$store.state.showTar
    },
    tabbaractive(){
      return this.$store.state.tabbaractive
    },
    length(){
      return this.$store.state.order.length
    }
  }
};
</script>

<style lang="scss" scoped>

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
