<template>
  <div class="cart">
    <van-sticky>
     <van-nav-bar title="我的订单" />
    </van-sticky>
    <van-card v-for="(o,key) in order" :key="key"
      :num="o.num"
      :price="o.price"
      :esc="o.desc"
      :title="o.name"
      :thumb="o.imgurl"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">购买</van-button>
        <van-button size="mini" @click="delOrder(key)">移除</van-button>
      </template>
    </van-card>


  </div>
</template>
<script>
export default {
  methods:{
    delOrder(key){
      this.$store.commit('delOrder',key);
    }
  },
  computed:{
    order(){
      return this.$store.state.order;
    },
  }
};
</script>
<style lang="scss" scoped>
</style>