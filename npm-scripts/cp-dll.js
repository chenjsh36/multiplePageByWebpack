var fs = require('fs');
var path = require('path');
var dirVars = require('../webpack-config/base/dir-vars.config.js');

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}


fs.mkdirSync(dirVars.buildDir);
fs.mkdirSync(path.resolve(dirVars.buildDir, 'dll'));
var src = path.resolve(dirVars.dllDir, 'dll.js');
var dist = path.resolve(dirVars.buildDir, 'dll/dll.js');

copy(src, dist);
