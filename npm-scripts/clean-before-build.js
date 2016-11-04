var fs = require('fs');
var rimraf = require('rimraf');
var path = require('path');
var dirVars = require('../webpack-config/base/dir-vars.config.js');
rimraf(dirVars.buildDir, fs, function cb() {
    console.log('build 目录已经清空');
})


function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

var src = path.resolve(dirVars.dllDir, 'dll.js');
var dist = path.resolve(dirVars.buildDir, 'dll/dll.js');

copy(src, dist);