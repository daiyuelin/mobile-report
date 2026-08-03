<template>
  <div class="demo-notice-bar">
    <demo-block :title="t('basicUsage')">
      <van-notice-bar :text="t('text')" scrollable left-icon="volume-o" />
    </demo-block>

    <demo-block :title="t('scrollable')">
      <van-notice-bar scrollable :text="t('shortText')" />
      <van-notice-bar :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('wrapable')">
      <van-notice-bar wrapable :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('mode')">
      <van-notice-bar mode="closeable" :text="t('shortText')" />
      <van-notice-bar mode="link" :text="t('shortText')" />
    </demo-block>

    <demo-block  :title="t('verticalScroll')">
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>{{ t("content") }} 1</van-swipe-item>
          <van-swipe-item>{{ t("content") }} 2</van-swipe-item>
          <van-swipe-item>{{ t("content") }} 3</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
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
import MdEn from "../../../docs/notice-bar/README.md";
import Md from "../../../docs/zh/notice-bar/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "NoticeBar",
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
          text: "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
          mode: "通知栏模式",
          content: "内容",
          wrapable: "多行展示",
          shortText: "技术是开发它的人的共同灵魂。",
          scrollable: "滚动播放",
          customStyle: "自定义样式",
          verticalScroll: "垂直滚动",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          text: "Technology is the common soul of the people who developed it.",
          mode: "Mode",
          content: "Content",
          wrapable: "Wrapable",
          shortText: "Some short text.",
          customStyle: "Custom Style",
          scrollable: "Scrollable",
          verticalScroll: "Vertical Scroll",
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
/deep/.van-switch {
    margin-left: 16px;
  }
.demo-notice-bar {
  text-align: left;
  background: @white;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
  .van-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .van-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
