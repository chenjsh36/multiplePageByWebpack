var webpack = require('webpack');
var pluginsConfig = require('./common/plugins.config.js');

pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
    }
}));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: true,
}));

module.exports = pluginsConfig;
