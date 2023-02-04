<template>
 <div class="search">
   <van-nav-bar>
   <template #left>
      <van-icon name="arrow-left" @click="onClickLeft"/>
   </template>
  <template #title>
    <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
          color="#000"
          @click-input='search'
        />
  </template>
   </van-nav-bar>
   
   <div>搜索记录</div>

 </div>
</template>
<script>
export default {
   methods:{
      onClickLeft(){
         history.back()
      }
   }
}
</script>
<style lang="scss" scoped>


</style>