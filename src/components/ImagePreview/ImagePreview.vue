<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-19 17:02:41
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:32:33
 * @FilePath: \JoyChat_Compinent\src\components\ImagePreview\ImagePreview.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link @click="showImagePreview1">
        {{ t("showImages") }}
      </van-cell>
    </demo-block>

    <demo-block card :title="t('customConfig')">
      <van-cell is-link @click="showImagePreview1({ startPosition: 1 })">
        {{ t("startPosition") }}
      </van-cell>
      <van-cell is-link @click="showImagePreview1({ closeable: true })">
        {{ t("showClose") }}
      </van-cell>
      <van-cell
        is-link
        @click="
          showImagePreview1({
            onClose() {
              this.$toast('关闭');
            },
          })
        "
      >
        {{ t("closeEvent") }}
      </van-cell>
    </demo-block>

    <demo-block card :title="t('beforeClose')">
      <van-cell is-link @click="showImagePreview2">
        {{ t("beforeClose") }}
      </van-cell>
    </demo-block>

    <demo-block card :title="t('componentCall')">
      <van-cell is-link @click="showComponentCall">
        {{ t("componentCall") }}
      </van-cell>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template #index>{{ `${t("page")}:${index + 1}` }}</template>
      </van-image-preview>
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
import MdEn from "../../../docs/image-preview/README.md";
import Md from "../../../docs/zh/image-preview/README.md";
import DemoBlock from ".././DemoBlock.vue";
import { getLangFromUserAgent } from "../../utils/util";
import { ImagePreview } from "vant";
export default {
  name: "ImagePreview",
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
          closed: "关闭",
          showClose: "展示关闭按钮",
          showImages: "预览图片",
          beforeClose: "异步关闭",
          closeEvent: "监听关闭事件",
          customConfig: "传入配置项",
          startPosition: "指定初始位置",
          componentCall: "组件调用",
          basicUsage: "基础用法",
          page: "页数",
        },
        "en-US": {
          showCode: "Show Code",
          closed: "closed",
          showClose: "Show Close Icon",
          showImages: "Show Images",
          beforeClose: "Before Close",
          closeEvent: "Close Event",
          customConfig: "Custom Config",
          startPosition: "Set Start Position",
          componentCall: "Component Call",
          basicUsage: "Basic Usage",
          page: "page",
        },
      },
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
      show: false,
      index: 0,
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
    showImagePreview1(options) {
      ImagePreview({
        images: this.images,
        ...options,
      });
    },
    showImagePreview2() {
      const instance = ImagePreview({
        images: this.images,
        asyncClose: true,
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    showComponentCall() {
      this.show = true;
    },
    onChange(index1) {
      this.index = index1;
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
/deep/.van-switch {
    margin-left: 16px;
  }
</style>


