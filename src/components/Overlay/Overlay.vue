<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-21 09:01:32
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 16:40:15
 * @FilePath: \JoyChat_Compinent\src\components\Overlay\Overlay.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-overlay">
    <demo-block :title="t('basicUsage')">
      <van-button
        type="primary"
        :text="t('showOverlay')"
        style="margin-left: 16px"
        @click="show = true"
      />
      <van-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block :title="t('embeddedContent')">
      <van-button
        type="primary"
        :text="t('embeddedContent')"
        style="margin-left: 16px"
        @click="showEmbedded = true"
      />
      <van-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </van-overlay>
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
import MdEn from "../../../docs/overlay/README.md";
import Md from "../../../docs/zh/overlay/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Overlay",
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
          showOverlay: "显示遮罩层",
          embeddedContent: "嵌入内容",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          showOverlay: "Show Overlay",
          embeddedContent: "Embedded Content",
          basicUsage: "Basic Usage",
        },
      },
      show: false,
      showEmbedded: false,
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
/deep/.van-switch {
    margin-left: 16px;
  }
.demo-overlay {
  background: @white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: @white;
    border-radius: 4px;
  }
}
</style>

