// 出口文件
var path = require('path');
var dirVarsConfig = require('./base/dir-vars.config.js');

var configOutput = dirVarsConfig.buildDir;

var outputConfig = {
        path: configOutput, // 生成文件的根目录，需要传入一个绝对路径。path参数和后面的filename参数共同组成入口文件的完整路径。
        // publicPath: '../../', 
        publicPath: '/',
        // publicPath参数表示的是一个URL路径（指向生成文件的根目录），用于生成css/js/图片/字体文件等资源的路径，以确保网页能正确地加载到这些资源。path参数其实是针对本地文件系统的，而publicPath则针对的是浏览器， 绝对路径适用于后端渲染模板场景，相对路径适用于整体迁移
        filename: '[name]/entry.js', // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
        chunkFilename: '[id].bundle.js',
    }

module.exports = outputConfig