// 同步加载模块
// import ViewLogin from './ViewLogin/ViewLogin.vue'
// import ViewDataPlt from './ViewDataPlt/ViewDataPlt.vue'
// import ViewHeadLine from './ViewHeadLine/ViewHeadLine.vue'
// import ViewNotFound from './ViewNotFound/ViewNotFound.vue'

// 异步加载模块！！！
const ViewLogin = (resolve) => {
    require.ensure(['./views/ViewLogin.vue'], () => {
        resolve(require('./views/ViewLogin.vue'));
    });
};
const ViewDataPlt = (resolve) => {
    require.ensure(['./views/ViewDataPlt.vue'], () => {
        resolve(require('./views/ViewDataPlt.vue'));
    });
};

const ViewGHeadLine = (resolve) => {
    require.ensure(['./views/ViewGHeadLine.vue'], () => {
        resolve(require('./views/ViewGHeadLine.vue'));
    });
};

const ViewHeadLine = (resolve) => {
    require.ensure(['./views/ViewHeadLine.vue'], () => {
        resolve(require('./views/ViewHeadLine.vue'));
    });
};
const ViewNotFound = (resolve) => {
    require.ensure(['./views/ViewNotFound.vue'], () => {
        resolve(require('./views/ViewNotFound.vue'));
    });
};


export default (VUeRouter, store, opt) => {
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
                    redirect: 'gtoday'
                },
                {
                    // UserProfile will be rendered inside ViewDataPlt's <router-view>
                    // when /dataplatform/today is matched
                    path: 'gtoday',
                    component: ViewGHeadLine,
                },
                {
                    // UserProfile will be rendered inside ViewDataPlt's <router-view>
                    // when /dataplatform/today is matched
                    path: 'today',
                    component: ViewHeadLine,
                }
            ],
            meta: { requiresAuth: false }
        },
        {
            path: '*',
            component: ViewNotFound
        }
    ];

    // scrollBehavior:
    // - only available in html5 history mode
    // - defaults to no scroll behavior
    // - return false to prevent scroll
    const scrollBehavior = (to, from, savedPosition) => {
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition;
        }
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }

    const routerOpt = {
        routes: routes
    };
    if (opt && opt.mode === 'history') {
        routerOpt.mode = 'history'; // 采用真实的URL模式，但是要服务器后天将所有匹配的地址都映射到这个页面来，目前只使用 hash
        routerOpt.scrollBehavior = scrollBehavior;
    }

    const router = new VUeRouter(routerOpt);

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
        next();
    })

    return router;
}