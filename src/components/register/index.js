/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-12 16:43:47
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-05-12 16:50:23
 */

import DemoBlockOne from '../DemoBlock.vue'
// 这里是重点
const DemoBlock = {
    install: function(Vue){
        Vue.component('DemoBlock',DemoBlockOne)
    }
}

// 导出组件
export default DemoBlock