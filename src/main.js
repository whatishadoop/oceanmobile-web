import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import animated from 'animate.css'

import App from './App'
import router from './router/routers'
import permission from './components/permission'
import store from './store'

// 引入所有icon svg资源，才能触发svg-sprite-loader 解析svg,在body页面插入所有symbol sprite全局内容，通过id进行调用
import '@/icons' // icon
import './router/index' // permission control

//  引入总线
import Bus from './utils/bus'
// 引入uuid生成器
import uuid from 'uuid-js'
// 引入自定义组件(插件)
import webAppPlugin from './views/appmanage/components'
// 引入oceaneye组件
import oceaneyePlugin from './materials/components'

// 引入手机端核心模块，包括一些拓展组件、方法等
import '@/materials/core'

// 配置axios拦截器
import Axios from 'axios'
import { interceptor } from './utils/ajax'
interceptor(Axios)

Vue.prototype.$uuid = uuid
Vue.prototype.$bus = Bus
Vue.prototype.$axios = Axios
Vue.use(animated)
Vue.use(webAppPlugin)
Vue.use(oceaneyePlugin)
Vue.use(permission)
Vue.use(ElementUI)
Vue.config.productionTip = false

// 开发环境，引入mock
// process.env.NODE_ENV === 'development' && require('@/mock/index.js')
// require('@/mock/index.js')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
