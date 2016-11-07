var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');
var path = require('path');
/* 抽取出所有通用的部分 */
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',      // 需要注意的是，chunk的name不能相同！！！
  filename: '[name].bundle.js',
  minChunks: 4,
});

/* 全局shimming */
/**
 * ProvidePlugin的机制是：当webpack加载到某个js模块里，出现了未定义且名称符合（字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块， 对于jq的老插件使用了如jQuery.fn.extend(object)的时候，就会自动引入jquery；另外，自己的代码里也可以不用 require jquery 了。
 * 除了jquery，如vue等也可以使用这种方式自动引入，前提当然是你已经使用npm install 了所需要的库
 */
var providePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
});

var extractTextPlugin = new ExtractTextPlugin('[name]/styles.css');

var dllPlugin = new webpack.DllReferencePlugin({
  context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
  manifest: require('../../manifest.json'), // 指定manifest.json
  name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
});


var pluginsConfig = [commonsChunkPlugin, providePlugin, extractTextPlugin, dllPlugin];


pageArr.forEach((page) => {
    console.log('path:', page);
    const htmlPlugin = new HtmlWebpackPlugin({
        // title: `${page}`,
        filename: `${page}/main.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/main.jade`),
        // template: path.resolve(dirVars.pagesDir `./${page}/html.js`),
        chunks: [page, 'commons'], // 嵌入的文件，如果没有声明，会将所有提取出来的chunk和exact都放入到每个页面中
        // hash: true,
        // inject: 'body'
    });
    pluginsConfig.push(htmlPlugin);
})
module.exports = pluginsConfig;