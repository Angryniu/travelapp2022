import { createApp } from 'vue'
// import { Form,Field,Button, Tabbar, TabbarItem, NavBar, Icon,Search,Swipe, SwipeItem ,Image as VanImage,Grid, GridItem,Popup,Area,Badge,Col, Row,Sticky ,ConfigProvider,Empty,Cell, CellGroup,IndexBar, IndexAnchor  } from 'vant';
import vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import {http} from './utils/api'

const app = createApp(App)
app.config.globalProperties.$http=http
app.use(store)
app.use(router)
// app.use(Tabbar)
// app.use(TabbarItem)
// app.use(NavBar)
// app.use(Icon)
// app.use(Search)
// app.use(Swipe)
// app.use(SwipeItem)
// app.use(VanImage)
// app.use(Grid)
// app.use(GridItem)
// app.use(Popup)
// app.use(Area)
// app.use(Badge)
// app.use(Col)
// app.use(Row)
// app.use(Sticky)
// app.use(ConfigProvider)
// app.use(Empty)
// app.use(Cell)
// app.use(CellGroup)
// app.use(IndexBar)
// app.use(Button)
// app.use(IndexAnchor)
// app.use(Form)
// app.use(Field)
app.use(vant)
app.mount('#app')
