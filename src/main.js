import Vue from 'vue'

// import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
// 引入iconfont
import '@/assets/iconfont/iconfont.css'

// 表格高度自适应指令
import adaptive from './directive/el-table/index.js'
// 容器高度自适应
import adaptiveHeight from './directive/adaptive-height/index.js'
import * as filters from './filters' // global filters
import constant from './utils/constant.js'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(Element, {
  // size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.prototype.$constant = constant
Vue.use(adaptive)
Vue.use(adaptiveHeight)
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
