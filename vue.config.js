/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-12 13:04:29
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2025-08-29 12:06:37
 */
const path = require('path');

module.exports = {
  configureWebpack:{
    devtool:"source-map"
  },
  chainWebpack: (config) => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  },

  publicPath: '/',

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/assets/vant.less";`,
          },
        },
      },
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5
          })
        ]
      }
    },
  }
}
