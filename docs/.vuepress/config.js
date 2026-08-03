/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-10 10:16:39
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-13 16:23:22
 */
module.exports = {
    title: 'BMW',
    // locales: {
    //   // 键名是该语言所属的子路径
    //   // 作为特例，默认语言可以使用 '/' 作为其路径。
    //   '/': {
    //     lang: '英文', // 将会被设置为 <html> 的 lang 属性
    //     title: 'VuePress',
    //     description: 'Vue-powered Static Site Generator'
    //   },
    //   '/zh/': {
    //     lang: '中文',
    //     title: 'VuePress',
    //     description: 'Vue 驱动的静态网站生成器'
    //   }
    // },
    themeConfig: {
      locales: {
        '/': {
          sidebar: {
            '/' : [
              {
                collapsable: false,
                sidebarDepth:0,
                children: [
                  '/'
                ]
              },{
              title: '组件',   // 必要的
              collapsable: false,
              sidebarDepth:0,
              children: [
                '/card/',
                '/button/'
              ]
            }]
          }
        },
        '/zh/': {
          sidebar: {
            '/zh/' : [
              {
                collapsable: false,
                sidebarDepth:0,
                children: [
                  '/zh/'
                ]
              },{
              title: 'components',   // 必要的
              collapsable: false,
              sidebarDepth:0,
              children: [
                '/zh/card/',
                '/zh/button/'
              ]
            }]
          }
        }
      },
      
    }
  }