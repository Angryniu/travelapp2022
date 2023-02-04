2<template>
  <div>

    <van-sticky :offset-top="0">
      <div class="navbar">
    <van-nav-bar>
        <template #left>
      <van-icon name="arrow-left" @click="onClickLeft"/>
   </template>
      <!-- <template #left >
        <span @click="showPopup" style="margin-left:20px;">{{area}}</span>
        <van-icon name="location" color="#000" style="margin-left:5px;" @click="showPopup"/>
      </template> -->
      <template #title>
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
          color="#000"
          @click-input='search'
        />
      </template>
      <template #right>
        <van-badge dot style="margin-right:20px;">
          <van-icon name="volume-o" color="#000" />
        </van-badge>
      </template>
    </van-nav-bar>
  </div>
    </van-sticky>

    <van-index-bar>
      <van-index-anchor :index="k" v-for="(v,k) in citys" :key="k">
        {{k}}
        <van-cell v-for="c in v" :key="c.id" :title="c.name" />
      </van-index-anchor>   
    </van-index-bar>


  </div>
</template>
<script>
export default {
    data(){
        return{
            citys:''
        }
    },
    methods:{
        onClickLeft(){
         history.back()
      }
    },
    mounted(){
        this.$http.get('/api/info').then((res)=>{
            this.citys=res.data.cities;
            console.log(this.citys)
        })
    }
};
</script>
<style lang="scss" scoped>
</style>