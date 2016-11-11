var webpack = require('webpack');
var pluginsConfig = require('./common/plugins.config.js');

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));


pluginsConfig.push(new webpack.HotModuleReplacementPlugin());

pluginsConfig.push(new webpack.optimize.OccurenceOrderPlugin());

pluginsConfig.push(new webpack.NoErrorsPlugin());

module.exports = pluginsConfig;
