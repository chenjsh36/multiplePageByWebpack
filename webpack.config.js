// webpack的配置文件是一个node.js的module，用CommonJS风格来书写

module.exports = {
    entry: require('./webpack-config/entry.config.js'),
    output: require('./webpack-config/output.config.js'),
    module: require('./webpack-config/module.config.js'),
    plugins: require('./webpack-config/plugins.build.config.js'),
    // eslint: require('./webpack-config/vender/eslint.config.js')
}