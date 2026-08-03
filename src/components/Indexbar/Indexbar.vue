<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-20 13:11:30
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-21 11:04:13
 * @FilePath: \JoyChat_Compinent\src\components\Indexbar\Indexbar.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <van-tabs v-model="activeTab">
      <van-tab :title="t('basicUsage')">
        <van-index-bar>
          <div v-for="index in indexList" :key="index">
            <van-index-anchor :index="index" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
          </div>
        </van-index-bar>
      </van-tab>

      <van-tab :title="t('customIndexList')">
        <van-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <van-index-anchor :index="index">
              {{ t("title") + index }}
            </van-index-anchor>
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
          </div>
        </van-index-bar>
      </van-tab>
    </van-tabs>
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
import MdEn from "../../../docs/index-bar/README.md";
import Md from "../../../docs/zh/index-bar/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Indexbar",
  components: {
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
          text: "文本",
          customIndexList: "自定义索引列表",
          basicUsage: "基础用法",
          title: "标题",
        },
        "en-US": {
          showCode: "Show Code",
          text: "Text",
          customIndexList: "Custom Index List",
          basicUsage: "Basic Usage",
          title: "Title",
        },
      },
      activeTab: 0,
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
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
@import "./index.less";
.markdown-body {
  background: @white;
  padding: 0px 10px 0px 10px;
}
/deep/.van-switch {
  margin-left: 16px;
}
</style>
