<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-25 11:12:18
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-18 11:40:58
 * @FilePath: \JoyChat_Compinent\src\components\Progress\Progress.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-progress">
    <demo-block :title="t('basicUsage')">
      <van-progress :percentage="50" />
    </demo-block>

    <demo-block :title="t('strokeWidth')">
      <van-progress :percentage="50" stroke-width="8" />
    </demo-block>

    <demo-block :title="t('title2')">
      <van-progress inactive :percentage="50" />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-progress
        color="#f2826a"
        :percentage="25"
        :pivot-text="t('orange')"
      />
      <van-progress color="#92A2BD" :percentage="50" :pivot-text="t('red')" />
      <van-progress
        :percentage="75"
        :pivot-text="t('purple')"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
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
import MdEn from "../../../docs/progress/README.md";
import Md from "../../../docs/zh/progress/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Progress",
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
          title2: "置灰",
          title3: "样式定制",
          strokeWidth: "线条粗细",
          basicUsage: "基础用法",
          orange: "橙色",
          red: "红色",
          purple: "紫色",
        },
        "en-US": {
          showCode: "Show Code",
          title2: "Inactive",
          title3: "Custom Style",
          strokeWidth: "Stroke Width",
          basicUsage: "Basic Usage",
          orange: "Orange",
          red: "Red",
          purple: "Purple",
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
.demo-progress {
  background: @white;

  .van-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
