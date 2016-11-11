import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
import './main.less'
import ViewLogin from './ViewLogin/ViewLogin.vue'
import ViewDataPlt from './ViewDataPlt/ViewDataPlt.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

/* 状态管理器 */
const store = new Vuex.Store({
    strict: true,
    // 储存基本的变量和数据
    state: {
        count: 0,
        ifLogin: false,
        toDos: [{ id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }]
    },
    // 公用函数
    getters: {
        toDosOfDone: (state, getters) => {
            var dones = state.toDos.filter(todo => todo.done)
            return dones;
        },
        // toDosCountDone: (state, getters) => {
        //     return getters.toDosOfDone.length;
        // }
        toDosCountDone: (state, getters) => getters.toDosOfDone.length
    },
    // 事件触发(理论上只有mutation能修改state参数)
    // 注意：定义在mutations里面的事件必须都是同步的！否则无法对其进行跟踪
    mutations: {
        increment(state, payload) {
            if (arguments.length > 1) {
                state.count += payload;
                return;
            }
            state.count++;
        },
        login(state) {
            state.ifLogin = true;
        },
        logout(state) {
            state.ifLogin = false;
        },
        addToDos(state, payload) {
            state.toDos.push(payload);
        }
    },
    // 异步
    // store.dispatch('incrementAsync', {amount: 10})
    actions: {
        increment(context) {
            // 这里的 context 并不是store本身，而是一个有store相同的属性和方法的对象
            context.commit('increment');
        },
        incrementAsync(context) {
            // 异步处理操作由actions来做，再在回调里面使用 commit 来处理同步事件
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
        addToDos(context) {
            setTimeout(() => {
                var number = Math.random() * 100;
                var retData = { id: 2, text: '' + number, done: false };
                context.commit('addToDos', retData);
            }, 1000)
        }
    }
})
// store.commit('login')

/* 路由控制器 */
const routes = [
    {
        path: '/',
        component: ViewLogin
    },
    {
        path: '/dataplatform',
        component: ViewDataPlt
    }
]
const router = new VueRouter({
    routes
})

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
