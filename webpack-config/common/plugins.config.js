var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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

var pluginsConfig = [commonsChunkPlugin, providePlugin, extractTextPlugin];

module.exports = pluginsConfig;