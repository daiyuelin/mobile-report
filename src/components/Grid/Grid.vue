<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Edison Chen
 * @Date: 2021-05-20 15:27:41
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-21 10:54:39
 * @FilePath: \JoyChat_Compinent\src\components\Grid\Grid.vue
 * Copyright (C) 2021 Edison Chen. All rights reserved.
-->
<template>
  <div>
    <demo-block :title="t('basicUsage')">
      <van-grid>
        <van-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </van-grid-item>
      </van-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <van-grid square>
        <van-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <van-grid :gutter="10">
        <van-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </van-grid>
    </demo-block>

    <demo-block :title="t('horizontal')">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="photo-o" :text="t('text')" />
        <van-grid-item icon="photo-o" :text="t('text')" />
        <van-grid-item icon="photo-o" :text="t('text')" />
      </van-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <van-grid clickable :column-num="2">
        <van-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <van-grid-item icon="search" :text="t('urlRoute')" url="#/button" />
      </van-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <van-grid :column-num="2">
        <van-grid-item icon="home-o" :text="t('text')" dot />
        <van-grid-item icon="search" :text="t('text')" badge="99+" />
      </van-grid>
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
import MdEn from "../../../docs/grid/README.md";
import Md from "../../../docs/zh/grid/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Grid",
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
          text: "文字",
          route: "页面导航",
          gutter: "格子间距",
          square: "正方形格子",
          columnNum: "自定义列数",
          customContent: "自定义内容",
          urlRoute: "URL 跳转",
          vueRoute: "路由跳转",
          showBadge: "徽标提示",
          horizontal: "内容横排",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          text: "Text",
          route: "Route",
          gutter: "Gutter",
          square: "Square",
          columnNum: "Column Num",
          customContent: "Custom Content",
          urlRoute: "URL",
          vueRoute: "Vue Router",
          showBadge: "Show Badge",
          horizontal: "Horizontal",
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
</style>
