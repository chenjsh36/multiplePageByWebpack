var path = require('path');
var dirVarsConfig = require('./base/dir-vars.config.js');

// 入口文件
var pagesDir = dirVarsConfig.pagesDir;
var pageArr = [  
    // 'index/login',
    'index/index',
    // 'alert/index',
    // 'user/edit-password', 'user/modify-info',
    ];

var configEntry = {};
pageArr.forEach((page) => {
    configEntry[page] = path.resolve(pagesDir, page + '/main');
})

module.exports = configEntry;