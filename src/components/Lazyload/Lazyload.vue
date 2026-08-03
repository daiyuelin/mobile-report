<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-25 11:34:54
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:38:04
 * @FilePath: \JoyChat_Compinent\src\components\Lazyload\Lazyload.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div class="demo-lazyload">
    <demo-block :title="t('basicUsage')">
      <img v-for="img in imageList" :key="img" v-lazy="img" />
    </demo-block>

    <demo-block :title="t('title2')">
      <div
        v-for="img in backgroundImageList"
        :key="img"
        v-lazy:background-image="img"
      />
    </demo-block>

    <demo-block :title="t('title3')">
      <lazy-component>
        <img v-for="img in componentImageList" :key="img" v-lazy="img" />
      </lazy-component>
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
import MdEn from "../../../docs/lazyload/README.md";
import Md from "../../../docs/zh/lazyload/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true,
});

export default {
  name: "Lazyload",
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
          title2: "背景图懒加载",
          title3: "懒加载模块",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          title2: "Lazyload Background Image",
          title3: "Lazyload Component",
          basicUsage: "Basic Usage",
        },
      },
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
      backgroundImageList: [
        "https://img.yzcdn.cn/vant/apple-5.jpg",
        "https://img.yzcdn.cn/vant/apple-6.jpg",
      ],
      componentImageList: [
        "https://img.yzcdn.cn/vant/apple-8.jpg",
        "https://img.yzcdn.cn/vant/apple-7.jpg",
      ],
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
.demo-lazyload {
  padding-right: @padding-md;
  padding-left: @padding-md;

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: @padding-md;
    padding: @padding-md;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
