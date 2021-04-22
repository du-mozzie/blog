import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'
import mavonEditor from 'mavon-editor'

//导入路由拦截
import './permission'

// 使用mavon-editor
Vue.use(mavonEditor)
import 'mavon-editor/dist/css/index.css'

//使用element-ui
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

//使用axios
import './axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
