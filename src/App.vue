<!--
 * @ProjectName: E-card
 * @FileName: 
 * @PackageName: 
 * @Author: Tianyu
 * @Date: 2020-08-27 14:03:49
 * @LastEditTime: 2021-06-01 10:18:07
 * @LastEditors: Dai YueLin
 * @Description: 
 * @FilePath: /JoyChatTest/src/App.vue
 * @copyright(c) 2017-2020 BMW Brilliance Automotive Co., Ltd.
-->
<template>
  <div id="app">
  
    <div>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script type="text/javascript" src="applocal://www/cordova.js"></script>
<!-- 为了兼容HTTPS,需建一个名为cordova.min.js空白的js文件 -->
<script src="../public/cordova.min.js"></script>
<script>
import Vue from "vue";
import { getLangFromUserAgent } from "./utils/util.js";

export default {
  name: "App",
  data() {
    return {
      transitionName: "",
      totx: 1,
    };
  },
  watch: {
    $route(to, from) {
      // 切换路由时滚动条置顶
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      //如果标题存在，就改变顶部标题栏
      if (to.meta.title) {
        this.changeTitle(to.meta.title);
      }
      let totx = to.meta.tx;
      this.totx = to.meta.tx;
      this.changeLeft(totx);
      if (from.name === null) {
        return;
      }
    },
  },
  created() {
    // 获取当前语言国际化
    this.getLangFromUserAgent();
    // 清除右侧按钮
   // this.clearRightButtons();
  },
  methods: {
    clearRightButtons() {
      cordova.exec(
        function (result) {
        },
        function (error) {},
        "WorkPlus_WebView",
        "clearRightButtons",
        []
      );
    },
    // 获取手机当前语言
    getLangFromUserAgent() {
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        // 改变语言环境
        this.$i18n.locale = "en";
      }
    },
    // 修改标题
    changeTitle(title) {
      cordova.exec(
        function (result) {},
        function (error) {},
        "WorkPlus_WebView",
        "title",
        [title]
      );
    },
    changeLeft: changeLeft,
    goUp() {
      console.log("totx", this.totx);
      if (this.totx == 1) {
        cordova.exec(
          function (result) {
            alert(JSON.stringify(result, null, 4));
          },
          function (error) {
            alert("调用失败");
          },
          "WorkPlus_WebView",
          "exit",
          []
        );
      } else {
        this.$router.go(-1);
      }
    },
  },
};
function changeLeft(index) {
  Vue.prototype.leftWatch = index;
}
</script>

<style>

</style>
