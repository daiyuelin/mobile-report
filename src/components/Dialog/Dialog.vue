<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-21 15:22:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 17:24:08
-->
<template>
  <div class="demo-dialog">
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('alert1')" @click="onClickAlert" />
      <van-cell is-link :title="t('alert2')" @click="onClickAlert2" />
      <van-cell is-link :title="t('confirm')" @click="onClickConfirm" />
    </demo-block>

    <demo-block card :title="t('roundButton')">
      <van-cell is-link :title="t('alert1')" @click="onClickRound" />
      <van-cell is-link :title="t('alert2')" @click="onClickRound2" />
    </demo-block>

    <demo-block card :title="t('beforeClose')">
      <van-cell is-link :title="t('beforeClose')" @click="onClickBeforeClose" />
    </demo-block>

    <demo-block card :title="t('componentCall')">
      <van-cell is-link :title="t('componentCall')" @click="show = true" />
      <van-dialog
        v-model="show"
        :title="t('title')"
        :confirm-button-text="t('confirmButtonText')"
        :cancel-button-text="t('cancelButtonText')"
        show-cancel-button
      >
        <img :src="image" />
      </van-dialog>
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
import MdEn from "../../../docs/dialog/README.md";
import Md from "../../../docs/zh/dialog/README.md";
import { getLangFromUserAgent } from "../../utils/util";
import { Dialog } from "vant";

Dialog.setDefaultOptions({
  confirmButtonText: getLangFromUserAgent() === "en" ? "Confirm" : "确认",
  cancelButtonText: getLangFromUserAgent() === "en" ? "Cancel" : "取消",
});

export default {
  name: "Dialog",
  components: {
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
      image: "https://img.yzcdn.cn/vant/apple-3.jpg",
      show: false,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          basicUsage: "基础用法",
          alert1: "提示弹窗",
          title: "标题",
          alert2: "提示弹窗（无标题）",
          confirm: "确认弹窗",
          beforeClose: "异步关闭",
          roundButton: "圆角按钮样式",
          componentCall: "组件调用",
          content: "代码是写出来给人看的，附带能在机器上运行",
          confirmButtonText: "确认",
          cancelButtonText: "取消",
        },
        "en-US": {
          showCode: "Show Code",
          basicUsage: "Basic Usage",
          alert1: "Alert",
          title: "Title",
          alert2: "Alert without title",
          confirm: "Confirm dialog",
          beforeClose: "Before Close",
          roundButton: "Round Button Style",
          componentCall: "Component Call",
          content:
            "Code is written for people to see, with the ability to run on the machine",
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
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
    onClickAlert() {
      this.$dialog.alert({
        title: this.t("title"),
        message: this.t("content"),
      });
    },
    onClickAlert2() {
      this.$dialog.alert({
        message: this.t("content"),
      });
    },
    onClickRound() {
      this.$dialog.alert({
        theme: "round-button",
        title: this.t("title"),
        message: this.t("content"),
        confirmButtonColor: "#444444",
      });
    },
    onClickRound2() {
      this.$dialog.alert({
        theme: "round-button",
        message: this.t("content"),
        confirmButtonColor: "#444444",
      });
    },
    onClickConfirm() {
      this.$dialog.confirm({
        title: this.t("title"),
        message: this.t("content"),
      });
    },
    onClickBeforeClose() {
      function beforeClose(action, done) {
        if (action === "confirm" || action === "确认") {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: this.t("title"),
        message: this.t("content"),
        beforeClose,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-dialog {
  text-align: left;
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

