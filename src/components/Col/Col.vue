<template>
  <div class="demo-col">
    <demo-block :title="t('basicUsage')">
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4">span: 4</van-col>
        <van-col span="10" offset="4"> offset: 4, span: 10 </van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12"> offset: 12, span: 12 </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <van-row gutter="20">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </demo-block>

    <demo-block :title="t('justify')">
      <van-row type="flex" justify="center">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <van-row type="flex" justify="end">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <van-row type="flex" justify="space-between">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <van-row type="flex" justify="space-around">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>
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
import MdEn from "../../../docs/layout/README.md";
import Md from "../../../docs/zh/layout/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Col",
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
          title2: "在列元素之间增加间距",
          justify: "对齐方式",
          basicUsage: "基础用法",
          showCode: "显示源码",
        },
        "en-US": {
          title2: "Column Spacing",
          justify: "Justify Content",
          basicUsage: "Basic Usage",
          showCode: "Show Code",
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
.demo-col {
  text-align: left;
  background: @white;
  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .van-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #92a2bd;
    }

    &:nth-child(even) {
      background-color: #92a2bd;
    }
  }
  .van-row {
    display: flex;
    flex-wrap: wrap;

    &--justify-center {
      justify-content: center;
    }

    &--justify-end {
      justify-content: flex-end;
    }

    &--justify-space-between {
      justify-content: space-between;
    }

    &--justify-space-around {
      justify-content: space-around;
    }

    &--align-center {
      align-items: center;
    }

    &--align-bottom {
      align-items: flex-end;
    }
  }
}
</style>
