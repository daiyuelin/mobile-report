<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-19 14:22:38
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:16:17
 * @FilePath: \JoyChat_Compinent\src\components\DIvider\Divider.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-divider">
    <demo-block :title="t('basicUsage')">
      <van-divider />
    </demo-block>

    <demo-block :title="t('withText')">
      <van-divider>
        {{ t("text") }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
      <van-divider content-position="left">
        {{ t("text") }}
      </van-divider>

      <van-divider content-position="right">
        {{ t("text") }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
      <van-divider dashed :hairline="false">
        {{ t("text") }}
      </van-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-divider
        :style="{ borderColor: '#444444', color: '#444444', padding: '0 16px' }"
      >
        {{ t("text") }}
      </van-divider>
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
import MdEn from "../../../docs/divider/README.md";
import Md from "../../../docs/zh/divider/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Divider",
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
          text: "文本",
          dashed: "虚线",
          withText: "展示文本",
          contentPosition: "内容位置",
          customStyle: "自定义样式",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          text: "Text",
          dashed: "Dashed",
          withText: "With Text",
          contentPosition: "Content Position",
          customStyle: "Custom Style",
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
.demo-divider {
  background-color: @white;
  text-align: left;

  .van-doc-demo-block__title {
    padding-top: @padding-md;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

