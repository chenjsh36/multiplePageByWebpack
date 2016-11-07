var webpack = require('webpack');
var pluginsConfig = require('./common/plugins.config.js');

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));


pluginsConfig.push(new webpack.HotModuleReplacementPlugin());

module.exports = pluginsConfig;
