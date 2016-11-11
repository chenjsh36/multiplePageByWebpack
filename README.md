# multiplePageByWebpack
> Webpack 构建 WEB 多页面应用

## 文件目录结构
```
├─build # 编译后生成的所有代码、资源（图片、字体等）
├─node_modules # 利用npm管理的所有包及其依赖
├─vendor # 所有不能用npm管理的第三方库
├─npm-scripts # node 脚本（清除文件、打包、配置依赖)
├─.babelrc # babel的配置文件
├─.eslintrc # ESLint的配置文件
├─index.html # 仅作为重定向使用（已删除）
├─package.json # npm的配置文件
├─webpack-config # webpack 各种配置文件
├─webpack.config.js # webpack的配置文件，发布环境的配置文件
├─webpack.dev.config.js # webpack的配置文件，生产环境的配置文件
├─webpack.dev.server.js # webpack的配置文件，生产环境代理服务器的配置文件
├─webpack.dll.config.js # webpack的配置文件，打包三方库的配置文件
├─webpack.exserver.js # webpack的配置文件，实时监听打包编译的配置文件
├─src # 当前项目的源码
    ├─dll # 构建工具生产的代码
    │  ├─dll.js # 不需要实时编译监听的三方库
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─index # 业务模块
    │  │  ├─imgs
    │  │  |  └─logo.jpg # 每个业务的图片存储
    │  │  ├─main.jade # 入口页面
    │  │  ├─main.less # 入口样式
    │  │  └─main.js # 入口脚本
    │  ├─vue # 使用vue开发情况的业务模块
    │  │  ├─imgs
    │  │  |  └─logo.jpg # 每个业务的图片存储
    │  │  └─ViewLogin # 业务组件
    │  │      └─ViewLogin.vue # 如果app比较复杂，可以分成多块再拼在一起
    │  │  ├─main.jade # 入口页面
    │  │  ├─main.less # 入口样式
    │  │  └─main.js # 入口脚本
    └─public # 各个页面使用到的公共资源
        ├─comp # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─config # 各种配置文件（后期如果系统配置需要往这里面放）
        ├─iconfont # iconfont的字体文件
        ├─imgs # 公用的图片资源（系统的logo这种全局公用的图片资源）
        ├─modules # 可复用的模块（包括样式表),业务逻辑相关的不放
        │  ├─module.js # 可复用的脚本组件等
        │  └─layout.less # 全局的颜色方案
        ├─libs # 与业务逻辑无关的库都可以放到这里(只放不可使用npm安装的）
        │  └─semantic.less # 全局的颜色方案
        └─logic # 可复用的业务逻辑
```

## 架构功能
* 多页面构建，配合后端渲染
* 静态资源打包（css/less、图片、swf、字体）
* require的语法支持
* JS 语法检查
* CSS 浏览器兼容
* 版本化代码
* 实时代码监测编译配合浏览器刷新
* 加入 vue，可做单页面开发
* 使用 jade 替代 html
* 加入 less 语法支持
* 使用 es6 替代 js 语法

## 项目DEMO目前支持的组件和功能
* 加入 vuex 作 vue 状态管理器
* 加入 vue-router 作 路由控制器
* 加入 element 作为 vue 组件UI库



## 环境配置&运行项目
#### 1、 Git 账号和客户端

[github 官网](https://github.com/)

[git客户端: SourceTree](https://blog.sourcetreeapp.com/) 或者其他客户端


#### 2、node 和 npm

请选择 [node 最新版本 6以上](http://nodejs.cn/)


#### 3、项目下载和安装

项目地址： [multiplePagaByWebpack](https://github.com/chenjsh36/multiplePageByWebpack)
```
> git clone address 
```

cd 到 package.json 所在的目录， 安装依赖包
```
npm install
```

#### 4、运行项目

1、打包三方库：
```
npm run dll
```
2、运行开发环境：
```
npm run startdev
```
（注：期间如果有提示找不到模块xxx，npm install 相关的模块）


## 资源（需要花点时间了解下的 ）
1、[前端规范](https://github.com/ecomfe/spec)

2、[less：css的预编译语言](http://lesscss.cn/)

3、[jade or call 'pug'](https://pugjs.org/api/getting-started.html)

4、[es6](http://es6.ruanyifeng.com/)

5、[Vue.js 2.0](https://vuejs.org/)



## 其他资源
1、[webpack](http://webpack.github.io/docs/)

2、[vuex](http://vuex.vuejs.org/en/)

3、[vue-loader](http://vue-loader.vuejs.org/en/index.html)

4、[vue-router](http://router.vuejs.org/en/)

5、[Element for vue2.0](http://element.eleme.io/#/)