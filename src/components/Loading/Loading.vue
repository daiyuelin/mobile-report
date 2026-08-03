<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-18 16:19:53
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 16:43:50
 * @FilePath: \JoyChat_Compinent\src\components\Loading\Loading.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-loading">
    <demo-block :title="t('type')">
      <van-loading />
      <van-loading type="spinner" />
    </demo-block>

    <demo-block :title="t('color')">
      <van-loading color="#444444" />
      <van-loading type="spinner" color="#444444" />
    </demo-block>

    <demo-block :title="t('size')">
      <van-loading size="24" />
      <van-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="t('text')">
      <van-loading size="24px">
        {{ t("loading") }}
      </van-loading>
    </demo-block>

    <demo-block :title="t('vertical')">
      <van-loading size="24px" vertical>
        {{ t("loading") }}
      </van-loading>
    </demo-block>

    <demo-block :title="t('textColor')">
      <van-loading size="24px" vertical color="#969799">
        {{ t("loading") }}
      </van-loading>
      <van-loading size="24px" vertical text-color="#969799">
        {{ t("loading") }}
      </van-loading>
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
import MdEn from "../../../docs/loading/README.md";
import Md from "../../../docs/zh/loading/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Loading",
  components: { DemoBlock, MdEn, Md },
  data() {
    return {
      mdComponent: "Md",
      checked: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          type: "加载类型",
          text: "加载文案",
          size: "自定义大小",
          color: "自定义颜色",
          vertical: "垂直排列",
          textColor: "自定义文本颜色",
          loading: "加载中...",
        },
        "en-US": {
          showCode: "Show Code",
          type: "Type",
          text: "Text",
          size: "Size",
          color: "Color",
          vertical: "Vertical",
          textColor: "Text Color",
          loading: "Loading...",
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
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-loading {
  background: @white;
  text-align: left;
  min-height: calc(100vh - 56px);

  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
