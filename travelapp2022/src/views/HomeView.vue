<template>
  <div class="home">
    <van-sticky :offset-top="0">
      <div class="navbar">
    <van-nav-bar>
      <template #left >
        <span @click="toCity" style="margin-left:20px;">{{area}}</span>
        <van-icon name="location" color="#000" style="margin-left:5px;" @click="toCity"/>
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
      <template #right>
        <van-badge dot style="margin-right:20px;">
          <van-icon name="volume-o" color="#000" />
        </van-badge>
      </template>
    </van-nav-bar>
  </div>
    </van-sticky>
    

  <!-- <van-popup v-model:show="show" position="bottom" >
    <van-area title="所在地选择" :area-list="areaList" v-model:value="areaValue" @confirm="selectArea" @cancel="quxiao"/>
  </van-popup> -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="150">
      <van-swipe-item v-for="swipe in swipes" :key="swipe.id">
        <img :src="swipe.imgurl"/>
      </van-swipe-item>
      
    </van-swipe>

    <van-grid :border="false" :column-num="4" :icon-size="20">
      <van-grid-item v-for="iconfont in iconfonts" :key="iconfont.name">
        <van-image height='30' width='30' round :src="iconfont.url"/>
        <span>{{iconfont.name}}</span>
      </van-grid-item>
    </van-grid>

    <!-- 猜你喜欢 -->
    <div class='block'>
      <van-row>
        <van-col style="margin-left:20px;"><van-image src="../iconfont/猜你喜欢.svg" left="20"/></van-col>
        <van-col style="margin-left:20px;font-size:20px;color:#1989fa;">猜你喜欢</van-col>
      </van-row>
      <van-row justify="space-around" class="cart">
        <van-col span="10" v-for="good in goods" :key="good.id" @click="toDetail(good)">
          <van-image :src="good.imgurl"/>
          <span>{{good.name}}</span>
        </van-col>
      </van-row>

    </div>
   
  <div style="height=50px;"> </div>

    <!-- 推荐 -->
    <div class='block'>
      <van-row>
        <van-col style="margin-left:20px;"><van-image src="../iconfont/推荐.svg" left="20"/></van-col>
        <van-col style="margin-left:20px;font-size:20px;color:#1989fa;">热门推荐</van-col>
      </van-row>
      <van-row justify="space-around" class="cart">
        <van-col span="10" v-for="good in recommend" :key="good.id" @click="toDetail(good)">
          <van-image :src="good.imgurl"/>
          <span>{{good.name}}</span>
        </van-col>
      </van-row>

    </div>

    
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import { areaList } from '@vant/area-data';
export default {
  data(){
    return{
      swipes:[],
      goods:[],
      show:false,
      recommend:[],
      areaList,
      areaValue:"120100",
      area:'未知',
      iconfonts:[
        {
          url:'../iconfont/国内游.svg',
          name:'国内游'
        },
        {
          url:'../iconfont/国际游.svg',
          name:'国际游'
        },
        {
          url:'../iconfont/火车.svg',
          name:'火车票'
        },
        {
          url:'../iconfont/门票.svg',
          name:'门票'
        },
        {
          url:'../iconfont/民宿.svg',
          name:'名宿'
        },
        {
          url:'../iconfont/汽车.svg',
          name:'汽车票'
        },
        {
          url:'../iconfont/热门活动.svg',
          name:'活动'
        },
        {
          url:'../iconfont/个人定制.svg',
          name:'定制游'
        },
      ]
    }
  },
  methods:{
    search(){
      this.$router.push('/search')
    },
    showPopup(){
      this.show=true
    },
    selectArea(result){
      this.area=result[1].name;
      this.show=false;
    },
    quxiao(){
      this.show=false
    },
    toCity(){
      this.$router.push('/cityfind')
    },
    toDetail(child){
      this.$router.push({
        path:'/detail',
        query:{
          name:JSON.stringify(child)
        }
      })
    }
  },
  mounted(){
    this.$http.get('/api/info').then((res)=>{
      this.swipes=res.data.swipe;
      this.goods=res.data.like;
      this.recommend=res.data.recommend;
    })
  }
};
</script>
<style lang="scss" scoped>
.cart .van-col{
  margin-top: 10px !important;
}
.block span{
  display: block;
  text-align: center;
  color: #596570;;
  margin-top: 10px;
}
.block{
  margin-top: 20px;
}
.navbar {
  height: 54px;
  background-color: #fff;
}
.home>.van-swipe-item>img{
  width: 1rem;
  height: 1rem;
}
.van-grid{
  margin-left: 20px;
  margin-right: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe{
  margin-top: 20px;
}
.van-swipe-item img{
  height: 100%;
  width: 100%;
}
.van-grid{
  margin-top: 20px;
}
.van-grid-item span{
  display: block;
  margin-top: 10px;
  color: #2d353a;
}
</style>
