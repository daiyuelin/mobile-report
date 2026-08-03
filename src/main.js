/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-05 13:47:56
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2025-07-27 13:54:02
 */
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.less';
import VueRouter from 'vue-router';
import router from './router';
import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';
import VueI18n from 'vue-i18n'
import DemoBlock from './components/register/index'
import Vuex from 'vuex'
import store from './store/index'
import "lib-flexible"


Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(DemoBlock);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: 'zh', // set locale
})

new Vue({
  i18n,
  render: h => h(App),
  store,
  router
}).$mount('#app')

Locale.use('en-US', enUS);
