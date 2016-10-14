var path = require('path');
var dirVarsConfig = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
// 入口文件
var pagesDir = dirVarsConfig.pagesDir;

var configEntry = {};
pageArr.forEach((page) => {
    configEntry[page] = path.resolve(pagesDir, page + '/main');
})

module.exports = configEntry;