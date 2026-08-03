<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen Wei/u0037443
 * @Date: 2021-05-21 15:22:02
 * @LastEditors: Chen Wei/u0037443
 * @LastEditTime: 2021-05-27 16:36:34
-->
<template>
  <div class="demo-stepper">
    <van-cell center :title="t('basicUsage')">
      <van-stepper v-model="stepper1" />
    </van-cell>

    <van-cell center :title="t('step')">
      <van-stepper v-model="stepper2" step="2" />
    </van-cell>

    <van-cell center :title="t('range')">
      <van-stepper v-model="stepper3" :min="5" :max="8" />
    </van-cell>

    <van-cell center :title="t('integer')">
      <van-stepper v-model="stepper4" integer />
    </van-cell>

    <van-cell center :title="t('disabled')">
      <van-stepper v-model="stepper5" disabled />
    </van-cell>

    <van-cell center :title="t('disableInput')">
      <van-stepper v-model="disabledInput" disable-input />
    </van-cell>

    <van-cell center :title="t('decimalLength')">
      <van-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </van-cell>

    <van-cell center :title="t('beforeChange')">
      <van-stepper v-model="stepper6" async-change @change="beforeChange" />
    </van-cell>

    <van-cell center :title="t('roundTheme')">
      <van-stepper
        v-model="stepperRound"
        theme="round"
        button-size="22"
        disable-input
      />
    </van-cell>

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
import MdStepperEn from "../../../docs/stepper/README.md";
import MdStepper from "../../../docs/zh/stepper/README.md";
import DemoBlock from "../DemoBlock";
import { getLangFromUserAgent } from "../../utils/util";

export default {
  name: "Stepper",
  components: {
    MdStepperEn,
    MdStepper,
    DemoBlock
  },
  props: {
    msg: String,
  },
  data() {
    return {
      mdComponent: "MdStepperEn",
      checked: false,
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1,
      stepperRound: 1,
      disabledInput: 1,
      i18n: {
        "zh-CN": {
          basicUsage: "基础用法",
          step: "步长设置",
          range: "限制输入范围",
          integer: "限制输入整数",
          roundTheme: "圆角风格",
          beforeChange: "异步变更",
          disableInput: "禁用输入框",
          decimalLength: "固定小数位数",
          disabled: "禁用状态",
          showCode: "显示源码",
        },
        "en-US": {
          basicUsage: "Basic Usage",
          step: "Step",
          range: "Range",
          integer: "Integer",
          roundTheme: "Round Theme",
          beforeChange: "Before Change",
          disableInput: "Disable Input",
          decimalLength: "Decimal Length",
          disabled: "Disabled",
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
        this.mdComponent = "MdStepperEn";
        return this.i18n["en-US"][name];
      } else {
        this.mdComponent = "MdStepper";
        return this.i18n["zh-CN"][name];
      }
    },
    beforeChange(value) {
      this.$toast.loading({ forbidClick: true });

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$toast.clear();
        // 修改value 可再次触发change事件
        this.value = value;
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
.markdown-body {
  padding: 0px 10px 0px 10px;
}
.demo-stepper {
  text-align: left;

  /deep/.van-doc-demo-block {
    padding: 0 @padding-md !important;
  }

  /deep/.van-doc-demo-block__title {
    padding-left: 0 !important;
  }

  &-row {
    margin-bottom: @padding-sm !important;
  }
}
</style>

