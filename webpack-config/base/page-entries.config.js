// var pageArr = [  
//     // 'index/login',
//     'index/index',
//     // 'alert/index',
//     // 'user/edit-password', 'user/modify-info',
//     ];
// module.exports = pageArr;

// 从手动输入入口切换到自动输入入口，自动寻找pages里面的 main 名称的脚本作为入口函数

var glob = require('glob');
var dirVar = require('./dir-vars.config.js');
var options = {
	cwd: dirVar.pagesDir,
	sync: true, // 同步
};

var globInstance = new glob.Glob('**/main.?(js|coffee|es6)', options);
var found = globInstance.found;
var pageArr = [];
var reg = /(.*)\/main\.?(js|coffee|es6)/i;
found.forEach(function(elem, index) {
	pageArr.push(reg.exec(elem)[1]);
})

console.log('globInstance:', pageArr);
module.exports = pageArr;