import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
import './main.less'

// 同步加载模块
// import ViewLogin from './ViewLogin/ViewLogin.vue'
// import ViewDataPlt from './ViewDataPlt/ViewDataPlt.vue'
// import ViewHeadLine from './ViewHeadLine/ViewHeadLine.vue'
// import ViewNotFound from './ViewNotFound/ViewNotFound.vue'

// 异步加载模块！！！
const ViewLogin = (resolve) => {
    require.ensure(['./ViewLogin/ViewLogin.vue'], () => {
        resolve(require('./ViewLogin/ViewLogin.vue'));
    });
};
const ViewDataPlt = (resolve) => {
    require.ensure(['./ViewDataPlt/ViewDataPlt.vue'], () => {
        resolve(require('./ViewDataPlt/ViewDataPlt.vue'));
    });
};
const ViewHeadLine = (resolve) => {
    require.ensure(['./ViewHeadLine/ViewHeadLine.vue'], () => {
        resolve(require('./ViewHeadLine/ViewHeadLine.vue'));
    });
};
const ViewNotFound = (resolve) => {
    require.ensure(['./ViewNotFound/ViewNotFound.vue'], () => {
        resolve(require('./ViewNotFound/ViewNotFound.vue'));
    });
};


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
    // getters: {
    //     toDosOfDone: (state, getters) => {
    //         var dones = state.toDos.filter(todo => todo.done)
    //         return dones;
    //     },
    //     // toDosCountDone: (state, getters) => {
    //     //     return getters.toDosOfDone.length;
    //     // }
    //     toDosCountDone: (state, getters) => getters.toDosOfDone.length
    // },
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
/* END 状态管理器 */

/* 路由控制器 */
const routes = [
    {
        path: '',
        redirect: '/login'
    },
    // 用户未登录跳转到登录页面
    {
        path: '/login',
        component: ViewLogin,
        meta: { requiresNotAuth: true }
    },
    // 用户登录后跳转到数据平台页面
    {
        path: '/dataplatform',
        component: ViewDataPlt,
        children: [
            {
                path: '',
                redirect: 'today'
            },
            {
                // UserProfile will be rendered inside ViewDataPlt's <router-view>
                // when /dataplatform/today is matched
                path: 'today',
                component: ViewHeadLine,
            },
            {
                // UserProfile will be rendered inside ViewDataPlt's <router-view>
                // when /dataplatform/today is matched
                path: 'today',
                component: ViewHeadLine,
            }
        ],
        meta: { requiresAuth: true }
    },
    {
        path: '*',
        component: ViewNotFound
    }
]
// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
// const scrollBehavior = (to, from, savedPosition) => {
//     if (savedPosition) {
//         // savedPosition is only available for popstate navigations.
//         return savedPosition;
//     }
//     const position = {}
//     // new navigation.
//     // scroll to anchor by returning the selector
//     if (to.hash) {
//         position.selector = to.hash
//     }
//     // check if any matched route config has meta that requires scrolling to top
//     if (to.matched.some(m => m.meta.scrollToTop)) {
//         // cords will be used if no selector is provided,
//         // or if the selector didn't match any element.
//         position.x = 0
//         position.y = 0
//     }
//     // if the returned position is falsy or an empty object,
//     // will retain current scroll position.
//     return position
// }

const router = new VueRouter({
    routes,
    // mode: 'history' // 采用真实的URL模式，但是要服务器后天将所有匹配的地址都映射到这个页面来，目前只使用 hash
    // scrollBehavior
})

router.beforeEach((to, from, next) => {
    // 使用 meta 来设置一些通用的属性，在全局做判断，避免在局部路由上做判断，重复工作
    // 需要登录
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.ifLogin === false) {
            next(false);
        } else {
            next();
        }
    }
    // 需要已登出
    if (to.matched.some(record => record.meta.requiresNotAuth)) {
        if (store.state.ifLogin === true) {
            next(false);
        } else {
            next();
        }
    }
})
/* END 路由控制器*/

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
/* END 入口 */