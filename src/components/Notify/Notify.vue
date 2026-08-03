<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-24 16:48:13
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:52:16
-->
<template>
  <div class="demo-notify">
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('basicUsage')" @click="showNotify" />
    </demo-block>

    <demo-block card :title="t('notifyType')">
      <van-cell is-link :title="t('primary')" @click="showType('primary')" />
      <van-cell is-link :title="t('success')" @click="showType('success')" />
      <van-cell is-link :title="t('danger')" @click="showType('danger')" />
      <van-cell is-link :title="t('warning')" @click="showType('warning')" />
    </demo-block>

    <demo-block card :title="t('customNotify')">
      <van-cell is-link :title="t('customColor')" @click="showCustomColor" />
      <van-cell
        is-link
        :title="t('customDuration')"
        @click="showCustomDuration"
      />
    </demo-block>

    <demo-block card :title="t('componentCall')">
      <van-cell
        is-link
        :title="t('componentCall')"
        @click="showComponentCall"
      />

      <van-notify v-model="show" type="success">
        <van-icon name="bell" style="margin-right: 4px" />
        <span>{{ t("content") }}</span>
      </van-notify>
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
import MdEn from "../../../docs/notify/README.md";
import Md from "../../../docs/zh/notify/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Notify",
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
          primary: "主要通知",
          success: "成功通知",
          danger: "危险通知",
          warning: "警告通知",
          content: "通知内容",
          notifyType: "通知类型",
          customColor: "自定义颜色",
          customNotify: "自定义配置",
          componentCall: "组件调用",
          customDuration: "自定义时长",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          primary: "Primary",
          success: "Success",
          danger: "Danger",
          warning: "Warning",
          content: "Notify Message",
          notifyType: "Notify Type",
          customColor: "Custom Color",
          customNotify: "Custom Notify",
          componentCall: "Component Call",
          customDuration: "Custom Duration",
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
    showNotify() {
      this.$notify(this.t("content"));
    },

    showCustomColor() {
      this.$notify({
        color: "#ad0000",
        message: this.t("customColor"),
        background: "#ffe1e1",
      });
    },

    showCustomDuration() {
      this.$notify({
        message: this.t("customDuration"),
        duration: 1000,
      });
    },

    showType(type) {
      this.$notify({
        message: this.t("content"),
        type,
      });
    },

    showComponentCall() {
      let _this = this;
      this.show = true;
      setTimeout(() => {
        _this.show = false;
      }, 2000);
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
.demo-notify {
  text-align: left;
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
