import { createStore } from 'vuex'
import {http} from '../utils/api'
import router from '../router/index';
import { Toast } from 'vant';
export default createStore({
  state: {
    userinfo:{},
    showTar:true,
    tabbaractive:0,
    order:[],
    start:[]
  },
  getters: {
  },
  mutations: {
    setUserInfo(state,data){
      let userinfo = JSON.parse(data)
      state.userinfo=userinfo
    },
    setOrder(state,data){
      let order = JSON.parse(data)
      state.order=order
    },
    changeTar(context,info){
      context.showTar=info
    },
    changeTabbaractive(state,payload){
      state.tabbaractive=payload
    },
    logout(state,payload){
      localStorage.removeItem('userinfo');
      localStorage.setItem('order',"[]")
      router.push('/register')
    },
    pushOrder(state,payload){
      let order = JSON.parse(payload);
      order.num=1;
      state.order.push(order);
      localStorage.setItem('order',JSON.stringify(state.order));
    },
    delOrder(state,payload){
      state.order.splice(payload,1)
      localStorage.setItem('order',JSON.stringify(state.order))
    }
  },
  actions: {
    register(context,info){
      http.post('/api/users',JSON.parse(info)).catch((err)=>{
        if(err){
          Toast.fail('该手机号已注册，请直接登录');
          router.push('/login')
        }
      })
    },
    login(context,info){
      let userinfo = JSON.parse(info);
      http.get('/api/users?id='+userinfo.cellphone).then((res)=>{
        if(res.data.length&&res.data[0].id===userinfo.cellphone&&res.data[0].password===userinfo.password){
          localStorage.setItem('userinfo',JSON.stringify(res.data[0]))
          context.state.tabbaractive=0
          router.push('/home')
        }else{
          Toast.fail('密码或者手机号错误！！！');
        }
      })
    }
  },
  modules: {
  }
})
