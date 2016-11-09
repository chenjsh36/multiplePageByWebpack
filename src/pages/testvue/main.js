import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './part.vue'
import './main.less'

Vue.use(ElementUI)

/* eslint-disable no-new */
module.exports = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
