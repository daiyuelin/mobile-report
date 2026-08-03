<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-21 15:22:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 16:53:57
-->
<template>
  <div class="demo-toast">
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('title1')" @click="$toast(t('text'))" />
      <van-cell is-link :title="t('title2')" @click="showLoadingToast()" />
      <van-cell is-link :title="t('success')" @click="showSuccessToast" />
      <van-cell is-link :title="t('fail')" @click="showFailToast" />
    </demo-block>

    <demo-block card :title="t('customIcon')">
      <van-cell is-link :title="t('customIcon')" @click="showIconToast" />
      <van-cell is-link :title="t('customImage')" @click="showImageToast" />
      <van-cell
        is-link
        :title="t('loadingType')"
        @click="showLoadingToast('spinner')"
      />
    </demo-block>

    <demo-block card :title="t('customPosition')">
      <van-cell is-link :title="t('positionTop')" @click="showTopToast" />
      <van-cell is-link :title="t('positionBottom')" @click="showBottomToast" />
    </demo-block>

    <demo-block card :title="t('updateMessage')">
      <van-cell
        is-link
        :title="t('updateMessage')"
        @click="showCustomizedToast"
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
import MdEn from "../../../docs/toast/README.md";
import Md from "../../../docs/zh/toast/README.md";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Toast",
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
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          basicUsage: "基础用法",
          fail: "失败提示",
          text: "提示内容",
          text2: "成功文案",
          text3: "失败文案",
          text4: (second) => `倒计时 ${second} 秒`,
          title1: "文字提示",
          title2: "加载提示",
          title3: "成功/失败提示",
          success: "成功提示",
          customIcon: "自定义图标",
          customImage: "自定义图片",
          loadingType: "自定义加载图标",
          positionTop: "顶部展示",
          updateMessage: "动态更新提示",
          positionBottom: "底部展示",
          customPosition: "自定义位置",
          loading: "加载中...",
        },
        "en-US": {
          showCode: "Show Code",
          basicUsage: "Basic Usage",
          fail: "Fail",
          text: "Some messages",
          text2: "Success",
          text3: "Fail",
          text4: (second) => `${second} seconds`,
          title1: "Text",
          title2: "Loading",
          title3: "Success/Fail",
          success: "Success",
          customIcon: "Custom Icon",
          customImage: "Custom Image",
          loadingType: "Loading Type",
          positionTop: "Top",
          updateMessage: "Update Message",
          positionBottom: "Bottom",
          customPosition: "Custom Position",
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
    showLoadingToast(loadingType) {
      this.$toast.loading({
        forbidClick: true,
        message: this.t("loading"),
        loadingType,
      });
    },
    showSuccessToast() {
      this.$toast.success(this.t("text2"));
    },
    showFailToast() {
      this.$toast.fail(this.t("text3"));
    },
    showTopToast() {
      this.$toast({
        message: this.t("positionTop"),
        position: "top",
      });
    },
    showBottomToast() {
      this.$toast({
        message: this.t("positionBottom"),
        position: "bottom",
      });
    },
    showIconToast() {
      this.$toast({
        message: this.t("customIcon"),
        icon: "like-o",
      });
    },
    showImageToast() {
      this.$toast({
        message: this.t("customImage"),
        icon: require("../../../log.png"),
      });
    },
    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: this.t("text4", 3),
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.t("text4", second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
@import "../../assets/vant.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
.demo-toast {
  text-align: left;
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

