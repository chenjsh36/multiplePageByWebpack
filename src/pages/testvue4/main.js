import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './app.vue'
import routerInit from './router'
import vuexInit from './vuex/vuex'
import './main.less'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

/* 配置 vuex */
const store = vuexInit(Vuex);

/* 配置 路由 */
const router = routerInit(VueRouter, store);

/* 入口
 * 加入 状态管理器
 * 加入 路由控制器
 * 将路由挂载到 id 为 app 的元素上, 考虑是否可以直接挂载到router-view上
 */
module.exports = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app');