<template>
  <div class="demo-badge">
    <demo-block :title="t('basicUsage')">
      <van-badge content="5">
        <div class="child" />
      </van-badge>
      <van-badge dot>
        <div class="child" />
      </van-badge>
    </demo-block>

    <demo-block :title="t('max')">
      <van-badge content="20" max="9">
        <div class="child" />
      </van-badge>
      <van-badge content="200" max="99">
        <div class="child" />
      </van-badge>
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-badge content="5" color="#444444">
        <div class="child" />
      </van-badge>
      <van-badge dot color="#444444">
        <div class="child" />
      </van-badge>
    </demo-block>

    <demo-block :title="t('standalone')">
      <van-badge content="200" max="99" style="margin-left: 16px" />
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
import MdEn from "../../../docs/badge/README.md";
import Md from "../../../docs/zh/badge/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Badge",
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
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          max: "最大值",
          standalone: "独立展示",
          customColor: "自定义颜色",
          customContent: "自定义徽标内容",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          max: "Max",
          standalone: "Standalone",
          customColor: "Custom Color",
          customContent: "Custom Content",
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
.demo-badge {
  min-height: calc(100vh - 56px);
  background-color: @white;
  text-align: left;

  .van-badge__wrapper {
    margin-left: @padding-md;
  }

  .child {
    width: 40px;
    height: 40px;
    background: @gray-2;
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
