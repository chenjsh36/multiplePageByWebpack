var dirVarsConfig = require('./base/dir-vars.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var moduleConfig = {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint', // 指定启用eslint-loader
                include: dirVarsConfig.srcRootDir, // 指定审查范围仅为自己团队写的业务代码
                exclude: [/bootstrap/], // 剔除掉不需要利用eslint审查的文件
            }
        ],
        loaders: [
            {
                test: require.resolve('jquery'), // 此loader配置项的目标是NPM中的jquery
                loader: 'expose?$!expose?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            },
            {
                test: /\.css$/,
                exclude: /node_modules|bootstrap/,
                // loader: 'css-loader?-minimize&autoprefixer'
                loader: ExtractTextPlugin.extract(['style-loader'], 'css-loader?minimize'),
            },
            {
                test: /\.less$/,
                include: dirVarsConfig.srcRootDir,
                loader: ExtractTextPlugin.extract(['style-loader', 'less'], 'css-loader?minimize!less'),
            },
            {
                test: /\.es6$/,
                include: dirVarsConfig.srcRootDir,
                loader: 'babel-loader?presets[]=es2015-loose&cacheDirectory&plugins[]=transform-runtime',
            },
            {
                test: /\.html$/,
                include: dirVarsConfig.srcRootDir,
                loader: 'html',
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                // 由于使用了[hash]，因此即便是不同页面引用了相同名字但实际内容不同的图片，也不会造成“覆盖”的情况出现；进一步讲，如果不同页面引用了在不同位置但实际内容相同的图片，这还可以归并成一张图片，方便浏览器缓存呢。
                test: /\.(png|jpg|gif)$/,
                include: dirVarsConfig.srcRootDir,
                loader: 'url?limit=8192&name=./static/img/[hash].[ext]',
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                include: dirVarsConfig.srcRootDir,
                loader: 'file?name=./static/fonts/[name].[ext]',
            },
        ]
    }

module.exports = moduleConfig;