<template>
  <div class="demo-circle">
    <demo-block :title="t('basicUsage')">
      <van-circle
        v-model="currentRate1"
        :rate="rate"
        :speed="100"
        :text="currentRate1.toFixed(0) + '%'"
      />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <van-circle
        v-model="currentRate3"
        :rate="rate"
        :speed="100"
        :stroke-width="60"
        :text="t('customWidth')"
      />

      <van-circle
        v-model="currentRate3"
        color="#92A2BD"
        :rate="rate"
        layer-color="#ebedf0"
        :speed="100"
        :text="t('customColor')"
      />

      <van-circle
        v-model="currentRate2"
        :rate="rate"
        :speed="100"
        :color="gradientColor"
        :text="t('gradient')"
      />

      <van-circle
        v-model="currentRate4"
        color="#92A2BD"
        :rate="rate"
        :speed="100"
        :clockwise="false"
        :text="t('counterClockwise')"
        style="margin-top: 15px"
      />

      <van-circle
        v-model="currentRate4"
        color="#7232dd"
        :rate="rate"
        :speed="100"
        size="120px"
        :clockwise="false"
        :text="t('customSize')"
        style="margin-top: 15px"
      />
    </demo-block>

    <div style="margin-top: 15px">
      <van-button :text="t('add')" type="primary" size="small" @click="add" />
      <van-button
        :text="t('decrease')"
        type="danger"
        size="small"
        @click="reduce"
      />
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
import MdEn from "../../../docs/circle/README.md";
import Md from "../../../docs/zh/circle/README.md";
import { getLangFromUserAgent } from "../../utils/util";
export default {
  name: "Circle",
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
      rate: 70,
      currentRate1: 70,
      currentRate2: 70,
      currentRate3: 70,
      currentRate4: 70,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6",
      },
      i18n: {
        "zh-CN": {
          showCode: "显示源码",
          gradient: "渐变色",
          customSize: "大小定制",
          customStyle: "样式定制",
          customColor: "颜色定制",
          customWidth: "宽度定制",
          counterClockwise: "逆时针",
          add: "增加",
          decrease: "减少",
          basicUsage: "基础用法",
        },
        "en-US": {
          showCode: "Show Code",
          gradient: "Gradient",
          customSize: "Custom Size",
          customStyle: "Custom Style",
          customColor: "Custom Color",
          customWidth: "Custom Width",
          counterClockwise: "Counter Clockwise",
          add: "Add",
          decrease: "Decrease",
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
.demo-circle {
  text-align: left;
  .van-circle {
    margin-left: @padding-md;
  }

  .van-button {
    margin: @padding-md 0 0 10px;

    &:first-of-type {
      margin-left: @padding-md;
    }
  }
  /deep/.van-switch {
    margin-left: 16px;
  }
}
</style>

