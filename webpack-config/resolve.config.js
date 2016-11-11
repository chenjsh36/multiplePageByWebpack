var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  alias: {
    'vue$': 'vue/dist/vue'
    /* 各种目录 */
    // iconfontDir: path.resolve(dirVars.publicDir, 'iconfont/'),
    // configDir: dirVars.configDir,

    /* vendor */
    /* bootstrap 相关 */
    // metisMenu: path.resolve(dirVars.vendorDir, 'metisMenu/'),

    /* libs */
    // withoutJqueryModule: path.resolve(dirVars.libsDir, 'without-jquery.module'),
    // routerModule: path.resolve(dirVars.libsDir, 'router.module'),

    // libs: path.resolve(dirVars.libsDir, 'libs.module'),

    /* less */
    // lessDir: path.resolve(dirVars.publicDir, 'less'),

    /* components */

    /* layout */
    // layout: path.resolve(dirVars.layoutDir, 'layout/html'),
    // 'layout-without-nav': path.resolve(dirVars.layoutDir, 'layout-without-nav/html'),

    /* logic */
    // cm: path.resolve(dirVars.logicDir, 'common.module'),
    // cp: path.resolve(dirVars.logicDir, 'common.page'),

    /* config */
    // configModule: path.resolve(dirVars.configDir, 'common.config'),
    // bootstrapConfig: path.resolve(dirVars.configDir, 'bootstrap.config'),
  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extentions: ['', '.js', '.vue'],
};
