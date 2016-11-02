var path = require('path');
var dirVarsConfig = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
// 入口文件
var pagesDir = dirVarsConfig.pagesDir;
var dllDir = dirVarsConfig.dllDir;

var configEntry = {};
pageArr.forEach((page) => {
    configEntry[page] = path.resolve(pagesDir, page + '/main');
})
// dllArr.forEach((dll) => {
// 	configEntry[dll] = path.resolve(dllDir, '/dll');
// })

module.exports = configEntry;