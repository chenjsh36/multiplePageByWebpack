// webpack的配置文件是一个node.js的module，用CommonJS风格来书写

module.exports = {
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    module: require('./webpack-config/module.config.js'),

    plugins: require('./webpack-config/plugins.dev.config.js'),

    resolve: require('./webpack-config/resolve.config.js'),

    // target: 'node'
    // devServer: {
    // 	hot: true
    // }
}

