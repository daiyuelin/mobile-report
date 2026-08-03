<!--
 * @Author: your name
 * @Date: 2021-01-11 11:22:58
 * @LastEditTime: 2021-06-18 11:46:34
 * @LastEditors: Dai YueLin
 * @Description: In User Settings Edit
 * @FilePath: \JoyChat_Compinent\src\components\Skeleton\Skeleton.vue
-->
<template>
  <div class="demo-skeleton">
    <demo-block :title="t('basicUsage')">
      <van-skeleton title :row="3" />
    </demo-block>

    <demo-block :title="t('showAvatar')">
      <van-skeleton title avatar :row="3" />
    </demo-block>

    <demo-block :title="t('showChildren')">
      <van-switch v-model="show" size="24px" />
      <van-skeleton title avatar :row="3" :loading="!show">
        <div class="demo-preview">
          <img src="../../../log.png" />
          <div class="demo-content">
            <h3>JoyChat</h3>
            <p>JoyChat4.0 Mobile Components</p>
          </div>
        </div>
      </van-skeleton>
    </demo-block>

    <demo-block :title="t('showCode')"
      ><van-switch v-model="checked"
    /></demo-block>
    <div class="markdown-body" v-if="checked">
      <section :is="mdComponent"></section>
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "github-markdown-css";
import MdEn from "../../../docs/skeleton/README.md";
import Md from "../../../docs/zh/skeleton/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Skeleton",
  components: {
    DemoBlock,
    MdEn,
    Md,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      show: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          showAvatar: "显示头像",
          showChildren: "显示子组件",
          title: "JoyChat4.0 Mobile Components",
          desc: "Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          showAvatar: "Show Avatar",
          showChildren: "Show Children",
          title: "JoyChat4.0 Mobile Components",
          desc: "Vant is a set of Mobile UI Components built on Vue.",
          basicUsage: "Basic Usage",
        },
      },
    };
  },
  methods: {
    t(name) {
      // 根据手机语言环境对应显示中文还是英文
      let _lang = getLangFromUserAgent();
      if (_lang === "en") {
        this.mdComponent = "MdEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "Md";
        return this.i18n["zh-CN"][name];
      }
    },
  },
};
</script>


<style lang="less" scoped>
@import "../../assets/vant.less";
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-skeleton {
  text-align: left;
  background-color: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;

  .van-switch {
    margin: 0 @padding-md @padding-xs;
  }

  .demo-preview {
    display: flex;
    padding: 0 @padding-md;

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: @padding-md;
    }
  }
}
</style>
