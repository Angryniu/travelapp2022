import { createRouter, createWebHashHistory } from 'vue-router'
// import store from '@/store'
import HomeView from '../views/HomeView.vue'
import StarView from '../views/StarView.vue'
import CartView from '../views/CartView.vue'
import MineView from '../views/MineView.vue'
import SearvhHistoryView from '../views/SearvhHistoryView'
import CityView from '../views/CityView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import DetailView from '../views/DetailView'
import store from '@/store'
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/star',
    name: 'star',
    component: StarView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/mine',
    name: 'mine',
    component: MineView
  },
  {
    path: '/search',
    name: 'search',
    component: SearvhHistoryView
  },
  {
    path: '/cityfind',
    name: 'cityfind',
    component: CityView
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/detail',
    name:'detail',
    component:DetailView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  // 避免个人信息丢失
  if(localStorage.getItem('userinfo')){
    store.commit('setUserInfo',localStorage.getItem('userinfo'))
    store.commit('setOrder',localStorage.getItem('order'))
  }
  // 未登录不能使用收藏、订单、个人页
  if(to.path==='/star'||to.path==='/cart'||to.path==='/mine'){
    if(!localStorage.userinfo){
      return  '/register'
    }
  }
  // 注册和登录页不显示tarbar
  if(to.path==='/register'||to.path==='/login'){
    store.commit('changeTar',false)
  }else{
    store.commit('changeTar',true)
  }
})
export default router
