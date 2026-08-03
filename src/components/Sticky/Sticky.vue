<!--
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2021-05-20 13:43:58
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2021-06-18 13:14:16
-->
<template>
  <div>
    <div class="demo-sticky">
      <demo-block :title="t('basicUsage')">
        <van-sticky>
          <van-button type="primary" style="margin-left: 15px">
            {{ t("basicUsage") }}
          </van-button>
        </van-sticky>
      </demo-block>

      <demo-block :title="t('offsetTop')">
        <van-sticky :offset-top="50">
          <van-button type="primary" style="margin-left: 115px">
            {{ t("offsetTop") }}
          </van-button>
        </van-sticky>
      </demo-block>

      <demo-block :title="t('setContainer')">
        <div ref="container" style="height: 150px; background-color: #fff">
          <van-sticky :container="container">
            <van-button type="warning" style="margin-left: 215px">
              {{ t("setContainer") }}
            </van-button>
          </van-sticky>
        </div>
      </demo-block>
    </div>
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
import MdEn from "../../../docs/sticky/README.md";
import Md from "../../../docs/zh/sticky/README.md";
import DemoBlock from ".././DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Sticky",
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
      container: null,
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          offsetTop: "吸顶距离",
          setContainer: "指定容器",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          offsetTop: "Offset Top",
          setContainer: "Set Container",
          basicUsage: "Basic Usage",
        },
      },
    };
  },
  mounted() {
    this.container = this.$refs.container;
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
    nextStep() {
      this.active = ++this.active % 4;
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
.demo-sticky {
  text-align: left;
  height: calc(150vh);

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
