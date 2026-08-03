<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-20 10:56:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-21 13:27:25
 * @FilePath: \JoyChat_Compinent\src\components\Navbar\Navbar.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <demo-block :title="t('basicUsage')">
      <van-nav-bar
        :title="t('title')"
        :left-text="t('back')"
        :right-text="t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="t('useSlot')">
      <van-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
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
import MdEn from "../../../docs/nav-bar/README.md";
import Md from "../../../docs/zh/nav-bar/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import { Toast } from "vant";
export default {
  name: "Navbar",
  components: {
    DemoBlock,
    MdEn,
    Md,
  },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          useSlot: "使用插槽",
          basicUsage: "基础用法",
          title: "标题",
          back: "返回",
          button: "按钮",
        },
        "en-US": {
          showCode: "Show Code",
          useSlot: "Use Slot",
          basicUsage: "Basic Usage",
          title: "Title",
          back: "Back",
          button: "Button",
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
    onClickLeft() {
      Toast(this.t("back"));
    },
    onClickRight() {
      Toast(this.t("button"));
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
/deep/.van-switch {
  margin-left: 16px;
}
</style>
