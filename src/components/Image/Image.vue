<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-18 14:59:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-16 15:25:31
-->
<template>
  <div class="demo-image">
    <demo-block :title="t('basicUsage')">
      <van-row>
        <van-image width="100" height="100" :src="image" />
      </van-row>
    </demo-block>

    <demo-block :title="t('fitMode')">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <van-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="t('round')">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <van-image round :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="t('loading')">
      <van-row gutter="20">
        <van-col span="8">
          <van-image width="100%" height="27vw" />
          <div class="text">{{ t("defaultTip") }}</div>
        </van-col>

        <van-col span="8">
          <van-image width="100%" height="27vw">
            <template #loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <div class="text">{{ t("customTip") }}</div>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="t('error')">
      <van-row gutter="20">
        <van-col span="8">
          <van-image width="100%" height="27vw" src="x" />
          <div class="text">{{ t("defaultTip") }}</div>
        </van-col>

        <van-col span="8">
          <van-image width="100%" height="27vw" src="x">
            <template #error>{{ t("loadFail") }}</template>
          </van-image>
          <div class="text">{{ t("customTip") }}</div>
        </van-col>
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
import MdEn from "../../../docs/image/README.md";
import Md from "../../../docs/zh/image/README.md";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Image",
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
      image: "https://img.yzcdn.cn/vant/cat.jpeg",
      fits: ["contain", "cover", "fill", "none", "scale-down"],
      i18n: {
        "zh-CN": {
          basicUsage: "基础用法",
          fitMode: "填充模式",
          round: "圆形图片",
          loading: "加载中提示",
          error: "加载失败提示",
          defaultTip: "默认提示",
          customTip: "自定义提示",
          loadFail: "加载失败",
          showCode: "显示源码",
        },
        "en-US": {
          basicUsage: "Basic Usage",
          fitMode: "Fit Mode",
          round: "Round",
          loading: "Loading",
          error: "Error",
          defaultTip: "Default Tip",
          customTip: "Custom Tip",
          loadFail: "Load failed",
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
.demo-image {
  text-align: left;
  overflow-x: hidden;
  background-color: @white;

  .van-row {
    padding: 0 @padding-md;
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

