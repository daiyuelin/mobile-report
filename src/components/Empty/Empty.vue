<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-19 11:08:02
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-17 15:20:45
-->
<template>
  <div class="demo-empty">
    <demo-block :title="t('basicUsage')">
      <van-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <van-tabs v-model="active">
        <van-tab name="error" :title="t('error')">
          <van-empty image="error" :description="t('description')" />
        </van-tab>
        <van-tab name="network" :title="t('network')">
          <van-empty image="network" :description="t('description')" />
        </van-tab>
        <van-tab name="search" :title="t('search')">
          <van-empty image="search" :description="t('description')" />
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <van-empty :description="t('description')">
        <van-button round type="danger" class="bottom-button">
          {{ t("button") }}
        </van-button>
      </van-empty>
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
import MdEn from "../../../docs/empty/README.md";
import Md from "../../../docs/zh/empty/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Empty",
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
      active: "error",
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          error: "通用错误",
          search: "搜索提示",
          network: "网络错误",
          imageType: "图片类型",
          description: "描述文字",
          customImage: "自定义图片",
          bottomContent: "底部内容",
          basicUsage: "基础用法",
          button: "按钮",
        },
        "en-US": {
          showCode: "Show Code",
          error: "Error",
          search: "Search",
          network: "Network",
          imageType: "Image Type",
          description: "Description",
          customImage: "Custom Image",
          bottomContent: "Bottom Content",
          basicUsage: "Basic Usage",
          button: "Button",
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
    format(rate) {
      return Math.min(Math.max(rate, 0), 100);
    },
    add() {
      this.rate = this.format(this.rate + 20);
    },
    reduce() {
      this.rate = this.format(this.rate - 20);
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
.demo-empty {
  background: @white;
  text-align: left;

  .custom-image {
    .van-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
    height: 40px;
  }

  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>
